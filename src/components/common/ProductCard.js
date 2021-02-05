import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../context/mainContext"

export default function ProductCard(props) {
  const { addToCart, setItemQty } = useContext(CartContext)
  const { title, image, description, price, inStock, otherImages } = props

  const [mainImageState, setMainImageState] = useState(null)
  const [otherImagesState, setOtherImagesState] = useState([])

  useEffect(() => {
    // console.log(props)
    setMainImageState(image)
    setOtherImagesState([image, ...otherImages])
  }, [])

  const zoomIn = (e) => {
    // console.log(e)
    // TODO Implement zoom on mouse hover
  }

  return (
    <div className="grid cardgrid-wide cardgrid-narrow mb-20">
      <div className="min-w-88 w-auto max-w-5xl h-auto my-2 nav:ml-5 nav:mr-1 rounded-md">
        <img
          className="w-full h-full object-contain rounded-md"
          src={mainImageState}
          alt={title}
          onMouseOver={zoomIn} // ? Not sure if this is the right event to handle the zoom-on-hover
        />
      </div>
      <div className="rounded-md w-auto flex flex-nowrap nav:flex-col nav:max-h-104 nav:w-full justify-center nav:justify-start nav:pt-2 items-center">
        {otherImagesState &&
          otherImagesState.map((imagePath, index) => {
            return (
              <div key={index} className={`h-20 w-auto`}>
                <img
                  className={`h-full w-auto object-contain hover:opacity-75`}
                  src={imagePath}
                  alt="other product views"
                  onClick={() => setMainImageState(imagePath)}
                />
              </div>
            )
          })}
      </div>
      <div className="flex flex-col p-5 items-center">
        <h3 className="font-lemon text-2xl text-center text-primary my-3">
          {title}
        </h3>
        <p className="my-2 text-center text-primary text-base font-light">
          {description}
        </p>

        <div className="flex flex-col my-3 items-center">
          <span className="my-1 text-primary text-base font-light">
            {"$" + price}
          </span>
          <span className="my-1 text-primary text-base font-light">
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  )
}
