import React from "react"

export default function Hero({ children }) {
  return (
    <section className="h-120 bg-hero bg-no-repeat bg-center bg-cover bg-fixed p-4 flex flex-col justify-end pb-10">
      {children}      
    </section>
  )
}
