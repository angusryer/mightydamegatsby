import React from "react";
import star from "../images/star.png";

export default function Rating({ value, height }) {
  let starElements = [];
  for (let i = 0; i < value; i++) {
    starElements.push(<img className="w-auto h-full transform rotate-12" key={i} src={star} alt="star" />);
  }

  return <div className={`flex flex-row flex-nowrap h-${height} w-auto`}>{starElements}</div>;
}
