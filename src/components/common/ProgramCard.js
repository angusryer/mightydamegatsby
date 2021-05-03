import React, { useContext } from "react"
import { v4 as uuid } from "uuid"
import { openPopupWidget } from "react-calendly"
import { UserContext } from "../../context/mainContext"
import ButtonTwo from "../common/ButtonTwo"

export default function ProgramCard(props) {
  const user = useContext(UserContext)
  const {
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
    <div className="flex flex-col items-center max-w-80 nav:max-w-4xl w-full p-4 nav:flex-row border-t border-b border-accentsPrimary">
      <div className="max-w-80 rounded-lg overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="flex flex-col justify-between pt-2 nav:ml-4">
        <div className="flex flex-row nav:flex-col items-center nav:items-start">
          <span className="text-primary text-3xl tracking-wide font-lemon">
            {title}
          </span>
          <span className="text-primary text-xs pl-4 nav:pl-0">
            {brand && `by ${brand}`}
          </span>
        </div>
        <span className="text-primary font-light my-4 text-xs">
          {formatDescription(description) || shortDescription}
        </span>
        <div className="flex flex-col my-2">
          <span className="text-xs text-primary font-light">{`Total number of sessions: ${numberOfSessions}`}</span>
          <span className="text-xs text-primary font-light">{`Hours per session: ${lengthOfSessionInHours}`}</span>
          <span className="text-xs text-primary font-light">{`Sessions per week: ${frequencyOfSessionsPerWeek}`}</span>
        </div>
        <span className="text-primary my-2 text-xs">
          {available ? "Available Now." : "Coming Soon!"}
        </span>
        <span className="text-primary">{`$${salePrice || price}`}</span>
        <ButtonTwo
          innerText="Book a Free Consultation"
          callBack={() => {
            openPopupWidget({
              url: "https://calendly.com/mightydame/consultation",
              prefill: {
                name: user?.displayName || "",
                email: user?.email || "",
                customAnswers: {
                  a1: title || "Just a general consultation, please!",
                },
              },
            })
          }}
        />
      </div>
    </div>
  )
}
