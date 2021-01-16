import React from "react"
import CartLink from "../components/CartLink"
import { Link } from "gatsby"
import { SiteContext, ContextProvider } from "../context/mainContext"
// import { graphql } from "gatsby"

const logo = require("../images/logoTransparentBg.png")

export default function Nav() {
  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => {
          return (
            <nav className="h-20 p-4 flex flex-row content-center justify-between">
              <div className="flex">
                <Link to="/">
                  <img className="h-full w-auto" alt="Logo" src={logo} />
                  <h1 className="">Mighty Dame Fitness</h1>
                </Link>
              </div>
              <div className="">
                <Link to="/instructors">
                  <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                    Instructors
                  </p>
                </Link>
                <Link to="/programs">
                  <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                    Programs
                  </p>
                </Link>
                <Link to="/products">
                  <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                    Products
                  </p>
                </Link>
                <Link to="/login">
                  <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                    Members
                  </p>
                </Link>
                <CartLink />
              </div>
            </nav>
          )
        }}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}

// const imageQuery = graphql`
//   query getLogo {
//     file {
//       childImageSharp {
//         fixed
//       }
//     }
//   }
// `;