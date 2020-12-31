import programs from './programs';

/*
programs must adhere to the following schema:

type Program {
  id: ID!
  title: String!
  image: String!
  description: String!
  numberOfSessions: Int!
  lengthOfSessionInHours: Float!
  frequencyOfSessionsPerWeek: Int!
  available: Boolean!
  categories: [String]!
  instructors: [String]!
  price: Float!
}
*/

async function getPrograms() {
  return new Promise((resolve, reject) => {
    // const programs = API.get(apiUrl)
    resolve(programs)
  })
}

const DENOMINATION = '$'

export { DENOMINATION, getPrograms as default } 
