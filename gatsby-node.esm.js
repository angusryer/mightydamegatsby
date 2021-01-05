import Amplify from "aws-amplify"
import fetchData from "./providers/dataProvider.js"
import config from "./src/aws-exports"

Amplify.configure(config)

const graphql = require("graphql")


//
// Create top-level data nodes for Gatsby to construct GraphQL queries around ???
//

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {

  const { createNode } = actions
  const products = await fetchData("PRODUCTS_DATA")
  const programs = await fetchData("PROGRAMS_DATA")
  const reviews = await fetchData("REVIEWS_DATA")

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



  // create category info for home page
  // const productsByCategory = products.reduce((acc, next) => {
  //   const categories = next.categories

  //   categories.forEach((c) => {
  //     const index = acc.findIndex((item) => item.name === c)
  //     if (index !== -1) {
  //       const item = acc[index]
  //       item.itemCount = item.itemCount + 1
  //       acc[index] = item
  //     } else {
  //       const item = {
  //         name: c,
  //         image: next.image,
  //         itemCount: 1,
  //       }
  //       acc.push(item)
  //     }
  //   })
  //   return acc
  // }, [])

  // //
  // const catData = {
  //   key: "category-info",
  //   data: productsByCategory,
  // }

  // const catNodeContent = JSON.stringify(catData)
  // const catNodeMeta = {
  //   id: createNodeId(`my-data-${catData.key}`),
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: `CategoryInfo`,
  //     mediaType: `json`,
  //     content: catNodeContent,
  //     contentDigest: createContentDigest(catData),
  //   },
  // }

  // const catNode = Object.assign({}, catData, catNodeMeta)
  // createNode(catNode)

  // /* all products */
  // const productsData = {
  //   key: "all-products",
  //   data: products,
  // }

  // const productsNodeContent = JSON.stringify(productsData)
  // const productsNodeMeta = {
  //   id: createNodeId(`my-data-${productsData.key}`),
  //   parent: null,
  //   children: [],
  //   internal: {
  //     type: `InventoryInfo`, // TODO change to ProductsInfo? Or is this set in a schema elsewhere?
  //     mediaType: `json`,
  //     content: productsNodeContent,
  //     contentDigest: createContentDigest(productsData),
  //   },
  // }

  // const productsNode = Object.assign({}, productsData, productsNodeMeta)
  // createNode(productsNode)
} // end of exports.sourceNodes




// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const products = await getProducts()
//   const programs = await getPrograms()

//   // implement the creation of pages from products and programs

//   console.log("==== 33333 ====")

//   createPage({
//     path: "all-product-categories",
//     component: CategoryView,
//     context: {
//       content: products,
//       title: "All Product Categories",
//       type: "categoryPage",
//     },
//   })

//   createPage({
//     path: "all-program-categories",
//     component: CategoryView,
//     context: {
//       content: programs,
//       title: "All Program Categories",
//       type: "categoryPage",
//     },
//   })

//   // Loop through all products, and create a nested list of products within their categories
//   // TODO tear this one out into its own reusable function that takes "items" as parameter
//   // instead of "products"
//   const productsByCategory = products.reduce((acc, next) => {
//     const categories = next.categories
//     categories.forEach((c) => {
//       if (acc[c]) {
//         acc[c].items.push(next)
//       } else {
//         acc[c] = {}
//         acc[c].items = []
//         acc[c].items.push(next)
//       }
//     })
//     return acc
//   }, {}) // initial value for acc, just in case there are no items at start

//   // get a simple array of category names
//   const categories = Object.keys(productsByCategory)

//   // TODO tear the following two functions into their own reusable function
//   // create a page for each category
//   categories.map(async (category, index) => {
//     const previous =
//       index === categories.length - 1 ? null : categories[index + 1] // used to be categories[index + 1].node
//     const next = index === 0 ? null : categories[index - 1]
//     createPage({
//       path: makeSlug(category),
//       component: CategoryView,
//       context: {
//         content: productsByCategory[category],
//         title: category,
//         type: "categoryPage",
//         previous, // not currently used
//         next, // not currently used
//       },
//     })
//   })

//   // create a page for each product
//   products.map(async (item, index) => {
//     const previous = index === products.length - 1 ? null : products[index + 1] // used to be products[index + 1].node
//     const next = index === 0 ? null : products[index - 1]
//     createPage({
//       path: makeSlug(item.title),
//       component: ItemView,
//       context: {
//         content: item,
//         title: item.title,
//         type: "itemPage",
//         previous, // not currently used
//         next, // not currently used
//       },
//     })
//   })
// }




// // FETCH PRODUCTS
// async function fetchProducts() {
//   const listProductsQuery = tag(`
//   query listProducts {
//     listProducts(limit: 500) {
//       items {
//         id
//         categories
//         price
//         title
//         image
//         description
//         available
//         brand
//       }
//     }
//   }
//   `)

//   // currentInventory

//   const gqlProductsData = await axios({
//     url: config.aws_appsync_graphqlEndpoint,
//     method: "post",
//     headers: {
//       "x-api-key": config.aws_appsync_apiKey,
//     },
//     data: {
//       query: print(listProductsQuery),
//     },
//   })

