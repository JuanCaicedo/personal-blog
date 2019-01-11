const { send } = require('micro')
const { router, get } = require('microrouter')
const cors = require('micro-cors')()
const fs = require('fs')
const path = require('path')
const util = require('util')
const fm = require('front-matter')
const dateFns = require('date-fns')

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
  const result = fileContents.map(file => fm(file)).map(file => {
    return file.attributes
  })

  return result
}

const findPostBySlug = async (req, res) => {
  const content = await readFileAsync(
    `${postsPath}/${req.params.slug}.mdx`,
    'utf8'
  )
  const { attributes, body } = fm(content)
  return { ...attributes, content: body }
}

const list = async (req, res) => {
  try {
    const all = await listAllPosts()
    const sorted = all.sort(({ date }, { date: previousDate }) =>
      dateFns.isBefore(dateFns.parse(date), dateFns.parse(previousDate))
    )

    send(res, 200, sorted)
  } catch (e) {
    console.error('Error in reading posts', e)
  }
}
const notfound = async (req, res) => send(res, 404, 'Not found route')

module.exports = router(
  get('/list', cors(list)),
  get('/:slug', cors(findPostBySlug)),
  get('/*', notfound)
)
