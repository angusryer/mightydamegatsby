import React from "react";
import mightyDameLogo from "../images/mightyDameLogo.png";

export default function LogoBlock({ width, color, fontSize }) {
  //width={width} //fontSize={fontSize} color={color}
  return (
    <div>
      <div >
        <img src={mightyDameLogo} alt="Mighty Dame Fitness" />
      </div>
      <h2>
        Mighty Dame Fitness
      </h2>
    </div>
  );
}

// const LogoBlockContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ImageContainer = styled.div`
//   width: ${(props) => props.width || `40px`};
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

// const MainTag = styled.h2`
//   margin-left: 25px;
//   color: ${(props) => props.color || `whitesmoke`};
//   font-size: ${(props) => props.fontSize || `36px`};
// `;
