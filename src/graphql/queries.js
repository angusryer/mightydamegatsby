/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        displayName
        email
        dateRegistered
        userType
        streetAddressOne
        streetAddressTwo
        city
        provinceState
        country
        postalZip
        phone
        isSubscribed
        dateSubscribed
        avatarUrl
        createdAt
        updatedAt
        offers {
          nextToken
        }
        reviews {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      displayName
      email
      dateRegistered
      userType
      streetAddressOne
      streetAddressTwo
      city
      provinceState
      country
      postalZip
      phone
      isSubscribed
      dateSubscribed
      avatarUrl
      createdAt
      updatedAt
      offers {
        items {
          id
          userId
          offerId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          comment
          rating
          ownerId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const byUserType = /* GraphQL */ `
  query ByUserType(
    $userType: UserType
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUserType(
      userType: $userType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        displayName
        email
        dateRegistered
        userType
        streetAddressOne
        streetAddressTwo
        city
        provinceState
        country
        postalZip
        phone
        isSubscribed
        dateSubscribed
        avatarUrl
        createdAt
        updatedAt
        offers {
          nextToken
        }
        reviews {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listOffers = /* GraphQL */ `
  query ListOffers(
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOffers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        otherImageUrls
        available
        brand
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
        createdAt
        updatedAt
        users {
          nextToken
        }
        reviews {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOffer = /* GraphQL */ `
  query GetOffer($id: ID!) {
    getOffer(id: $id) {
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
      otherImageUrls
      available
      brand
      numberOfSessions
      lengthOfSessionInHours
      frequencyOfSessionsPerWeek
      createdAt
      updatedAt
      users {
        items {
          id
          userId
          offerId
          createdAt
          updatedAt
        }
        nextToken
      }
      reviews {
        items {
          id
          title
          comment
          rating
          ownerId
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const byOfferType = /* GraphQL */ `
  query ByOfferType(
    $offerType: OfferType
    $sortDirection: ModelSortDirection
    $filter: ModelOfferFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byOfferType(
      offerType: $offerType
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        otherImageUrls
        available
        brand
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
        createdAt
        updatedAt
        users {
          nextToken
        }
        reviews {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
      title
      comment
      rating
      ownerId
      createdAt
      updatedAt
      user {
        id
        firstName
        lastName
        displayName
        email
        dateRegistered
        userType
        streetAddressOne
        streetAddressTwo
        city
        provinceState
        country
        postalZip
        phone
        isSubscribed
        dateSubscribed
        avatarUrl
        createdAt
        updatedAt
        offers {
          nextToken
        }
        reviews {
          nextToken
        }
      }
      offer {
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
        otherImageUrls
        available
        brand
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
        createdAt
        updatedAt
        users {
          nextToken
        }
        reviews {
          nextToken
        }
      }
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        comment
        rating
        ownerId
        createdAt
        updatedAt
        user {
          id
          firstName
          lastName
          displayName
          email
          dateRegistered
          userType
          streetAddressOne
          streetAddressTwo
          city
          provinceState
          country
          postalZip
          phone
          isSubscribed
          dateSubscribed
          avatarUrl
          createdAt
          updatedAt
        }
        offer {
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
          otherImageUrls
          available
          brand
          numberOfSessions
          lengthOfSessionInHours
          frequencyOfSessionsPerWeek
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
