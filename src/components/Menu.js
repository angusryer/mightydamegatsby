import { Link } from "gatsby"
import React from "react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import logo from "../images/logot.png"
import { colors } from "../theme"
import SocialIcon from "./SocialIcon"
const { orange } = colors

export default function Menu({ linkStyle, numberOfItemsInCart }) {
  const linkStylePlus = `${linkStyle} py-2 w-full text-light text-xs hover:shadow-sm`
  return (
    <div className="flex flex-col pt-16 items-center pb-auto fixed top-0 right-0 bg-dark bg-opacity-80 rounded-sm min-w-28 h-screen">
      <Link className="flex h-12 w-12" to="/">
        <img
          className="h-12 w-12 transform translate-x-0.5"
          src={logo}
          alt="Mighty Dame Fitness"
        />
      </Link>
      <div className="mt-3 flex flex-col justify-start">
        <Link className={linkStylePlus} to="/instructors">
          Instructors
        </Link>
        <Link className={linkStylePlus} to="/programs">
          Programs
        </Link>
        <Link className={linkStylePlus} to="/products">
          Products
        </Link>
        <Link className={linkStylePlus} to="/login">
          Members
        </Link>
        <Link className={linkStylePlus + " pb-5"} to="/cart">
          <FaShoppingCart className="h-5 w-auto transform -translate-x-px" />
        </Link>
        {numberOfItemsInCart > Number(0) && (
          <div>
            <FaCircle color={orange} size={12} />
          </div>
        )}
      </div>
      <div className="flex flex-col h-28 justify-between items-center">
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-0.5"
          type="facebook"
        />
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-0.5"
          type="instagram"
        />
        <SocialIcon className="h-6 w-auto p-1 transform translate-x-px" type="twitter" />
      </div>
    </div>
  )
}
