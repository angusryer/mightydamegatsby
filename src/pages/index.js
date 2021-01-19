import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Headline from "../components/Headline"
import Subscribe from "../components/Subscribe"
import SubHeadline from "../components/SubHeadline"
import Reviews from "../components/Reviews"
import point1 from "../images/point1.jpg"
import point2 from "../images/point1.jpg"
import point3 from "../images/point1.jpg"
import point4 from "../images/point1.jpg"
import point5 from "../images/point1.jpg"
import point6 from "../images/point1.jpg"
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
          <Subscribe styles={subscribeStyles} />
        </Hero>
        <SubHeadline>
          Our newsletter keeps you close to actionable insights and a powerful
          community. Unsubscribe any time. (But why?)
        </SubHeadline>
        <div className="m-6 flex flex-col">
          <LeadPoints styles={leadSection}>
            <h2 className="text-xl text-center">
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
            <h2 className="text-xl text-center">
              And we still do what the rest do
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
          <Subscribe styles={subscribeStyles} />
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

const subscribeStyles = {
  form: "flex flex-col justify-start ml-5 mt-2 sticky top-24",
  input: "border border-green rounded-sm outline-none text-xxs w-full p-1",
  button: "pl-2 text-light text-sm",
  message: "align-middle text-center pl-5 text-xs",
}

const headlineStyles = {
  container: "flex",
  h2: "text-xl font-gagalin text-light pb-10",
}

const leadSection = {
  container: "flex flex-col my-20 items-center",
}

const leadPoint = {
  common: "flex flex-col reverse",
  image: `w-20 h-20 border-none rounded-full`,
  text: "text-lg",
}

const ctaSection = {
  container: "flex flex-col my-20",
  text: "text-lg",
}
