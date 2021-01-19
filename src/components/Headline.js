import React from "react"

export default function ({ children, styles: { container, h2 } }) {
  return (
    <div className={container}>
      <h2 className={h2}>{children}</h2>
    </div>
  )
}
