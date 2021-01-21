import { Link } from "gatsby"
import React from "react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import logo from "../images/logot.png"
import { colors } from "../theme"
import SocialIcon from "./SocialIcon"
const { orange } = colors

export default function Menu({ linkStyle, numberOfItemsInCart }) {
  const linkStylePlus = `${linkStyle} py-2 text-light hover:text-violet hover:text-opacity-30`
  return (
    <div className="flex flex-col pt-10 items-center p-auto fixed top-0 right-0 bg-dark bg-opacity-80 border-collapse rounded-sm w-28 h-screen">
      <Link className="flex" to="/">
        <img
          className="w-12 h-auto py-5"
          src={logo}
          alt="Mighty Dame Fitness"
        />
      </Link>
      <div className="mt-1 flex flex-col justify-start">
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
      <div className="flex flex-col h-28 justify-between">
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-px"
          type="facebook"
        />
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-px"
          type="instagram"
        />
        <SocialIcon className="h-6 w-auto p-1" type="twitter" />
      </div>
    </div>
  )
}
