import React from "react"
import Footer from "../components/layout/Footer"
import Nav from "../components/layout/Nav"
// import "react-toastify/dist/ReactToastify.css"
// import { toast } from "react-toastify"

// toast.configure({
//   progressStyle: {
//     background: colors.violet,
//   },
// })

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
