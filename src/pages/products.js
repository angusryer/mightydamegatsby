import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo";
import ProductCard from "../components/ProductCard"
// import productImage from "../images/AllThencoPadsMainImage.png";
// import axios from "axios";

export default function Products({ data }) {
  return (
    <>
      <SEO title="Products | Mighty Dame Fitness" desription="Mighty Dame Fitness Products" />
      <h1>Our Products</h1>
      <section className="flex flex-row content-center justify-evenly max-w-5xl my-0 mx-auto">
        {data &&
          data.map((product) => {
            return (
              <ProductCard
                key={product.productId}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                inStock={product.inStock}
              />
            )
          })}
      </section>
    </>
  )
}

export const productsQuery = graphql`
  query {
    productsInfo {
		data {
			id
			title
			image
			description
			price
			inStock
			categories
			brand
		}
	}
  }
`
