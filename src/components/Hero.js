import React from "react"

export default function Hero({ children }) {
  return (
    <section className="h-120 bg-hero bg-no-repeat bg-center bg-cover bg-fixed lg:h-144">
      <div className="bg-dark bg-opacity-30 h-full w-full flex justify-center">
        <div className="p-4 flex flex-col justify-end pb-24 w-full h-full max-w-6xl">
          {children}
        </div>
      </div>
    </section>
  )
}
