const { send } = require('micro')
const { router, get } = require('microrouter')
const fs = require('fs')
const path = require('path')
const util = require('util')
const fm = require('front-matter')

const readDirAsync = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const postsPath = path.resolve(__dirname, '../posts')

const listAllPosts = async () => {
  const fileNames = await readDirAsync(postsPath)
  const fileContents = await Promise.all(
    fileNames.map(name => readFile(`${postsPath}/${name}`, 'utf8'))
  )
  const result = fileContents.map(file => fm(file)).map(file => {
    return file.attributes
  })

  return result
}

const list = async (req, res) => {
  try {
    const all = await listAllPosts()
    send(res, 200, all)
  } catch (e) {
    console.error('Error in reading posts', e)
  }
}
const notfound = async (req, res) => send(res, 404, 'Not found route')

module.exports = router(get('/list', list), get('/*', notfound))
