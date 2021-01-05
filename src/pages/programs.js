import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ProgramCard from "../components/ProgramCard"
// import programData from "../seed/programs.json"

export default function Programs({ data }) {
  return (
    <>
      <SEO
        title="Programs | Mighty Dame Fitness"
        desription="Mighty Dame Fitness Programs"
      />
      <h1>Our Fitness &amp; Nutrition Programs</h1>
      <section className="flex flex-row content-center justify-evenly max-w-5xl my-0 mx-auto">
        {data.programsInfo.data &&
          data.programsInfo.data.map((program) => {
            return (
              <ProgramCard
                key={program.programId}
                image={program.Image}
                title={program.title}
                description={program.description}
                numberOfSessions={program.numberOfSessions}
                lengthOfSessionInHours={program.lengthOfSessionInHours}
                frequencyOfSessionsPerWeek={program.frequencyOfSessionsPerWeek}
                price={program.price}
                available={program.available}
              />
            )
          })}
      </section>
    </>
  )
}

export const programsQuery = graphql`
  query {
    programsInfo {
      data {
        id
        title
        image
        description
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
        price
        available
        categories
        instructors
      }
    }
  }
`
