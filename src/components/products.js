// import React from "react"
// import { graphql } from "gatsby"
// import Seo from "./common/Seo"
// import ProductCard from "./common/ProductCard"

// export default function Products({ data }) {
//   return (
//     <>
//       <Seo title="Products" desription="Mighty Dame Fitness Products" />
//       <section className="flex flex-col items-center justify-start w-full max-w-5xl my-5 h-full mx-auto">
//         <h2 className="font-lemon text-4xl text-center my-10 text-primary">
//           Our Products
//         </h2>
//         {data.productsInfo.data &&
//           data.productsInfo.data.map((product) => {
//             return (
//               <ProductCard
//                 key={product.id}
//                 id={product.id}
//                 brand={product.brand}
//                 image={product.mainImageFileName}
//                 title={product.title}
//                 shortDescription={product.shortDescription}
//                 longDescription={product.longDescription}
//                 price={product.price}
//                 salePrice={product.salePrice}
//                 inStock={product.available}
//               />
//             )
//           })}
//       </section>
//     </>
//   )
// }

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
//         mainImageFileName
//         otherImageFileNames
//         price
//         salePrice
//         shortDescription
//         title
//       }
//     }
//   }
// `
