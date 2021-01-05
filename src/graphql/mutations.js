/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
      subscriber
      dateSubscribed
      createdAt
      updatedAt
      offers {
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
        users {
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      subscriber
      dateSubscribed
      createdAt
      updatedAt
      offers {
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
        users {
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      subscriber
      dateSubscribed
      createdAt
      updatedAt
      offers {
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
        users {
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      otherImageUrls
      available
      brand
      users {
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      otherImageUrls
      available
      brand
      users {
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
      otherImageUrls
      available
      brand
      users {
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
      reviews {
        id
        title
        comment
        rating
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
          subscriber
          dateSubscribed
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
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
        subscriber
        dateSubscribed
        createdAt
        updatedAt
        offers {
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
          createdAt
          updatedAt
        }
        reviews {
          id
          title
          comment
          rating
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
