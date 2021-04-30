import React from "react"

export default function CallToAction({ children, bb, bt }) {
  if (typeof children === "string")
    throw new Error(
      "Expected an HTML or React element as a child. Please wrap any bare text in element tags."
    )

  return (
    <div className="flex flex-col items-center w-full my-12 max-w-xl bg-primary">
      {bt && (
        <hr className="border-accentsPrimary border-opacity-70 border-solid border-b-0 border-t w-4/6 mb-3" />
      )}
      {children}
      {bb && (
        <hr className="border-accentsPrimary border-opacity-70 border-solid border-t-0 border-b w-4/6 mt-3" />
      )}
    </div>
  )
}
