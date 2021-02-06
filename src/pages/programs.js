import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/common/Seo"
import ProgramCard from "../components/common/ProgramCard"

export default function Programs({ data }) {
  return (
    <>
      <SEO
        title="Programs"
        desription="Mighty Dame Fitness Programs"
      />
      <section className="flex flex-col items-center justify-start w-full max-w-5xl my-5 h-full mx-auto">
      <h2 className="font-lemon text-3xl text-center my-10 text-primary">Our Fitness &amp; Nutrition Programs</h2>
        {data.programsInfo.data &&
          data.programsInfo.data.map((program) => {
            return (
              <ProgramCard
                key={program.id}
                id={program.id}
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
