const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.API_PORT': prod ? '' : ':7000',
  'process.env.API_PROTOCOL': prod ? 'https' : 'http',
  'process.env.NODE_ENV': process.env.NODE_ENV || 'development'
}
