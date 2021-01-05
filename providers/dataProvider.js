import axios from "axios"
import Amplify, { Storage } from "aws-amplify"
import tag from "graphql-tag"
import fs from "fs"
import downloadImage from "../utils/downloadImage"

import config from "../src/aws-exports"
import programs from "./programs"
import reviews from "./reviews"
// import products from "./products"

Amplify.configure(config)

const graphql = require("graphql")
const { print } = graphql

export default function fetchData(dataType) {
  return new Promise( async (resolve, reject) => {
    switch (dataType) {
      case "PROGRAMS_DATA":
        resolve(programs)
        break

      case "PRODUCTS_DATA":
        const gqlOffersData = await axios({
          url: config.aws_appsync_graphqlEndpoint,
          method: "post",
          headers: {
            "x-api-key": config.aws_appsync_apiKey,
          },
          data: {
            query: print(listOfferQuery),
          },
        }).then(res => {
          console.log(res.data.errors)
        })
      
// path: null,
// locations: [ { line: 2, column: 3, sourceName: null } ],
// message: "Validation error of type FieldUndefined: Field 'listProducts' in type 'Query' is undefined @ 'listProducts'"

        let offers = gqlOffersData.data.data.listOffers.items

        await Promise.all(
          offers.map(async (item, index) => {
            try {
              const relativeUrl = `../downloads/${item.image}`
              if (!fs.existsSync(`${__dirname}/public/downloads/${item.image}`)) {
                const image = await Storage.get(item.image)
                await downloadImage(image)
              }
              offers[index].image = relativeUrl
            } catch (err) {
              console.log("error downloading image: ", err)
            }
          })
        )

        resolve(offers)
        break

      case "REVIEWS_DATA":
        resolve(reviews)
        break

      default:
        reject("dataType not found")
        break
        
    }
  })
}

export const DENOMINATION = "$"

const listOfferQuery = tag(`
  query getAllOffers {
    listOffers {
      items
    }
  }
  `)