import React from "react"

export default function Footer() {
  return (
    <footer className="flex justify-center flex-shrink-1 w-full mt-5">
      <div className="flex w-full h-full max-w-6xl px-8 xl:px-0 border-solid border-t border-green border-opacity-70">
        <span className="block text-gray-700 pt-4 pb-8 mt-2 text-sm">
          {" "}
          &#169; 2020-2021 Mighty Dame Fitness. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
