const { send } = require('micro')
const { router, get } = require('microrouter')
const cors = require('micro-cors')()
const fs = require('fs')
const path = require('path')
const util = require('util')
const fm = require('front-matter')
const dateFns = require('date-fns')
const query = require('micro-query')

const readDirAsync = util.promisify(fs.readdir)
const readFileAsync = util.promisify(fs.readFile)

const postsPath = path.resolve(__dirname, '../posts')

const listAllPosts = async () => {
  const fileNames = await readDirAsync(postsPath)

  const fileContents = await Promise.all(
    fileNames
      .filter(name => /mdx$/.test(name))
      .map(name => readFileAsync(`${postsPath}/${name}`, 'utf8'))
  )
  const result = fileContents.map(file => fm(file)).map(file => ({
    ...file.attributes,
    body: file.body
  }))

  return result
}

const blogApi = async (req, res) => {
  try {
    const { slug } = query(req)
    const all = await listAllPosts()
    const sorted = all.sort(({ date }, { date: previousDate }) =>
      dateFns.isBefore(dateFns.parse(date), dateFns.parse(previousDate))
    )

    if (!slug) {
      return send(res, 200, sorted)
    }

    const post = sorted.filter(post => post.slug === slug)[0]
    if (!post) {
      return send(res, 404, 'Not found route')
    }

    return send(res, 200, post)
  } catch (e) {
    console.error('Error in reading posts', e)
  }
}

module.exports = cors(blogApi)
