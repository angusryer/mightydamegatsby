import React from "react"

export default function ({ children }) {
  return (
    <div className="flex">
      <h2 className="text-2xl font-gagalin text-white pb-10 max-w-sm tracking-wider">
        {children}
      </h2>
    </div>
  )
}
