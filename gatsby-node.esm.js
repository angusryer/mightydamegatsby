import Amplify from "aws-amplify"
import fetchData from "./providers/dataProvider.js"
import fs from "fs"
import awsmobile from "./src/aws-exports"
import { PRODUCTS, PROGRAMS, REVIEWS } from "./providers/dataProvider"

Amplify.configure(awsmobile)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}

exports.onCreateNode = ({ node, actions }) => {
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
  const products = await fetchData(PRODUCTS, fs)
  const programs = await fetchData(PROGRAMS, fs)
  const reviews = await fetchData(REVIEWS)
  console.log("PRODUCTS from gatsby-node ==> ", products)

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