//   let products = gqlProductsData.data.data.listProducts.items

//   await Promise.all(
//     products.map(async (item, index) => {
//       try {
//         const relativeUrl = `../downloads/${item.image}`
//         if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
//           const image = await Storage.get(item.image)
//           await downloadImage(image)
//         }
//         products[index].image = relativeUrl
//       } catch (err) {
//         console.log("error downloading image: ", err)
//       }
//     })
//   )
//   return products
// }



// // FETCH REVIEWS
// async function fetchReviews() {
//   const listReviewsQuery = tag(`
//   query listProducts {
//     listProducts(limit: 500) {
//       items {
//         id
//         categories
//         price
//         name
//         image
//         description
//         currentInventory
//         brand
//       }
//     }
//   }
//   `)

//   const gqlReviewsData = await axios({
//     url: config.aws_appsync_graphqlEndpoint,
//     method: "post",
//     headers: {
//       "x-api-key": config.aws_appsync_apiKey,
//     },
//     data: {
//       query: print(listReviewsQuery),
//     },
//   })

//   let reviews = gqlReviewsData.data.data.listReviews.items

//   await Promise.all(
//     reviews.map(async (item, index) => {
//       try {
//         const relativeUrl = `../downloads/${item.image}`
//         if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
//           const image = await Storage.get(item.image)
//           await downloadImage(image)
//         }
//         reviews[index].image = relativeUrl
//       } catch (err) {
//         console.log("error downloading image: ", err)
//       }
//     })
//   )
//   return reviews
// }

// // FETCH SUBSCRIBERS
// async function fetchSubscribers() {
//   const listSubscribersQuery = tag(`
//   query listProducts {
//     listProducts(limit: 500) {
//       items {
//         id
//         categories
//         price
//         name
//         image
//         description
//         currentInventory
//         brand
//       }
//     }
//   }
//   `)

//   const gqlSubscribersData = await axios({
//     url: config.aws_appsync_graphqlEndpoint,
//     method: "post",
//     headers: {
//       "x-api-key": config.aws_appsync_apiKey,
//     },
//     data: {
//       query: print(listSubscribersQuery),
//     },
//   })

//   let subscribers = gqlSubscribersData.data.data.listSubscribers.items

//   await Promise.all(
//     subscribers.map(async (item, index) => {
//       try {
//         const relativeUrl = `../downloads/${item.image}`
//         if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
//           const image = await Storage.get(item.image)
//           await downloadImage(image)
//         }
//         subscribers[index].image = relativeUrl
//       } catch (err) {
//         console.log("error downloading image: ", err)
//       }
//     })
//   )
//   return subscribers
// }

// // FETCH PROGRAMS
// async function fetchPrograms() {
//   const listPragramsQuery = tag(`
//   query listProducts {
//     listProducts(limit: 500) {
//       items {
//         id
//         categories
//         price
//         name
//         image
//         description
//         currentInventory
//         brand
//       }
//     }
//   }
//   `)

//   const gqlProgramsData = await axios({
//     url: config.aws_appsync_graphqlEndpoint,
//     method: "post",
//     headers: {
//       "x-api-key": config.aws_appsync_apiKey,
//     },
//     data: {
//       query: print(listProgramsQuery),
//     },
//   })

//   let programs = gqlProgramsData.data.data.listPrograms.items

//   if (!fs.existsSync(`${__dirname}/public/downloads`)) {
//     fs.mkdirSync(`${__dirname}/public/downloads`)
//   }

//   await Promise.all(
//     programs.map(async (item, index) => {
//       try {
//         const relativeUrl = `../downloads/${item.image}`
//         if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
//           const image = await Storage.get(item.image)
//           await downloadImage(image)
//         }
//         programs[index].image = relativeUrl
//       } catch (err) {
//         console.log("error downloading image: ", err)
//       }
//     })
//   )
//   return programs
// }

// // ORIGINAL FETCH INVENTORY
// async function fetchInventory() {
//   const listInventoryQuery = tag(`
//     query listInventory {
//       listInventory(limit: 500) {
//         items {
//           id
//           categories
//           price
//           name
//           image
//           description
//           currentInventory
//           brand
//         }
//       }
//     }
//   `)

//   const gqlInventoryData = await axios({
//     url: config.aws_appsync_graphqlEndpoint,
//     method: "post",
//     headers: {
//       "x-api-key": config.aws_appsync_apiKey,
//     },
//     data: {
//       query: print(listInventoryQuery),
//     },
//   })

//   let inventory = gqlInventoryData.data.data.listInventory.items

//   if (!fs.existsSync(`${__dirname}/public/downloads`)) {
//     fs.mkdirSync(`${__dirname}/public/downloads`)
//   }

//   await Promise.all(
//     inventory.map(async (item, index) => {
//       try {
//         const relativeUrl = `../downloads/${item.image}`
//         if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
//           const image = await Storage.get(item.image)
//           await downloadImage(image)
//         }
//         inventory[index].image = relativeUrl
//       } catch (err) {
//         console.log("error downloading image: ", err)
//       }
//     })
//   )
//   return inventory
// }
