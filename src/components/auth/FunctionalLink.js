import React from "react"

export default function FunctionalLink({ innerText, callBack, classes }) {
  return (
    <span
      role="button"
      tabIndex="1"
      onKeyDown={() => callBack()}
      onClick={() => callBack()}
      className={`${classes}`}
    >
      {innerText}
    </span>
  )
}
