module.exports = () => {
  const withCSS = require('@zeit/next-css')

  return withCSS({
    target: 'serverless'
  })
}
