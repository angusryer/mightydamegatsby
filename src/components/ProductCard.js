import React from "react"

export default function ProductCard(props) {
  const { title, image, description, price, inStock, otherImages } = props
  return (
    <div>
      <img className="w-auto h-60" src={image} alt={title} />
      <div className="flex flex-wrap w-3/6 ml-auto mr-12 content-around items-center justify-end">
        {otherImages &&
          otherImages.map((imagePath, index) => {
            return (
              <img
                key={index}
                className="h-20 w-auto"
                src={imagePath}
                alt="other product views"
              />
            )
          })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{price}</span>
        <span>{inStock ? "In Stock!" : "Available Soon"}</span>
      </div>
    </div>
  )
}
