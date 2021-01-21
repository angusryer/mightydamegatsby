import React from "react"
import Rating from "./Rating"
import backupImage from "../images/User.png"

export default function Review({ value, quote, image, reviewer }) {
  return (
    <div className="w-60 lg:max-w-80 sm:max-w-64 my-12">
      <div className="flex flex-nowrap h-4">
        <Rating value={value} height="4" />
        <span className="ml-2 min-w-min text-xs">{`${value} bars`}</span>
      </div>
      <q>{`${quote}`}</q>
      <div className="w-full flex justify-end">
      <span>{reviewer}</span>
        <div className="w-8 h-8">
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
