import { Link } from "gatsby"
import React, { useContext } from "react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { ThemeContext, CartContext } from "../../context/mainContext"
import logo from "../../images/logot.png"
import SocialIcon from "../common/SocialIcon"
import ThemeToggle from "../layout/ThemeToggle"

export default function Menu({ linkStyle }) {
  const { focus } = useContext(ThemeContext)
  const { numberOfItemsInCart } = useContext(CartContext)
  const linkStylePlus = `${linkStyle} py-2 w-full text-secondary text-xs hover:text-lighterButton`

  return (
    <div className="flex flex-col pt-16 items-center pb-auto fixed top-0 right-0 bg-dark bg-opacity-80 rounded-sm min-w-28 h-screen z-10">
      <Link className="flex h-12 w-12" to="/">
        <img
          className="h-12 w-12 transform translate-x-0.5"
          src={logo}
          alt="Mighty Dame Fitness"
        />
      </Link>
      <div className="mt-3 flex flex-col justify-start">
        <Link className={linkStylePlus} to="/trainers">
          Trainers
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
        <Link className={linkStylePlus + " p-2 icon_hover_light"} to="/cart">
          <FaShoppingCart className="h-5 w-auto transform -translate-x-px" />
        </Link>
        {numberOfItemsInCart > Number(0) && (
          <div>
            <FaCircle color={focus} size={12} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center transform translate-x-1">
        <SocialIcon
          containerClasses="flex items-center mt-2 w-5 h-5"
          className="w-5 h-5 svg_static_menu"
          type="facebook"
        />
        <SocialIcon
          containerClasses="flex items-center mt-5 w-5 h-5"
          className="w-5 h-5 svg_static_menu"
          type="instagram"
        />
      </div>
    </div>
  )
}
