const { send } = require('micro')
const { router, get } = require('microrouter')

const list = async (req, res) => send(res, 200, [{ name: 'test' }])
const notfound = async (req, res) => send(res, 404, 'Not found route')

module.exports = router(get('/list', list), get('/*', notfound))
