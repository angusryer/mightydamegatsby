import React from "react"

export default function LeadPointLeft({ image, children }) {
  return (
    <div
      className={`flex flex-col nav:flex-row items-center max-w-48 mt-3 mb-4 pt-2 px-3 h-auto border-none rounded-t-full rounded-b-2xl pb-3 bg-opacity-20`}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-32 h-32 max-h-32 max-w-32 m-0 border-none rounded-full bg-cover bg-no-repeat bg-center"
      ></div>
      <p className="text-lg text-dark font-bold text-center pt-3 max-w-64 nav:text-left nav:ml-5">
        {children}
      </p>
    </div>
  )
}
