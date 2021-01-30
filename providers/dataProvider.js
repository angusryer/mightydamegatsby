import axios from "axios"
import Amplify, { Storage } from "aws-amplify"
import tag from "graphql-tag"
import downloadImage from "../src/libs/envFsLib"
import config from "../src/aws-exports"
import path from "path"

Amplify.configure(config)
const graphql = require("graphql")
const { print } = graphql

const getAxiosConfig = (query) => {
  return {
    url: config.aws_appsync_graphqlEndpoint,
    method: "post",
    headers: {
      "x-api-key": config.aws_appsync_apiKey,
    },
    data: {
      query: print(query),
    },
  }
}

export const PROGRAMS = "PROGRAMS_DATA"
export const PRODUCTS = "PRODUCTS_DATA"
export const REVIEWS = "REVIEWS_DATA"

export default async function fetchData(dataType, fs) {
  switch (dataType) {
    case "PROGRAMS_DATA":
      const programs = await fetchOffers(listAllServicesQuery, fs)
      return programs
    case "PRODUCTS_DATA":
      const products = await fetchOffers(listAllProductsQuery, fs)
      return products
    case "REVIEWS_DATA":
      const reviews = await fetchReviews(listAllReviewsQuery)
      return reviews
    default:
      return
  }
}

async function cacheImageFromSource(imageFileName, fs) {
  if (!fs.existsSync(path.join(__dirname, "..", "public", imageFileName))) {
    try {
      const imageUrl = await Storage.get(imageFileName)
      await downloadImage(imageUrl, fs)
    } catch (err) {
      throw new Error({ success: false, response: err.message })
    }
  }
}

async function fetchReviews(query) {
  const response = await axios(getAxiosConfig(query))
  return response.data.data.listReviews.items
}

async function fetchOffers(query, fs) {
  const response = await axios(getAxiosConfig(query))
  let items = response.data.data.byOfferType.items
  items = await cacheAndUpdatePaths(items, fs)
  return items
}

function cacheAndUpdatePaths(items, fs) {
  items.forEach((item, index) => {
    cacheImageFromSource(item.mainImageFileName, fs)
    items[index].mainImageFileName = `../../${item.mainImageFileName}`
    item.otherImageFileNames.forEach((image, index) => {
      cacheImageFromSource(image, fs)
      item.otherImageFileNames[index] = `../../${image}`
    })
  })
  return items
}

export const DENOMINATION = "$"

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
