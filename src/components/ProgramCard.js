import React from "react"

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
                alt="other program views"
              />
            )
          })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      <>
        <span>{price}</span>
        <span>{available ? "Currently Available" : "Available Soon"}</span>
      </>
      <div>
        <span>Number of Sessions: {numberOfSessions}</span>
        <span>Hours per Session: {lengthOfSessionInHours}</span>
        <span>Sessions per Week: {frequencyOfSessionsPerWeek}</span>
      </div>
    </div>
  )
}

// const Container = styled.div`
// 	max-width: 500px;
// 	width: 50%;
// 	height: 320px;
// 	border: 1px solid grey;
// 	border-radius: 5px;
// 	display: flex;
// 	flex-flow: column nowrap;
// 	margin: 10px;
// 	:hover {
// 		background-color: whitesmoke;
// 	}
// `;

// const Image = styled.img`
// 	max-height: 60%;
// 	width: auto;
// `;

// const Title = styled.h3``;

// const Description = styled.p``;

// const PriceAvailableGroup = styled.div`
// 	display: flex;
// `;

// const Price = styled.span``;

// const Available = styled.span``;

// const DataPoints = styled.div`
// 	display: flex;
// 	align-items: center;
// 	flex-flow: row nowrap;
// `;

// const Data = styled.span``;
