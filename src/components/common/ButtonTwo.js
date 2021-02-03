import React from "react"

export default function Button({ type, innerText, callBack }) {
  return (
    <button
      type={type || "button"}
      className="w-full my-2 max-w-sm h-10 content-center bg-buttonSecondary hover:bg-shadedSecondary hover:text-secondary hover:outline text-secondary font-light py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={callBack}
    >
      {innerText}
    </button>
  )
}
