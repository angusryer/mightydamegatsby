import React from "react"
import Rating from "./Rating"
import backupImage from "../images/User.png"

export default function Review({ value, title, quote, image, reviewer }) {
  return (
    <div className="w-60 lg:max-w-80 sm:max-w-64 my-12 mx-4">
      <div className="flex flex-nowrap h-4 mb-4">
        <Rating value={value} height="5" />
        <span className="ml-2 min-w-min text-xs">{` ${value} bars`}</span>
      </div>
      <q className="">{`${quote}`}</q>
      <div className="w-full flex justify-end items-center">
        <span className="transform translate-x-3.5">{reviewer}</span>
        <div className="w-8 h-8 border-none rounded-full overflow-hidden">
          <img
            className="w-full h-auto"
            src={image || backupImage}
            alt="user avatar"
          />
        </div>
      </div>
    </div>
  )
}
