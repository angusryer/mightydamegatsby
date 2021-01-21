import axios from "axios"
import Amplify, { Storage } from "aws-amplify"
import tag from "graphql-tag"
import downloadImage from "../utils/downloadImage"
import config from "../src/aws-exports"
import path from "path"
// import * as fs from "fs"

Amplify.configure(config)
const graphql = require("graphql")
const { print } = graphql

export default function fetchData(dataType, fs) {
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
        let programs = gqlProgramsData.data.data.byOfferType.items

        await Promise.all(
          // SEEMS LIKE ALL Storage.get(<key>) calls automatically try to get from the public directory.
          // TODO change Admin app to upload to ./public/ folder on S3
          // Loop through all products, and use the filename key to download from S3
          // and cache the images locally. Set the items returned to the local path so
          // that any live queries grab the images from there instead of from S3 directly.
          programs.map(async (item, index) => {
            try {
              const relativeUrl = `../${item.mainImageFileName}` // once compiled, components will query
              // for these images straight from the local server "public" folder, and these queries will
              // be executed from the POV of the src code, so the relative path must be up one level
              // in the public folder
              if (
                !fs.existsSync(
                  path.join(__dirname, "public", item.mainImageFileName)
                )
              ) {
                const image = await Storage.get(item.mainImageFileName)
                await downloadImage(image, fs)
              }
              programs[index].mainImageFileName = relativeUrl
            } catch (err) {
              console.log("error downloading image: ", err)
            }
            item.otherImageFileNames.map(async (image, index) => {
              try {
                const relativeUrl = `../${image}`
                if (!fs.existsSync(path.join(__dirname, "public", image))) {
                  const otherImage = await Storage.get(image)
                  await downloadImage(otherImage, fs)
                }
                item.otherImageFileNames[index] = relativeUrl
              } catch (err) {
                console.log("error downloading image: ", err)
              }
            })
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
        let products = gqlProductsData.data.data.byOfferType.items

        await Promise.all(
          products.map(async (item, index) => {
            try {
              const relativeUrl = `../${item.mainImageFileName}`
              if (
                !fs.existsSync(
                  path.join(__dirname, "public", item.mainImageFileName)
                )
              ) {
                const image = await Storage.get(item.mainImageFileName)
                await downloadImage(image, fs)
              }
              products[index].mainImageFileName = relativeUrl
            } catch (err) {
              console.log("error downloading image: ", err)
            }

            item.otherImageFileNames.map(async (image, index) => {
              try {
                const relativeUrl = `../${image}`
                if (!fs.existsSync(path.join(__dirname, "public", image))) {
                  const otherImage = await Storage.get(image)
                  await downloadImage(otherImage, fs)
                }
                item.otherImageFileNames[index] = relativeUrl
              } catch (err) {
                console.log("error downloading image: ", err)
              }
            })
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
        console.log(gqlReviewsData.data.data.listReviews.items)
        resolve(gqlReviewsData.data.data.listReviews.items)
        break

      default:
        reject("dataType not found")
        break
    }
  })
}

export const DENOMINATION = "$"

// USER
// id: ID!
//  cognitoId: String
// 	firstName: String
// 	lastName: String
// 	displayName: String
//  userName: String
// 	email: String!
// 	dateRegistered: String
// 	userType: UserType!
// 	streetAddressOne: String
// 	streetAddressTwo: String
// 	city: String
// 	provinceState: String
// 	country: String
// 	postalZip: String
// 	phone: String
// 	isSubscribed: Boolean!
// 	dateSubscribed: String
// 	avatarUrl: String
// 	reviews: [Review]! @connection(name: "UserReviewConnection")
// 	offers: [EnrolledUsers] @connection(keyName: "byUser", fields: ["id"])

export const listAllReviewsQuery = tag(`
  query getAllReviews {
    listReviews {
      items {
        id
        comment
        rating
        title
        ownerId
        user {
          id
          displayName
          avatarUrl
        }
      }
    }
  }
  `)

// PRODUCTS/SERVICES
// id: ID!
// offerType: OfferType!
// title: String!
// shortDescription: String!
// longDescription: String!
// keywords: [String]!
// categories: [String]!
// price: Float!
// salePrice: Float
// mainImageUrl: String!
// mainImageFileName: String
// otherImageUrls: [String]!
// otherImageFileNames: [String]
// available: Boolean!
// brand: String
// numberOfSessions: Float
// lengthOfSessionInHours: Float
// frequencyOfSessionsPerWeek: Float
// reviews: [Review]! @connection(name: "OfferReviewConnection")
// users: [EnrolledUsers]! @connection(keyName: "byOffer", fields: ["id"])

export const listAllProductsQuery = tag(`
  query getAllProducts {
    byOfferType(offerType: PRODUCT) {
      items {
        id
        title
        shortDescription
        longDescription
        keywords
        categories
        price
        salePrice
        mainImageUrl
        mainImageFileName
        otherImageUrls
        otherImageFileNames
        available
        brand
      }
    }
  }
  `)

export const listAllServicesQuery = tag(`
  query getAllServices {
    byOfferType(offerType: SERVICE) {
      items {
        id
        title
        shortDescription
        longDescription
        keywords
        categories
        price
        salePrice
        mainImageUrl
        mainImageFileName
        otherImageUrls
        otherImageFileNames
        available
        brand
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
      }
    }
  }
  `)
