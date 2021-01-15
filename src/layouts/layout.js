import React from "react"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { SiteContext, ContextProvider } from "../context/mainContext"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { colors } from "../theme"

toast.configure({
  progressStyle: {
    background: colors.primary,
  },
})

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => {
          return (
            <>
              <Nav context={context} />
              <main>{children}</main>
              <Footer />
            </>
          )
        }}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}
