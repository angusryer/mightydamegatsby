import products from './products';

/*
products must adhere to the following schema:

type Product {
  id: ID!
  price: Float!
  title: String!
  image: String!
  description: String!
  inStock: Boolean!
  categories: [String]!
  brand: String!

}
*/

async function getProducts() {
  return new Promise((resolve, reject) => {
    // const products = API.get(apiUrl)
    resolve(products)
  })
}

const DENOMINATION = '$'

export { DENOMINATION, getProducts as default } 
