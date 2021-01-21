import React from "react"
import Review from "../components/Review"

export default function Reviews({ reviewsData }) {
  return (
    <section className="flex flex-col w-full max-w-6xl items-center nav:flex-row nav:overflow-y-scroll">
      <div className="">
        {reviewsData.map((review) => {
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
  )
}
