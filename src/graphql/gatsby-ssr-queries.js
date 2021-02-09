import tag from "graphql-tag"

// these are used to pre-fetch data during compilation

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
        offerType
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
        offerType
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