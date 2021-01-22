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

  const linkStyle = `text-center m-0 text-sm w-22 ml-1 mr-1 border-none rounded-full text-light hover:shadow-lg`

  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => {
          return (
            <nav className="sticky top-0 bg-violet flex flex-shrink-0">
              <div className="flex w-full h-full bg-opacity-20 bg-dark p-4 justify-center">
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
                    <h1 className="font-gagalin tracking-wider text-xl text-white xxs:ml-0 xs:ml-4 xxs:whitespace-nowrap sm:text-2xl">
                      MIGHTY DAME FITNESS
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
                    <Link
                      className="flex self-center text-light hover:shadow-lg border-none p-3 rounded-full"
                      to="/cart"
                    >
                      <FaShoppingCart className="h-5" />
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
                </div>
              </div>
            </nav>
          )
        }}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}
