/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      cognitoId
      firstName
      lastName
      userName
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      cognitoId
      firstName
      lastName
      userName
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      cognitoId
      firstName
      lastName
      userName
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
export const onCreateEnrolledUsers = /* GraphQL */ `
  subscription OnCreateEnrolledUsers {
    onCreateEnrolledUsers {
      id
      userId
      offerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
export const onUpdateEnrolledUsers = /* GraphQL */ `
  subscription OnUpdateEnrolledUsers {
    onUpdateEnrolledUsers {
      id
      userId
      offerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
export const onDeleteEnrolledUsers = /* GraphQL */ `
  subscription OnDeleteEnrolledUsers {
    onDeleteEnrolledUsers {
      id
      userId
      offerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
export const onCreateOffer = /* GraphQL */ `
  subscription OnCreateOffer($id: String) {
    onCreateOffer(id: $id) {
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
      mainImageFile
      otherImageUrls
      otherImageFiles
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
export const onUpdateOffer = /* GraphQL */ `
  subscription OnUpdateOffer($id: String) {
    onUpdateOffer(id: $id) {
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
      mainImageFile
      otherImageUrls
      otherImageFiles
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
export const onDeleteOffer = /* GraphQL */ `
  subscription OnDeleteOffer($id: String) {
    onDeleteOffer(id: $id) {
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
      mainImageFile
      otherImageUrls
      otherImageFiles
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview($ownerId: String) {
    onCreateReview(ownerId: $ownerId) {
      id
      title
      comment
      rating
      ownerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview($ownerId: String) {
    onUpdateReview(ownerId: $ownerId) {
      id
      title
      comment
      rating
      ownerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview($ownerId: String) {
    onDeleteReview(ownerId: $ownerId) {
      id
      title
      comment
      rating
      ownerId
      createdAt
      updatedAt
      user {
        id
        cognitoId
        firstName
        lastName
        userName
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
        mainImageFile
        otherImageUrls
        otherImageFiles
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
