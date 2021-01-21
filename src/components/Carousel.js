import React from "react"

export default function Carousel({ children }) {
  return (
    <div className="flex flex-col w-full items-center nav:items-start max-w-5xl nav:h-60 nav:flex-row nav:justify-around">
      {children}
    </div>
  )
}
