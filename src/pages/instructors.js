import React, { useEffect } from "react"
import SEO from "../components/seo";

export default function Instructors() {

  useEffect(() => {
    // setprograms(programData)
    // axios.get("/api/products").then((res) => {
    // 	setProducts(res.data);
    // });
  }, [])

  return (
    <>
      <SEO title="Instructors | Mighty Dame Fitness" desription="Mighty Dame Fitness Instructors" />
      <h1>Our Instructors</h1>
      <section className="flex flex-row content-center justify-evenly max-w-5xl my-0 mx-auto">
        EMILY ENGEL
      </section>
    </>
  )
}
