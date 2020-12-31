import React from "react";
import styled from "styled-components";
import mightyDameLogo from "../assets/mightyDameLogo.png";

export default function LogoBlock({ width, color, fontSize }) {
  return (
    <LogoBlockContainer>
      <ImageContainer width={width}>
        <StyledImage src={mightyDameLogo} alt="Mighty Dame Fitness" />
      </ImageContainer>
      <MainTag fontSize={fontSize} color={color}>
        Mighty Dame Fitness
      </MainTag>
    </LogoBlockContainer>
  );
}

const LogoBlockContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: ${(props) => props.width || `40px`};
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const MainTag = styled.h2`
  margin-left: 25px;
  color: ${(props) => props.color || `whitesmoke`};
  font-size: ${(props) => props.fontSize || `36px`};
`;
