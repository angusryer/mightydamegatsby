import React from "react"
import { FaShoppingCart, FaCircle } from "react-icons/fa"
import { Link } from "gatsby"
import { colors } from "../theme"
const { secondary } = colors

export default function CartLink({ numberOfItemsInCart = 0 }) {
  return (
    <div className="fixed top-49 right-20 desktop:right-flexiblemargin z-10">
      <div className="flex flex-1 justify-end pr-4 relative">
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        {numberOfItemsInCart > Number(0) && (
          <div>
            <FaCircle color={secondary} size={12} />
          </div>
        )}
      </div>
    </div>
  )
}
