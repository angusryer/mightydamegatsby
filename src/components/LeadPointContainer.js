import React from "react"

export default function LeadPointContainer({ children }) {
  return (
    <div className="flex flex-col my-10 items-center nav:justify-center w-full max-w-lg">{children}</div>
  )
}
