/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEnrolledUsers = /* GraphQL */ `
  mutation CreateEnrolledUsers(
    $input: CreateEnrolledUsersInput!
    $condition: ModelEnrolledUsersConditionInput
  ) {
    createEnrolledUsers(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
export const updateEnrolledUsers = /* GraphQL */ `
  mutation UpdateEnrolledUsers(
    $input: UpdateEnrolledUsersInput!
    $condition: ModelEnrolledUsersConditionInput
  ) {
    updateEnrolledUsers(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
export const deleteEnrolledUsers = /* GraphQL */ `
  mutation DeleteEnrolledUsers(
    $input: DeleteEnrolledUsersInput!
    $condition: ModelEnrolledUsersConditionInput
  ) {
    deleteEnrolledUsers(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
export const createOffer = /* GraphQL */ `
  mutation CreateOffer(
    $input: CreateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    createOffer(input: $input, condition: $condition) {
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
export const updateOffer = /* GraphQL */ `
  mutation UpdateOffer(
    $input: UpdateOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    updateOffer(input: $input, condition: $condition) {
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
export const deleteOffer = /* GraphQL */ `
  mutation DeleteOffer(
    $input: DeleteOfferInput!
    $condition: ModelOfferConditionInput
  ) {
    deleteOffer(input: $input, condition: $condition) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
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
        mainImageFileName
        otherImageUrls
        otherImageFileNames
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
