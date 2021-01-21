import React from "react"

export default function CallToAction({ children }) {
  return (
    <div className="flex flex-col items-center w-full my-14 max-w-6xl">
      <hr className="border-green border-opacity-70 border-solid border-b-0 border-t w-4/6 mb-3" />
      <p className="text-xl font-bold px-4 text-center">{children}</p>
      <hr className="border-green border-opacity-70 border-solid border-t-0 border-b w-4/6 mt-3" />
    </div>
  )
}
