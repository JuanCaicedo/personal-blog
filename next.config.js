module.exports = () => {
  const withMdx = require('@zeit/next-mdx')()
  const withCSS = require('@zeit/next-css')

  return withMdx(
    withCSS({
      target: 'serverless'
    })
  )
}
