import React from "react"

export default function LeadPoint({ image, styles, children }) {
  return (
    <div className={`${styles.container}`}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`${styles.imageContainer}`}
      ></div>
      <p className={styles.text}>{children}</p>
    </div>
  )
}
