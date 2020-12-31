import React from "react"
import { Button } from "../"
import { navigate } from "gatsby"

// Hero word contents

export default function Center({ price, title, link }) {
  const navigateTo = () => {
    navigate(link)
  }

  return (
    <>
      <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">
        {title}
      </p>
      <p>
        FROM <span>${price}</span>
      </p>
      <Button onClick={navigateTo} title="Shop Now" />
    </>
  )
}

export default Center
