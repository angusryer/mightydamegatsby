import { Link } from "gatsby"
import React, { useContext } from "react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { ThemeContext, CartContext } from "../../context/mainContext"
import logo from "../../images/logot.png"
import SocialIcon from "../common/SocialIcon"

export default function Menu({ linkStyle }) {
  const { focus } = useContext(ThemeContext)
  const { numberOfItemsInCart } = useContext(CartContext)
  const linkStylePlus = `${linkStyle} py-2 w-full text-light text-xs hover:shadow-sm`

  return (
    <div className="flex flex-col pt-16 items-center pb-auto fixed top-0 right-0 bg-overlayPrimary bg-opacity-80 rounded-sm min-w-28 h-screen">
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
        <Link className={linkStylePlus} to="/members">
          Members
        </Link>
        <Link className={linkStylePlus + " pb-5"} to="/cart">
          <FaShoppingCart className="h-5 w-auto transform -translate-x-px" />
        </Link>
        {numberOfItemsInCart > Number(0) && (
          <div>
            <FaCircle color={focus} size={12} />
          </div>
        )}
      </div>
      <div className="flex flex-col h-28 justify-between items-center">
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-0.5"
          type="facebook"
          fill="white"
        />
        <SocialIcon
          className="h-7 w-auto p-1 transform translate-x-0.5"
          type="instagram"
          fill="white"
        />
        <SocialIcon
          className="h-6 w-auto p-1 transform translate-x-px"
          type="twitter"
          fill="white"
        />
      </div>
    </div>
  )
}
