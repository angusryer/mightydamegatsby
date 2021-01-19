import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Review from "../components/Review"
import Subscribe from "../components/Subscribe"

const subscribeStyles = {
  form: "flex flex-col justify-start ml-5 mt-2 sticky top-24",
  input: "border border-green rounded-sm outline-none text-xxs w-full p-1",
  button: "pl-2 text-light text-sm",
  message: "align-middle text-center pl-5 text-xs",
}

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <div className="flex flex-col ">
        <section className="h-120 bg-hero bg-no-repeat bg-center bg-cover bg-fixed p-4 flex flex-col justify-end pb-10">
          <h2 className="text-3xl font-gagalin text-light pb-10">
            Sign the fuck up now.
          </h2>
          <Subscribe styles={subscribeStyles} />
        </section>
        <section className="flex flex-col items-center">
          <p className="my-16 text-center">
            Our newsletter keeps you close to actionable insights and a powerful
            community.
          </p>
        </section>
        <section className="">
          <div className="">
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
        </section>
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
