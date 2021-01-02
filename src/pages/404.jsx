import React from "react"
import SEO from "../components/seo"

export default function NotFoundPage() {
  return (
    <>
      <SEO title="The Mighty Dame | Page Not Found" desription="Mighty Dame Fitness 404 error" />
	  <h1>
        There&#39;s actually no page here... try going back or going{" "}
        <a href="/">here.</a>
      </h1>
    </>
  )
}
