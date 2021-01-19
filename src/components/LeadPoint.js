import React from "react"

export default function LeadPoint({ image, styles, children }) {
  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={styles.image}
      ></div>
      {children}
    </div>
  )
}
