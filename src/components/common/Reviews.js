import React from "react"
import Review from "./Review"
import Carousel from './Carousel'

export default function Reviews({ reviewsData }) {
  return (
    <section className="flex flex-col w-full max-w-6xl items-center">
        <Carousel>
          {reviewsData.map((review) => {
            return (
              <Review
                key={review.id}
                title={review.title}
                value={review.rating}
                quote={review.comment}
                reviewer={review.user.displayName}
                image={review.user.avatarUrl}
              />
            )
          })}
          </Carousel>
    </section>
  )
}
