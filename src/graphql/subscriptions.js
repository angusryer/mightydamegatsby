/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEnrolledUsers = /* GraphQL */ `
  subscription OnCreateEnrolledUsers {
    onCreateEnrolledUsers {
      id
      userId
      offerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEnrolledUsers = /* GraphQL */ `
  subscription OnUpdateEnrolledUsers {
    onUpdateEnrolledUsers {
      id
      userId
      offerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEnrolledUsers = /* GraphQL */ `
  subscription OnDeleteEnrolledUsers {
    onDeleteEnrolledUsers {
      id
      userId
      offerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer {
    onCreateOffer {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer {
    onUpdateOffer {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer {
    onDeleteOffer {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
      id
      title
      comment
      rating
      ownerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
      id
      title
      comment
      rating
      ownerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
      id
      title
      comment
      rating
      ownerId
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
        reviews {
          nextToken
        }
        offers {
          nextToken
        }
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
        reviews {
          nextToken
        }
        users {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
