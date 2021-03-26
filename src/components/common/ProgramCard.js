import React, { useContext } from "react"
import { v4 as uuid } from "uuid"
import { openPopupWidget } from "react-calendly"
import { UserContext } from "../../context/mainContext"
import ButtonTwo from "../common/ButtonTwo"

export default function ProgramCard(props) {
  const user = useContext(UserContext)
  const {
    id,
    title,
    image,
    shortDescription,
    description,
    brand,
    numberOfSessions,
    lengthOfSessionInHours,
    frequencyOfSessionsPerWeek,
    price,
    salePrice,
    available,
  } = props

  const formatDescription = (desc) => {
    const descArray = desc.split(/\r\n|\r|\n/g)
    return descArray.map((line) => {
      if (line === "") return <br key={uuid()} />
      return (
        <li key={uuid()} className="m-0 p-0">
          {line}
        </li>
      )
    })
  }

  return (
    <div className="max-w-3xl my-10 bg-textAccentSecondary">
      <div className="m-10 flex flex-col shadow-sm">
        <div className="flex max-h-48 bg-shadedSecondary">
          <div className="w-1/3">
            <h3 className="title">{title}</h3>
            <span className="description">{shortDescription}</span>
          </div>
          <div className="w-1/3">
            <svg width="100%" height="100%" style={{ position: "relative" }}>
              <clipPath id="productImageClip">
                <path d="m 137.83263,22.392316 c 6.41233,16.708639 -20.15008,35.59394 -32.15977,40.00929 C 88.875291,68.577211 50.906446,49.381041 64.437086,23.373504 73.291552,6.3541413 89.34593,-0.43480317 106.16346,5.6862557 116.94667,9.6110109 130.96432,4.4954855 137.83263,22.392316 Z" />
              </clipPath>
            </svg>
            <img
              src={image}
              alt=""
              style={{ clipPath: `url(#productImageClip)` }}
              className="min-w-48 min-h-48 max-w-48 max-h-48 object-cover"
            />
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-xs">{formatDescription(description)}</p>
            <span className="shortphrase">{brand}</span>
          </div>
        </div>
        <div className="flex max-h-20 bg-overlayPrimary">
          <div className="logo"></div>
          <div className="textgroup">
            <span className="bigtext">{price}</span>
            <span className="smalltext">{available}</span>
          </div>
          <div className="cta">BUY THIS SHIT</div>
        </div>
      </div>
    </div>

    // <div className="flex flex-col items-center max-w-80 nav:max-w-4xl w-full p-4 nav:flex-row border-t border-b border-accentsPrimary">
    //   <div className="max-w-80 rounded-lg overflow-hidden">
    //     <img className="object-cover w-full h-full" src={image} alt={title} />
    //   </div>
    //   <div className="flex flex-col justify-between pt-2 nav:ml-4">
    //     <div className="flex flex-row nav:flex-col items-center nav:items-start">
    //       <span className="text-primary text-3xl tracking-wide font-lemon">
    //         {title}
    //       </span>
    //       <span className="text-primary text-xs pl-4 nav:pl-0">
    //         {brand && `by ${brand}`}
    //       </span>
    //     </div>
    //     <span className="text-primary font-light my-4 text-xs">
    //       {formatDescription(description) || shortDescription}
    //     </span>
    //     <div className="flex flex-col my-2">
    //       <span className="text-xs text-primary font-light">{`Total number of sessions: ${numberOfSessions}`}</span>
    //       <span className="text-xs text-primary font-light">{`Hours per session: ${lengthOfSessionInHours}`}</span>
    //       <span className="text-xs text-primary font-light">{`Sessions per week: ${frequencyOfSessionsPerWeek}`}</span>
    //     </div>
    //     <span className="text-primary my-2 text-xs">
    //       {available ? "Available Now." : "Coming Soon!"}
    //     </span>
    //     <span className="text-primary">{`$${salePrice || price}`}</span>
    //     <ButtonTwo
    //       innerText="Book a Free Consultation"
    //       callBack={() =>
    //         openPopupWidget({
    //           url: "https://calendly.com/mightydame/consultation",
    //           prefill: {
    //             name: user?.displayName || "",
    //             email: user?.email || "",
    //             customAnswers: {
    //               a1: title || "Just a general consultation, please!",
    //             },
    //           },
    //         })
    //       }
    //     />
    //   </div>
    // </div>
  )
}
