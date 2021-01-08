import React from "react"
import { graphql } from "gatsby"
// import { API, graphqlOperation } from "aws-amplify"
import SEO from "../components/seo"
import CartLink from "../components/CartLink"
import Review from "../components/Review"

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
            {console.log(data)}
            {data.listReviews.items.map((review) => {
              return (
                <Review
                  key={review.id}
                  value={review.rating}
                  quote={review.comment}
                  reviewer={review.user.displayName}
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
      comment
      id
      rating
      title
    }
  }
}

`
