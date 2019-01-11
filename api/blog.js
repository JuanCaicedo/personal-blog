const { send } = require('micro')
const { router, get } = require('microrouter')
const fs = require('fs')
const path = require('path')
const util = require('util')

const readDirAsync = util.promisify(fs.readdir)
const listAllPosts = () => readDirAsync(path.resolve(__dirname, '../content'))

const list = async (req, res) => {
  try {
    const all = await listAllPosts()
    console.log('all', all)
    send(res, 200, all)
  } catch (e) {
    console.error('Error in reading posts', e)
  }
}
const notfound = async (req, res) => send(res, 404, 'Not found route')

module.exports = router(get('/list', list), get('/*', notfound))
