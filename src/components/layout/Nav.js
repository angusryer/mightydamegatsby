import React, { useState, useRef, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { CartContext } from "../../context/mainContext"
import Menu from "./Menu"
import ThemeToggle from "./ThemeToggle"
import logo from "../../images/logot.png"
import menu from "../../images/menu.svg"

export default function Nav() {
  const { quantityOfItems } = useContext(CartContext)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef()

  const hideMenu = (e) => {
    if (e.target !== menuRef.current) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", hideMenu)
    return () => document.removeEventListener("click", hideMenu)
  })

  const linkStyle = `font-extralight text-center m-0 text-sm w-22 ml-1 mr-1 border-none rounded-full text-secondary hover:text-darkButton`

  return (
    <nav className="sticky top-0 bg-secondary flex flex-shrink-0 z-20">
      <div className="flex w-full h-full p-4 justify-center">
        <div className="w-full max-w-6xl flex items-center justify-between">
          <Link
            className="flex flex-row ml- sm:flex-nowrap items-center"
            to="/"
          >
            <img
              className="hidden snav:flex m-0 xxs:w-12 xxs:h-12"
              src={logo}
              alt="Mighty Dame Fitness"
            />
            <h1 className="font-lemon tracking-wider text-xl text-secondary xxs:ml-0 xs:ml-4 xxs:whitespace-nowrap sm:text-2xl">
              Mighty Dame Fitness
            </h1>
          </Link>
          <div className="flex justify-center items-center xsnav:justify-end xsnav:items-center">
            <div className="hidden nav:flex justify-around text-xl items-center max-w-5xl ml-auto transform translate-y-px">
              <Link
                className={`${linkStyle} nav:text-xs whitespace-nowrap nav:w-20`}
                to="/trainers"
              >
                Meet Your Trainer
              </Link>
              <Link
                className={`${linkStyle} nav:text-xs whitespace-nowrap nav:w-20`}
                to="/programs"
              >
                Programs
              </Link>
              <Link
                className={`${linkStyle} nav:text-xs whitespace-nowrap nav:w-20`}
                to="/products"
              >
                Products
              </Link>
              <Link
                className={`${linkStyle} nav:text-xs whitespace-nowrap nav:w-20`}
                to="/members"
              >
                Members
              </Link>
              <Link
                className={`${linkStyle} nav:text-xs whitespace-nowrap nav:w-20`}
                to="/faq"
              >
                FAQ
              </Link>
              <Link
                className="flex h-5 w-5 self-center justify-center items-center text-secondary icon_hover_dark border-none m-3 mr-3.5 rounded-full"
                to="/cart"
              >
                <div className="flex justify-center items-center w-5 h-5">
                  <FaShoppingCart className="absolute h-5 w-5" />
                  {quantityOfItems > Number(0) && (
                    <div className="absolute w-14px h-14px flex justify-center items-center transform translate-x-2.5 -translate-y-2">
                      <FaCircle
                        color="#F57C23"
                        size={14}
                        className="flex absolute"
                      />
                      <div className="flex absolute text-xxs text-secondary">
                        {quantityOfItems}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
            <ThemeToggle className="hidden xsnav:flex items-center transform translate-y-0.5 mr-0 xsnav:mr-3 " />
            <div className="flex justify-around items-center w-auto relative">
              {showMenu && <Menu linkStyle={linkStyle} />}
              <img
                className="flex h-6 w-auto mb-0 nav:hidden transform translate-y-px"
                src={menu}
                alt="menu"
                onClick={() => setShowMenu(!showMenu)}
                ref={menuRef}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
