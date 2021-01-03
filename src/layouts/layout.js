/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { SiteContext, ContextProvider } from "../context/mainContext"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"

const logo = require("../images/mightyDameLogo.png")

toast.configure({
  progressStyle: {
    background: colors.primary,
  },
})

export default function Layout({ children }) {
  console.log("==== 44444 ====")

  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => {
          return (
            <div className="min-h-screen">
              <Nav />
              <nav>
                <div className="flex justify-center">
                  <div
                    className="
                    w-fw
                    mobile:px-10 desktop:px-0 px-4 pt-10 pb-6
                    flex flex-col
                    sm:flex-row"
                  >
                    <Link to="/">
                      <img
                        className="mb-4 w-24 mw-24 sm:w-20 sm:mr-16"
                        alt="Logo"
                        src={logo}
                      />
                    </Link>
                    <div className="flex flex-wrap">
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
                    </div>
                    <div className="flex flex-1 justify-end pr-4 relative">
                      {/* <Link to="/cart">
                        <FaShoppingCart />
                      </Link>
                      {numberOfItemsInCart > Number(0) && (
                        <div>
                          <FaCircle />
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              </nav>

              <div className="mobile:px-10 px-4 pb-10 flex justify-center">
                <main className="w-fw">{children}</main>
              </div>
              
              <Footer />
              {/* <footer className="flex justify-center">
                <div className="flex w-fw px-8 desktop:px-0 border-solid border-t border-gray-300 items-center">
                  <span className="block text-gray-700 pt-4 pb-8 mt-2 text-xs">
                    © 2020 Mighty Dame Fitness. All rights reserved.
                  </span>
                </div>
              </footer> */}
            </div>
          )
        }}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}
