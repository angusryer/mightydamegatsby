import reviews from './reviews';

/*
reviews must adhere to the following schema:

type Review {
  id: ID!
  reviewerName: String!
  reviewerAvatar: String!
  quote: String!
  rating: Int!
}
*/

async function getReviews() {
  return new Promise((resolve, reject) => {
    // const reviews = API.get(apiUrl)
    resolve(reviews)
  })
}

const DENOMINATION = '$'

export { DENOMINATION, getReviews as default } 
