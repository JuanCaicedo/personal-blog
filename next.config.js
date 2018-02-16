const withCss = require('@zeit/next-css')
const withMdxc = require('@zeit/next-mdxc')
module.exports = withMdxc(withCss())
