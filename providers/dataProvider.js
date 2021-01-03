import programs from "./programs"
import products from "./products"
import reviews from "./reviews"

export async function getPrograms() {
  return new Promise((resolve, reject) => {
    // const inventory = API.get(apiUrl)
    resolve(programs)
  })
}
export async function getProducts() {
  return new Promise((resolve, reject) => {
    // const inventory = API.get(apiUrl)
    resolve(products)
  })
}
export async function getReviews() {
  return new Promise((resolve, reject) => {
    // const inventory = API.get(apiUrl)
    resolve(reviews)
  })
}

export const DENOMINATION = "$"
