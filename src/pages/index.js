import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import CartLink from "../components/CartLink"
import Review from '../components/Review'

export default function Home({ data }) {
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
            Hero text
          </div>
          {/* Subscribe here */}
          <div className="flex flex-1 justify-center items-center relative">
            {data.reviewsInfo.data.map(review => {
              return (
                <Review key={review.id} value={review.rating} quote={review.quote} reviewer={review.reviewerName} image={review.reviewerAvatar} />
              )
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center relative">
          Hero Image
        </div>
      </div>
      {/* Clarifying newsletter section---small---in its own div */}
      <div className="my-4 lg:my-8 flex flex-col lg:flex-row justify-between">
        {/* We focus on section */}
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

export const reviewsQuery = graphql`
  query {
    reviewsInfo {
      data {
        id
        reviewerName
        reviewerAvatar
        rating
        quote
      }
    }
  }
`
