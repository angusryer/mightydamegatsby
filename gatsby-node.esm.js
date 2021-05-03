import Amplify from "aws-amplify"
import fetchData, {
  PRODUCTS,
  PROGRAMS,
  REVIEWS,
} from "./src/providers/dataProvider.js"
import fs from "fs"
import awsmobile from "./src/aws-exports"

Amplify.configure(awsmobile)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/members/)) {
    page.matchPath = "/members/*"
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
    resolve: {
      fallback: { path: require.resolve("path-browserify") },
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ProductsInfo implements Node {
      available: Boolean
      brand: String
      categories: [String]
      id: ID
      keywords: [String]
      longDescription: String
      mainImageFileName: String
      otherImageFileNames: [String]
      price: Float
      salePrice: Float
      shortDescription: String
      title: String
    }

    type ProgramsInfo implements Node {
      available: Boolean
      brand: String
      categories: [String]
      id: ID
      keywords: [String]
      longDescription: String
      mainImageFileName: String
      otherImageFileNames: [String]
      price: Float
      salePrice: Float
      shortDescription: String
      title: String
      numberOfSessions: Float
      lengthOfSessionInHours: Float
      frequencyOfSessionsPerWeek: Float
    }

    type ReviewsInfo implements Node {
      id: ID
      rating: Int
      title: String
      comment: String
      ownerId: ID
      user: User
    }

    type User implements Node {
      id: ID
      displayName: String
      avatarUrl: String
    }
  `
  createTypes(typeDefs)
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
