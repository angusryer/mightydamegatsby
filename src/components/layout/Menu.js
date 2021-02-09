import { Link } from "gatsby"
import React, { useContext } from "react"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../context/mainContext"
import logo from "../../images/logot.png"
import SocialIcon from "../common/SocialIcon"

export default function Menu({ linkStyle }) {
  const { quantityOfItems } = useContext(CartContext)
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
        <Link
          className="flex h-5 w-5 self-center justify-center items-center text-secondary icon_hover_light border-none m-3 mr-3.5 p-2 rounded-full transform translate-x-1"
          to="/cart"
        >
          <div className="flex justify-center items-center w-5 h-5">
            <FaShoppingCart className="absolute h-5 w-5" />
            {quantityOfItems > Number(0) && (
              <div className="absolute w-14px h-14px flex justify-center items-center transform translate-x-2.5 -translate-y-2">
                <FaCircle color="#F57C23" size={14} className="flex absolute" />
                <div className="flex absolute text-xxs text-secondary">
                  {quantityOfItems}
                </div>
              </div>
            )}
          </div>
        </Link>
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
