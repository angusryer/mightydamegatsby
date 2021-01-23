import React, { useEffect, useState } from "react"

export default function ProgramCard(props) {
  const {
    title,
    image,
    otherImages,
    description,
    numberOfSessions,
    lengthOfSessionInHours,
    frequencyOfSessionsPerWeek,
    price,
    available,
  } = props

  const [mainImageState, setMainImageState] = useState(null)
  const [otherImagesState, setOtherImagesState] = useState([])

  const displayMainImage = (selectedImage) => {
    const otherImagesFiltered = otherImagesState.filter((image) => {
      return image !== selectedImage
    })

    otherImagesFiltered.push(mainImageState)

    setMainImageState(selectedImage)
    setOtherImagesState(otherImagesFiltered)
  }

  useEffect(() => {
    setMainImageState(image)
    setOtherImagesState(otherImages)
  }, [])

  return (
    <div className="grid cardgrid-wide cardgrid-narrow mb-20">
      <div className="w-full h-full py-2 max-w-6xl nav:px-5">
        <img
          className="w-full max-w-none h-full object-center object-cover "
          src={mainImageState}
          alt={title}
        />
      </div>
      <div className="flex flex-nowrap nav:flex-col w-full justify-center nav:justify-start nav:pt-2 items-center">
        {otherImagesState &&
          otherImagesState.map((imagePath, index) => {
            return (
              <img
                key={index}
                className="h-20 w-24 object-cover object-center"
                src={imagePath}
                alt="other program views"
                onClick={() => displayMainImage(imagePath)}
              />
            )
          })}
      </div>
      <div className="flex flex-col p-5 items-center">
        <h3 className="font-gagalin text-lg text-center my-3">{title}</h3>
        <p className="my-2 text-center">{description}</p>

        <div className="my-2 flex flex-col items-center">
          <span className="my-1">Number of Sessions: {numberOfSessions}</span>
          <span className="my-1">Hours per Session: {lengthOfSessionInHours}</span>
          <span className="my-1">Sessions per Week: {frequencyOfSessionsPerWeek}</span>
        </div>
        
        <div className="flex flex-col my-3 items-center">
          <span className="my-1">{"$" + price}</span>
          <span className="my-1">{available ? "Some Availability" : "Coming SOON"}</span>
        </div>
      
      </div>
    </div>
  )
}