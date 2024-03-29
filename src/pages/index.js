import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/landing/Hero"
import Headline from "../components/landing/Headline"
import SubHeadline from "../components/landing/SubHeadline"
import Subscribe from "../components/landing/Subscribe"
import Reviews from "../components/common/Reviews"
import point1 from "../images/point1.jpg"
import point2 from "../images/point2.jpg"
import point3 from "../images/point3.jpg"
import point4 from "../images/point4.jpg"
import point5 from "../images/point5.jpg"
import point6 from "../images/point6.jpg"
import logo from "../images/MDNoBorder.png"
import LeadPointContainer from "../components/landing/LeadPointContainer"
import LeadPointLeft from "../components/landing/LeadPointLeft"
import LeadPointRight from "../components/landing/LeadPointRight"
import CallToAction from "../components/landing/CallToAction"
import SocialIcon from "../components/common/SocialIcon"
import Seo from "../components/common/Seo"

export default function Home({ data }) {
  return (
    <>
      <Seo title="Home" />
      <div className="flex flex-col">
        <Hero>
          <div className="flex flex-col nav:flex-row nav:items-center">
            <img
              src={logo}
              alt="The Mighty Dame"
              className="w-48 h-auto nav:w-96 flex self-center"
            />
            <div className="max-w-60 nav:max-w-72 nav:ml-16">
              <Headline>Confidence is built with consistency.</Headline>
              <SubHeadline>
                Weekly fitness and nutrition bits made for motivated women.
              </SubHeadline>
              <Subscribe centered />
            </div>
          </div>
        </Hero>
        <div className="flex flex-col self-center max-w-6xl">
          <CallToAction bt bb>
            <p className="text-xl font-extralight px-4 mt-3 text-center text-primary">
              Our QA-style newsletter gives you actions and knowledge in a
              short, consistent format. Unsubscribe any time.
            </p>
            <div className="flex max-w-32 w-1/2 items-center my-3">
              <hr className="bg-secondary w-full h-1px" />
              <span className="font-lemon text-xl text-center mx-2 text-primary">
                or
              </span>
              <hr className="bg-secondary w-full h-1px" />
            </div>
            <div className="flex mb-3 w-1/2 max-w-24 justify-around items-center">
              <SocialIcon
                type="facebook"
                className={`w-6 h-auto svg_primary`}
              />
              <SocialIcon
                type="instagram"
                className={`w-6 h-auto svg_primary`}
              />
            </div>
          </CallToAction>
        </div>
        <div className="flex flex-col self-center items-center max-w-6xl">
          <LeadPointContainer>
            <h2 className="text-3xl text-center pb-10 font-bold text-primary">
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
            <h2 className="text-3xl text-center pb-10 font-bold text-primary">
              We still do what others do
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
          <div className="flex flex-col self-center items-center max-w-6xl pb-16 border-none">
            <CallToAction bt>
              <p className="text-xl font-extralight px-4 text-center text-primary">
                We're helping women be the mighty dames that they really are,
                one by one. Start now.
              </p>
            </CallToAction>
            <Subscribe centered dark />
          </div>
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
