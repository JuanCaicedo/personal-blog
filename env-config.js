const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod ? 'window.location' : 'https://localhost:8080'
}
