import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ProgramCard from "../components/ProgramCard"

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
                key={program.id}
                image={program.mainImageFileName}
                otherImages={program.otherImageFileNames}
                title={program.title}
                description={program.longDescription}
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
  query getAllPrograms {
    programsInfo {
      data {
        available
        brand
        categories
        id
        keywords
        longDescription
        mainImageFileName
        otherImageFileNames
        price
        salePrice
        shortDescription
        title
        numberOfSessions
        lengthOfSessionInHours
        frequencyOfSessionsPerWeek
      }
    }
  }
`
