/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create custom fields on GraphQL nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if ([`MarkdownRemark`, `Mdx`].includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// Create pages based on GraphQL query
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return graphql(`
//     {
//       allMarkdownRemark(
//         filter: {fields: {slug: {regex: "/portfolio/"}}},
//         sort: {fields: frontmatter___date, order: DESC}
//       ) {
//         nodes {
//           fields {
//             slug
//           }
//           frontmatter {
//             date
//             brand
//             color
//             cover
//             id
//             section
//             tagline
//             title
//           }
//           html
//         }
//       }
//     }
//   `
//   ).then(result => {
//     const allNodes = [...result.data.allMarkdownRemark.nodes]
//     allNodes.forEach((node, i) => {
//       const slug = node.fields.slug
//       const prevNode = allNodes[i - 1] || null
//       const nextNode = allNodes[i + 1] || null
//       createPage({
//         path: slug,
//         component: path.resolve(`./src/templates/portfolio-page/portfolio-template.js`),
//         context: {
//           node,
//           slug,
//           prevNode,
//           nextNode
//         },
//       })
//     })
//   })
// }
