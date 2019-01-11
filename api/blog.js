const { send } = require('micro')

const prod = process.env.NODE_ENV === 'production'

module.exports = async (req, res) => {
  send(res, 200, { time: new Date().toString() })
}
