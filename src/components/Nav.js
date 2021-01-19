import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { FaCircle, FaShoppingCart } from "react-icons/fa"
import { SiteContext, ContextProvider } from "../context/mainContext"
import Menu from "./Menu"
import logo from "../images/logot.png"
import menu from "../images/menu.svg"
import { colors } from "../theme"
const { orange } = colors

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef();

  const hideMenu = e => {
      if (e.target !== menuRef.current) {
          setShowMenu(false);
      }
  }

  useEffect(() => {
      document.addEventListener('click', hideMenu);
      return () => document.removeEventListener('click', hideMenu);
  })

  const linkStyle = `text-center m-0 font-rancho text-xl w-24 nav:w-20 ml-2 mr-2 border-none rounded-sm hover:bg-orange hover:bg-opacity-10`

  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => {
          return (
            <nav className="sticky top-0 bg-light h-20 p-4 flex content-center justify-between">
              <Link
                className="flex flex-row sm:flex-nowrap items-center"
                to="/"
              >
                <img
                  className="hidden xs:flex m-0 xxs:w-12 xxs:h-12"
                  src={logo}
                  alt="Mighty Dame Fitness"
                />
                <h1 className="font-gagalin text-xl xxs:ml-0 xs:ml-4 xxs:whitespace-nowrap sm:text-2xl">
                  Mighty Dame Fitness
                </h1>
              </Link>
              <div className="hidden nav:flex justify-around text-xl items-center max-w-6xl ml-auto transform translate-y-px">
                <Link className={linkStyle} to="/instructors">
                  Instructors
                </Link>
                <Link className={linkStyle} to="/programs">
                  Programs
                </Link>
                <Link className={linkStyle} to="/products">
                  Products
                </Link>
                <Link className={linkStyle} to="/login">
                  Members
                </Link>
                <Link className="flex" to="/cart">
                  <FaShoppingCart className="h-5 w-auto" />
                </Link>
                {context.numberOfItemsInCart > Number(0) && (
                  <div>
                    <FaCircle color={orange} size={12} />
                  </div>
                )}
              </div>
              <div className="flex justify-around items-center w-auto relative">
                {showMenu && <Menu linkStyle={linkStyle} {...context} />}
                <img
                  className="flex h-6 w-auto mb-0 nav:hidden transform translate-y-px"
                  src={menu}
                  alt="menu"
                  onClick={() => setShowMenu(!showMenu)}
                  ref={menuRef}
                />
              </div>
            </nav>
          )
        }}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}
