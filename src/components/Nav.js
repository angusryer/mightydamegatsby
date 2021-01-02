import React from "react"

import { makeTitle, makeSlug } from "../../utils/helpers"
import { FaShoppingCart, FaCircle } from "react-icons/fa"
import { Link } from "gatsby"

import { SiteContext, ContextProvider } from "../context/mainContext"

class Nav extends React.Component {
  render() {
    let {
      numberOfItemsInCart,
      navItems: {
        navInfo: { data: links },
      },
    } = this.props.context

    links = links.map((link) => {
      const newLink = {}
      newLink.link = makeSlug(link)
      newLink.name = makeTitle(link)
      return newLink
    })
    links.unshift({ name: "Home", link: "/" })
    return (
      <>
        <div className="flex">
          {links.map((l, i) => (
            <Link to={l.link} key={i}>
              <p
                key={i}
                className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold"
              >
                {l.name}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end pr-4 relative">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
          {numberOfItemsInCart > Number(0) && (
            <div>
              <FaCircle />
            </div>
          )}
        </div>
      </>
    )
  }
}

function NavWithContext(props) {
  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => <Nav {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}

export default NavWithContext
