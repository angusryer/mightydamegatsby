import React from "react"

export default function CallToAction({
  styles: { container, text },
  children,
}) {
  return (
    <div className={container}>
      <p className={text}>{children}</p>
    </div>
  )
}
