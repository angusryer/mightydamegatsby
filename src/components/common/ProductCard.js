import React from "react"
import { ButtonLink } from "../common/ButtonTwo"

export default function ProductCard(props) {
  const { title, image, longDescription, salePrice, inStock, brand } = props

  // const addItemToCart = () => {
  //   const newItem = {
  //     id: id,
  //     offerType: "PRODUCT",
  //     name: title,
  //     quantity: 1,
  //     price: salePrice || price,
  //     image: image
  //   }
  //   addToCart(newItem)
  // }

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
          {longDescription}
        </span>
        <span className="text-primary my-2 text-xs">
          {inStock ? "In Stock." : "Coming Soon!"}
        </span>
        <span className="text-primary">{`$${salePrice}`}</span>
        <ButtonLink
          className="nav:text-sm flex justify-center align-center pt-2"
          loc="https://www.crampkit.ca/"
          innerText={`Check out ${brand}'s site!`}
        />
      </div>
    </div>
  )
}
