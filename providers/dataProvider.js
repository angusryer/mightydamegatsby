import axios from "axios"
import Amplify, { Storage } from "aws-amplify"
import tag from "graphql-tag"
import fs from "fs"
import downloadImage from "../utils/downloadImage"

import config from "../src/aws-exports"
import programs from "./programs"
import reviews from "./reviews"
// import products from "./products"

Amplify.configure(config)

const graphql = require("graphql")
const { print } = graphql

export default function fetchData(dataType) {
  return new Promise(async (resolve, reject) => {
    switch (dataType) {
      case "PROGRAMS_DATA":
        const gqlProgramsData = await axios({
          url: config.aws_appsync_graphqlEndpoint,
          method: "post",
          headers: {
            "x-api-key": config.aws_appsync_apiKey,
          },
          data: {
            query: print(listAllServicesQuery),
          },
        })
        let programs = gqlProgramsData.data.data.ByOfferType.items
        await Promise.all(
          programs.map(async (item, index) => {
            try {
              const relativeUrl = `../downloads/${item.image}`
              if (
                !fs.existsSync(`${__dirname}/public/downloads/${item.image}`)
              ) {
                const image = await Storage.get(item.image)
                await downloadImage(image)
              }
              programs[index].image = relativeUrl
            } catch (err) {
              console.log("error downloading image: ", err)
            }
          })
        )
        resolve(programs)
        break

      case "PRODUCTS_DATA":
        const gqlProductsData = await axios({
          url: config.aws_appsync_graphqlEndpoint,
          method: "post",
          headers: {
            "x-api-key": config.aws_appsync_apiKey,
          },
          data: {
            query: print(listAllProductsQuery),
          },
        })
        let products = gqlProductsData.data.data.ByOfferType.items
        await Promise.all(
          products.map(async (item, index) => {
            try {
              const relativeUrl = `../downloads/${item.image}`
              if (
                !fs.existsSync(`${__dirname}/public/downloads/${item.image}`)
              ) {
                const image = await Storage.get(item.image)
                await downloadImage(image)
              }
              products[index].image = relativeUrl
            } catch (err) {
              console.log("error downloading image: ", err)
            }
          })
        )
        resolve(products)
        break

      case "REVIEWS_DATA":
        let gqlReviewsData = await axios({
          url: config.aws_appsync_graphqlEndpoint,
          method: "post",
          headers: {
            "x-api-key": config.aws_appsync_apiKey,
          },
          data: {
            query: print(listAllReviewsQuery),
          },
        })
        console.log(gqlReviewsData.data)
        resolve(gqlReviewsData.data.data.listReviews.items)
        break

      default:
        reject("dataType not found")
        break
    }
  })
}

export const DENOMINATION = "$"

const listAllReviewsQuery = tag(`
  query getAllReviews {
    listReviews {
      items {
        id
        comment
        rating
        title
        user {
          displayName
        }
      }
    }
  }
  `)

const listAllProductsQuery = tag(`
  query getAllProducts {
    ByOfferType(offerType: PRODUCT) {
      items {
        available
        brand
        categories
        createdAt
        id
        keywords
        longDescription
        mainImageUrl
        offerType
        otherImageUrls
        price
        salePrice
        shortDescription
        title
        updatedAt
      }
    }
  }
  `)

const listAllServicesQuery = tag(`
  query getAllServices {
    ByOfferType(offerType: SERVICE) {
      items {
        available
        brand
        categories
        createdAt
        id
        keywords
        longDescription
        mainImageUrl
        offerType
        otherImageUrls
        price
        salePrice
        shortDescription
        title
        updatedAt
      }
    }
  }
  `)
