const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog.js`)

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running markdown grapqhl query`)
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: { id: node.id },
    })
  })
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `Mdx`) {
//     console.log('node', node)
//   }
// }
