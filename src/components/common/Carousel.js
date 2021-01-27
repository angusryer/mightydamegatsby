import React from "react"

export default function Carousel({ children }) {
  return (
    <div className="flex flex-col w-full my-16 content-center items-center nav:items-start max-w-5xl nav:flex-row nav:flex-wrap nav:justify-around">
      {children}
    </div>
  )
}
