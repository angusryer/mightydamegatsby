import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Headline from "../components/Headline"
import Subscribe from "../components/Subscribe"
import SubHeadline from "../components/SubHeadline"
import Reviews from "../components/Reviews"
import point1 from "../images/point1.jpg"
import point2 from "../images/point2.jpg"
import point3 from "../images/point3.jpg"
import point4 from "../images/point4.jpg"
import point5 from "../images/point5.jpg"
import point6 from "../images/point6.jpg"
import LeadPoints from "../components/LeadPoints"
import LeadPoint from "../components/LeadPoint"
import CallToAction from "../components/CallToAction"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <div className="flex flex-col">
        <Hero>
          <Headline styles={headlineStyles}>
            Confidence is built with consistency. Start learning the science and
            getting fit right now.
          </Headline>
          <Subscribe />
        </Hero>
        <SubHeadline>
          Our newsletter keeps you close to actionable insights and a powerful
          community. Unsubscribe any time. (But why?)
        </SubHeadline>
        <div className="m-6 flex flex-col">
          <LeadPoints styles={leadSection}>
            <h2 className="text-3xl text-center pb-10 font-cardo font-bold">
              We're real. We're different.
            </h2>
            <LeadPoint image={point1} styles={leadPoint}>
              We FOCUS on women.
            </LeadPoint>
            <LeadPoint image={point2} styles={leadPoint}>
              We do fitness and nutrition at the SAME TIME.
            </LeadPoint>
            <LeadPoint image={point3} styles={leadPoint}>
              We're confidence-first: we help you build lasting habits.
            </LeadPoint>
          </LeadPoints>
          <LeadPoints styles={leadSection}>
            <h2 className="text-2xl text-center pb-10 font-cardo font-bold">
              And we still do what the rest do:
            </h2>
            <LeadPoint image={point4} styles={leadPoint}>
              We keep you accountable and driven.
            </LeadPoint>
            <LeadPoint image={point5} styles={leadPoint}>
              You walk away smarter and stronger after every session.
            </LeadPoint>
            <LeadPoint image={point6} styles={leadPoint}>
              Personal coaches free up your time.
            </LeadPoint>
          </LeadPoints>
          <CallToAction styles={ctaSection}>
            Like the women below, we're helping women be the mighty dames that
            they really are, one at a time.
          </CallToAction>
          <Subscribe />
          <Reviews reviewsData={data.reviewsInfo.data} />
        </div>
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

const headlineStyles = {
  container: "flex",
  h2: "text-2xl font-gagalin text-white pb-10 max-w-sm tracking-wider",
}

const leadSection = {
  container: "flex flex-col my-20 items-center w-full",
}

const leadPoint = {
  container: "flex flex-col items-center justify-center w-full my-3",
  imageContainer: `w-32 h-32 m-0 border-none rounded-full bg-cover bg-no-repeat bg-center`,
  text: "text-lg text-center pt-2",
  reverse: "reverse",
}

const ctaSection = {
  container: "flex flex-col my-20",
  text: "text-lg",
}
