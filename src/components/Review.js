import React from "react";
import Rating from "./Rating";

const backupImage = require('../images/User.png')

export default function Review({ value, quote, reviewer, image }) {
  return (
    <div className="w-60 lg:max-w-80 sm:max-w-64">
      <div className="flex flex-nowrap">
        <Rating value={value} height="4" />
        <span className="ml-2 min-w-min text-xs">{`${value} bars`}</span>
      </div>
      <q>{`${quote}`}</q>
      <div>
        <div className="w-10 h-10">
          <img className="w-full h-auto" src={image || backupImage} alt="user avatar" />
        </div>
        {/* <span>{reviewer}</span> */}
      </div>
    </div>
  );
}
