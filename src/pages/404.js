import React from "react"
import Seo from "../components/common/Seo"

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Not Found" desription="Mighty Dame Fitness 404 error" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mt-6">
          There&#39;s actually no page here... try going back or going{" "}
          <a href="/">here.</a>
        </h1>
      </div>
    </>
  )
}
