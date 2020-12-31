import React from "react";
import styled from "styled-components";

// "programId": 1,
// "title": "Assessment 101",
// "image": "",
// "description": "If you're new to us and you're note sure what program fits you best, then start here.",
// "numberOfSessions": 1,
// "lengthOfSessionInHours": 0.5,
// "frequencyOfSessionsPerWeek": 2,
// "price": 39.99,
// "available": true

export default function ProgramCard(props) {
	const {
		title,
		image,
		description,
		numberOfSessions,
		lengthOfSessionInHours,
		frequencyOfSessionsPerWeek,
		price,
		available
	} = props;
	return (
		<Container>
			<Image src={image} alt={title} />
			<Title>{title}</Title>
			<Description>{description}</Description>
			<PriceAvailableGroup>
				<Price>{price}</Price>
				<Available>
					{available ? "Currently Available" : "Available Soon"}
				</Available>
			</PriceAvailableGroup>
			<DataPoints>
				<Data>Number of Sessions: {numberOfSessions}</Data>
				<Data>Hours per Session: {lengthOfSessionInHours}</Data>
				<Data>Sessions per Week: {frequencyOfSessionsPerWeek}</Data>
			</DataPoints>
		</Container>
	);
}

const Container = styled.div`
	max-width: 500px;
	width: 50%;
	height: 320px;
	border: 1px solid grey;
	border-radius: 5px;
	display: flex;
	flex-flow: column nowrap;
	margin: 10px;
	:hover {
		background-color: whitesmoke;
	}
`;

const Image = styled.img`
	max-height: 60%;
	width: auto;
`;

const Title = styled.h3``;

const Description = styled.p``;

const PriceAvailableGroup = styled.div`
	display: flex;
`;

const Price = styled.span``;

const Available = styled.span``;

const DataPoints = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
`;

const Data = styled.span``;
