import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Headline from "../components/Headline"
import Subscribe from "../components/Subscribe"
import Reviews from "../components/Reviews"
import point1 from "../images/point1.jpg"
import point2 from "../images/point2.jpg"
import point3 from "../images/point3.jpg"
import point4 from "../images/point4.jpg"
import point5 from "../images/point5.jpg"
import point6 from "../images/point6.jpg"
import LeadPointContainer from "../components/LeadPointContainer"
import LeadPointLeft from "../components/LeadPointLeft"
import LeadPointRight from "../components/LeadPointRight"
import CallToAction from "../components/CallToAction"

export default function Home({ data }) {
  return (
    <>
      <SEO title="Home" />
      <div className="flex flex-col">
        <Hero>
          <Headline>
            Confidence is built with consistency. Start learning the science and
            getting fit right now.
          </Headline>
          <Subscribe />
        </Hero>
        <div className="flex flex-col self-center max-w-6xl">
          <CallToAction>
            Our newsletter keeps you close to actionable insights and a powerful
            community. Unsubscribe any time. (But why?)
          </CallToAction>
        </div>
        <div className="flex flex-col self-center items-center max-w-6xl">
          <LeadPointContainer>
            <h2 className="text-3xl text-center pb-10 font-cardo font-bold">
              We're real. We're different.
            </h2>
            <LeadPointRight image={point1}>We FOCUS on women.</LeadPointRight>
            <LeadPointLeft image={point2}>
              We do fitness and nutrition at the SAME TIME.
            </LeadPointLeft>
            <LeadPointRight image={point3}>
              We're confidence-first: we help you build lasting habits.
            </LeadPointRight>
          </LeadPointContainer>
          <LeadPointContainer>
            <h2 className="text-3xl text-center pb-10 font-cardo font-bold">
              And we still do what the rest do:
            </h2>
            <LeadPointLeft image={point4}>
              We keep you accountable and driven.
            </LeadPointLeft>
            <LeadPointRight image={point5}>
              You walk away smarter and stronger after every session.
            </LeadPointRight>
            <LeadPointLeft image={point6}>
              Personal coaches free up your time.
            </LeadPointLeft>
          </LeadPointContainer>
          <CallToAction>
            Like the women below, we're helping women be the mighty dames that
            they really are, one at a time.
          </CallToAction>
          <Subscribe centered dark />
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
        user {
          id
          displayName
          avatarUrl
        }
      }
    }
  }
`
