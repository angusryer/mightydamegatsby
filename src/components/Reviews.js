import React from "react"
import Review from "../components/Review"

export default function Reviews({ reviewsData }) {
  return (
    <section className="">
      <div className="">
        {reviewsData.map((review) => {
          return (
            <Review
              key={review.id}
              value={review.rating}
              quote={review.comment}
              //   reviewer={review.ownerId}
            />
          )
        })}
      </div>
    </section>
  )
}
