const withMdx = require('@zeit/next-mdx')();
const withCSS = require('@zeit/next-css');
module.exports = withMdx(withCSS());
