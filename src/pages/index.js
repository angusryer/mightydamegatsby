import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
// import {
//   Center,
//   Footer,
//   Tag,
//   Showcase,
//   DisplaySmall,
//   DisplayMedium,
// } from "../components"
import CartLink from "../components/CartLink"
// import { makeTitle, makeSlug } from "../../utils/helpers"

export default function Home() {
  // console.log(data) ^^^^^^^ it used to be Home({ data: gqlData })
  // const { productsInfo, categoryInfo } = gqlData
  // const categories = categoryInfo.data.slice(0, 2)
  // const products = productsInfo.data.slice(0, 4)

  return (
    <>
      <CartLink />
      <SEO title="Home | Mighty Dame Fitness" />
      <div className="w-full">
        <div
          className="bg-green-200
        lg:h-hero
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col"
        >
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
            {/* <Tag year="2021" category="SOFAS" />
            <Center
              price="200"
              title={products[2].name}
              link={makeSlug(products[2].name)}
            />
            <Footer designer="Jason Bourne" /> */}
          </div>
          <div className="flex flex-1 justify-center items-center relative">
            {/* <Showcase imageSrc={products[2].image} /> */}
            <div
              className="absolute
              w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
              bg-white z-0 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between">
        {/* <DisplayMedium
          imageSrc={categories[0].image}
          subtitle={`${categories[0].itemCount} items`}
          title={makeTitle(categories[0].title)}
          link={makeSlug(categories[0].title)}
        />
        <DisplayMedium
          imageSrc={categories[1].image}
          subtitle={`${categories[1].itemCount} items`}
          title={makeTitle(categories[1].title)}
          link={makeSlug(categories[1].title)}
        /> */}
      </div>
      <div className="pt-10 pb-6 flex flex-col items-center">
        <h2 className="text-4xl mb-3">Trending Now</h2>
        <p className="text-gray-600 text-sm">
          Find the perfect piece or accessory to finish off your favorite room
          in the house.
        </p>
      </div>
      <div className="my-8 flex flex-col lg:flex-row justify-between">
        {/* <DisplaySmall
          imageSrc={products[0].image}
          title={products[0].title}
          subtitle={products[0].categories[0]}
          link={makeSlug(products[0].title)}
        />

        <DisplaySmall
          imageSrc={products[1].image}
          title={products[1].title}
          subtitle={products[1].categories[0]}
          link={makeSlug(products[1].title)}
        />

        <DisplaySmall
          imageSrc={products[2].image}
          title={products[2].title}
          subtitle={products[2].categories[0]}
          link={makeSlug(products[2].title)}
        />

        <DisplaySmall
          imageSrc={products[3].image}
          title={products[3].title}
          subtitle={products[3].categories[0]}
          link={makeSlug(products[3].title)}
        /> */}
      </div>
    </>
  )
}

// export const pageQuery = graphql`
//   query {
//     navInfo {
//       data
//     }
//      # categoryInfo {
//      #   data {
//      #     title
//      #     image
//      #     itemCount
//      #   }
//      # }
//      # productsInfo {
//      #   data {
//      #     image
//      #     title
//      #     categories
//      #     description
//      #     id
//      #   }
//      # }
//   }
// `
