import React from "react"
import Footer from "../components/layout/Footer"
import Nav from "../components/layout/Nav"

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="bg-primary">{children}</main>
      <Footer />
    </>
  )
}
