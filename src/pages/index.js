import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Review from "../components/Review"
import Subscribe from "../components/Subscribe"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home | Mighty Dame Fitness" />
      <div className="w-full">
        <div
          className="lg:h-hero
        p-6 pb-10 sm:pb-6
        flex lg:flex-row flex-col"
        >
          
          <div className="pt-4 pl-2 sm:pt-12 sm:pl-12">
            Hero Bitch
          </div>
          <Subscribe />
          <div className="flex flex-1 sm:flex-col justify-center items-center relative">
            {data.reviewsInfo.data.map((review) => {
              return (
                <Review
                  key={review.id}
                  value={review.rating}
                  quote={review.comment}
                  reviewer={review.ownerId}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export const reviewsQuery = graphql`
  query {
    reviewsInfo {
      data {
        id
        rating
        title
        comment
        ownerId
      }
    }
  }
`
