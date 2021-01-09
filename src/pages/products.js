import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ProductCard from "../components/ProductCard"

export default function Products({ data }) {
  return (
    <>
      <SEO
        title="Products | Mighty Dame Fitness"
        desription="Mighty Dame Fitness Products"
      />
      <h1>Our Products</h1>
      <section className="flex flex-row content-center justify-evenly max-w-5xl my-0 mx-auto">
        {data.ByOfferType.items &&
          data.ByOfferType.items.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.mainImageUrl}
                title={product.title}
                description={product.shortDescription}
                price={product.price}
                inStock={product.available}
              />
            )
          })}
      </section>
    </>
  )
}

// export const productsQuery = graphql`
//   query getAllProducts {
//     productsInfo {
//       data {
//         available
//         brand
//         categories
//         id
//         keywords
//         longDescription
//         mainImageUrl
//         otherImageUrls
//         price
//         salePrice
//         shortDescription
//         title
//       }
//     }
//   }
// `
