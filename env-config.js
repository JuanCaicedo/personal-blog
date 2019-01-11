const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.API_URL': prod
    ? 'https://${ req.headers.host }'
    : 'http://localhost:7000',
  'process.env.NODE_ENV': process.env.NODE_ENV
}
