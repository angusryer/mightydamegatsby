import React from "react";
import styled from "styled-components";
import mightyDameLogo from "../assets/mightyDameLogo.png";

export default function Logo({width}) {
  return (
    <ImageContainer width={width}>
      <StyledImage src={mightyDameLogo} alt="Mighty Dame Fitness" />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
    width: ${props => props.width || `40px`}
`;

const StyledImage = styled.img`
  width: 100%;
`;
