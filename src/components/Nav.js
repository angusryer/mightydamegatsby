import React from "react"

// import { makeTitle, makeSlug } from "../../utils/helpers"
import { FaShoppingCart, FaCircle } from "react-icons/fa"
import { Link } from "gatsby"

import { SiteContext, ContextProvider } from "../context/mainContext"

function Nav({ context }){
  // render() {
  //   let {
  //     numberOfItemsInCart,
  //     navItems: {
  //       navInfo: { data: links },
  //     },
  //   } = this.props.context

  //   links = links.map((link) => {
  //     const newLink = {}
  //     newLink.link = makeSlug(link)
  //     newLink.name = makeTitle(link)
  //     return newLink
  //   })
  //   links.unshift({ name: "Home", link: "/" })

    let numberOfItemsInCart = context.numberOfItemsInCart

    return (
      <>
        <div className="flex">
            <Link to="/programs">
              <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                Programs
              </p>
            </Link>
            <Link to="/products">
              <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                Products
              </p>
            </Link>
            <Link to="/instructors">
              <p className="text-left m-0 text-smaller mr-4 sm:mr-8 font-semibold">
                Instructors
              </p>
            </Link>
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

export default function NavWithContext(props) {
  return (
    <ContextProvider>
      <SiteContext.Consumer>
        {(context) => <Nav {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProvider>
  )
}



// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { mediaQueries } from "../utilities/mediaQueries";
// import Logo from "../components/Logo";

// export default function Nav() {
//   return (
//     <NavBar>
//       <LogoContainer>
//         <StyledLink to="/">
//           <Logo width="50px" />
//         </StyledLink>
//         <PageTitle>Mighty Dame Fitness</PageTitle>
//       </LogoContainer>
//       <LinkList>
//         <ListItem>
//           <StyledLink to="/">Home</StyledLink>
//         </ListItem>
//         <ListItem>
//           <StyledLink to="/fitness">Fitness</StyledLink>
//         </ListItem>
//         <ListItem>
//           <StyledLink to="/products">Products</StyledLink>
//         </ListItem>
//       </LinkList>
//     </NavBar>
//   );
// }

// const NavBar = styled.nav`
//   display: flex;
//   height: 65px;
//   background-color: white;
//   align-items: center;
//   padding: 0 10px;
// `;

// const LinkList = styled.ol`
//   display: none;
//   ${mediaQueries("lg")`
//     display: flex;
//     margin-left: auto;
// `}
// `;

// const ListItem = styled.li`
//   width: 60px;
//   height: 25px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0 10px 0 10px;
//   border-radius: 5px;
//   :hover {
//     background-color: whitesmoke;
//   }
// `;

// const StyledLink = styled(Link)``;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PageTitle = styled.h1`
//   visibility: hidden;
//   ${mediaQueries("md")`
//     visibility: visible;
//     margin-left: 20px;
//     font-size: 26px;
//   `}
// `;
