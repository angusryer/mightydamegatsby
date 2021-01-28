import React from "react"

export default function ({ children }) {
  return (
    <div className="flex">
      <h2 className="text-3xl nav:text-4xl font-gagalin text-light text-center mb-6 max-w-sm tracking-wider">
        {children}
      </h2>
    </div>
  )
}