const { send } = require('micro')

module.exports = async (req, res) => {
  send(res, 200, { time: new Date().toString() })
}
