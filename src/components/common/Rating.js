import React from "react"
import DumbbellSvg from "./DumbbellSvg"

export default function Rating({ value, height }) {
  let starElements = []
  for (let i = 0; i < value; i++) {
    starElements.push(
      <DumbbellSvg
        classNames="px-px w-auto h-full transform rotate-12 svg_static_primary"
        key={i}
      />
    )
  }

  return (
    <div className={`flex flex-row flex-nowrap h-${height} w-auto`}>
      {starElements}
    </div>
  )
}
