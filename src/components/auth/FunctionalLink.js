import React from "react"

// TODO Name of this component isn't good. CHANGE.

export default function FunctionalLink({ innerText, callBack, classes }) {
  return (
    <span
      role="button"
      tabIndex="0"
      onKeyDown={() => callBack()}
      onClick={() => callBack()}
      className={`${classes}`}
    >
      {innerText}
    </span>
  )
}
