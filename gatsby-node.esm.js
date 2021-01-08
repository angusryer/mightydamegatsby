import Amplify from "aws-amplify"
import fetchData from "./providers/dataProvider.js"
import config from "./src/aws-exports"
import fs from 'fs'

Amplify.configure(config)

const graphql = require("graphql")

//
// Create top-level data nodes for Gatsby to construct GraphQL queries around ???
//

exports.onCreateNode = ({ node, actions}) => {
  const { createNodeField } = actions
  if (node.internal.type === `File`) {
    fs.readFile(node.absolutePath, undefined, (_err, buf) => {
      createNodeField({ node, name: `contents`, value: buf.toString() })
    })
  }
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {

  const { createNode } = actions
  const products = await fetchData("PRODUCTS_DATA", fs)
  const programs = await fetchData("PROGRAMS_DATA", fs)
  const reviews = await fetchData("REVIEWS_DATA", fs)

  // create products node
  const productsData = {
    key: "productsInfo",
    data: products,
  }

  const productsNodeContent = JSON.stringify(productsData)
  const productsNodeMeta = {
    id: createNodeId(`mdf_${productsData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `ProductsInfo`,
      mediaType: `json`,
      content: productsNodeContent,
      contentDigest: createContentDigest(productsData),
    },
  }

  const productsNode = Object.assign({}, productsData, productsNodeMeta)
  createNode(productsNode)


  // create programs node
  const programsData = {
    key: "programsInfo",
    data: programs,
  }

  const programsNodeContent = JSON.stringify(programsData)
  const programsNodeMeta = {
    id: createNodeId(`mdf_${programsData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `ProgramsInfo`,
      mediaType: `json`,
      content: programsNodeContent,
      contentDigest: createContentDigest(programsData),
    },
  }

  const programsNode = Object.assign({}, programsData, programsNodeMeta)
  createNode(programsNode)
  

  // create reviews node
  const reviewsData = {
    key: "reviewsInfo",
    data: reviews,
  }

  const reviewsNodeContent = JSON.stringify(reviewsData)
  const reviewsNodeMeta = {
    id: createNodeId(`mdf_${reviewsData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `ReviewsInfo`,
      mediaType: `json`,
      content: reviewsNodeContent,
      contentDigest: createContentDigest(reviewsData),
    },
  }

  const reviewsNode = Object.assign({}, reviewsData, reviewsNodeMeta)
  createNode(reviewsNode)

}


// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//   // Query for markdown nodes to use in creating pages.
//   // You can query for whatever data you want to create pages for e.g.
//   // products, portfolio items, landing pages, etc.
//   // Variables can be added as the second function parameter
//   return graphql(`
//     query loadPagesQuery ($limit: Int!) {
//       allMarkdownRemark(limit: $limit) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `, { limit: 1000 }).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     // Create blog post pages.
//     result.data.allMarkdownRemark.edges.forEach(edge => {
//       createPage({
//         // Path for this page — required
//         path: `${edge.node.frontmatter.slug}`,
//         component: blogPostTemplate,
//         context: {
//           // Add optional context data to be inserted
//           // as props into the page component..
//           //
//           // The context data can also be used as
//           // arguments to the page GraphQL query.
//           //
//           // The page "path" is always available as a GraphQL
//           // argument.
//         },
//       })
//     })
//   })
// }
