import React from "react"

export default function LeadPointLeft({ image, children }) {
  return (
    <div
      className={`flex flex-col nav:flex-row items-center w-full max-w-md mt-3 mb-4`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-32 h-32 m-0 border-none rounded-full bg-cover bg-no-repeat bg-center"
      ></div>
      <p className="text-lg font-bold text-center pt-3 max-w-48 nav:text-left nav:ml-5">{children}</p>
    </div>
  )
}
