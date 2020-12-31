import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "../utilities/mediaQueries";
import Logo from "../components/Logo";

export default function Nav() {
  return (
    <NavBar>
      <LogoContainer>
        <StyledLink to="/">
          <Logo width="50px" />
        </StyledLink>
        <PageTitle>Mighty Dame Fitness</PageTitle>
      </LogoContainer>
      <LinkList>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/fitness">Fitness</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/products">Products</StyledLink>
        </ListItem>
      </LinkList>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  height: 65px;
  background-color: white;
  align-items: center;
  padding: 0 10px;
`;

const LinkList = styled.ol`
  display: none;
  ${mediaQueries("lg")`
    display: flex;
    margin-left: auto;
`}
`;

const ListItem = styled.li`
  width: 60px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  :hover {
    background-color: whitesmoke;
  }
`;

const StyledLink = styled(Link)``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1`
  visibility: hidden;
  ${mediaQueries("md")`
    visibility: visible;
    margin-left: 20px;
    font-size: 26px;
  `}
`;
