import React from "react"

export default function Hero({ children }) {
  return (
    <section className="h-144 bg-violet bg-no-repeat bg-center bg-cover bg-fixed mb-12">
      <div className="h-full w-full flex justify-center bg-dark bg-opacity-20">
        <div className="p-4 flex flex-col items-center justify-end pb-16 w-full h-full max-w-6xl">
          {children}
        </div>
      </div>
    </section>
  )
}
