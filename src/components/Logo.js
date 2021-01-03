import React from "react";
import mightyDameLogo from "../images/mightyDameLogo.png";

export default function Logo() {
  // width={width} .... ^^^ was bringing in {width} for a prop and applying it to the container div
  return (
    <div>
      <img src={mightyDameLogo} alt="Mighty Dame Fitness" />
    </div>
  );
}

// const ImageContainer = styled.div`
//     width: ${props => props.width || `40px`}
// `;

// const StyledImage = styled.img`
//   width: 100%;
// `;
