import React, { useContext } from "react"
import { CartContext } from "../../context/mainContext"
import ButtonTwo from "../common/ButtonTwo"

export default function ProgramCard(props) {
  const { addToCart, setItemQty } = useContext(CartContext)
  const {
    id,
    title,
    image,
    description,
    brand,
    numberOfSessions,
    lengthOfSessionInHours,
    frequencyOfSessionsPerWeek,
    price,
    salePrice,
    available,
  } = props

  const addItemToCart = () => {
    const newItem = {
      id: id,
      offerType: "SERVICE",
      name: title,
      quantity: 1,
      price: salePrice || price,
      image: image
    }
    addToCart(newItem)
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
        <span className="text-primary font-light my-2 text-xs">
          {description}
        </span>
        <div className="flex flex-col my-2">
          <span className="text-xs text-primary font-light">{`Total number of sessions: ${numberOfSessions}`}</span>
          <span className="text-xs text-primary font-light">{`Hours per session: ${lengthOfSessionInHours}`}</span>
          <span className="text-xs text-primary font-light">{`Sessions per week: ${frequencyOfSessionsPerWeek}`}</span>
        </div>
        <span className="text-primary my-2 text-xs">
          {available ? "Available Now." : "Coming Soon!"}
        </span>
        <span className="text-primary">{`$${salePrice}`}</span>
        <ButtonTwo
          className="nav:text-sm"
          callBack={addItemToCart}
          innerText="Enroll in this Program"
        />
      </div>
    </div>
  )
}
