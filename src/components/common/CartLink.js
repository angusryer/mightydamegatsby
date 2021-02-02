import React from "react"
// import { FaShoppingCart, FaCircle } from "react-icons/fa"
// import { Link } from "gatsby"

export default function CartLink({ quantityOfItems = 0 }) {
  return (
    <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">
      {quantityOfItems}
    </div>
  )
}
