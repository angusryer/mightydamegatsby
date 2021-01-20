import React from "react"

export default function Hero({ children }) {
  return (
    <section className="h-120 bg-hero bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="p-4 flex flex-col justify-end pb-24 w-full h-full bg-dark bg-opacity-30">
      {children}
      </div>
    </section>
  )
}
