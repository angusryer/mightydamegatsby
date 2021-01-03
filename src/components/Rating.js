import React from "react";
import star from "../images/star.png";

export default function Rating({ value, height }) {
  let starElements = [];
  for (let i = 0; i < value; i++) {
    starElements.push(<img key={i} src={star} alt="star" />);
  }

  return <div height={height}>{starElements}</div>;
}

// const StarContainer = styled.div`
//   display: flex;
//   flex-flow: row nowrap;
//   height: ${(props) => props.height};
// `;

// const StarImage = styled.img`
//   height: 100%;
//   width: auto;
//   transform: rotate(-30deg);
//   filter: invert(100%);
// `;
