import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import ProgramCard from "../components/ProgramCard";
import programData from "../seed/programs.json";

export default function Fitness() {
	const [programs, setprograms] = useState([]);

	useEffect(() => {
		setprograms(programData);
		// axios.get("/api/products").then((res) => {
		// 	setProducts(res.data);
		// });
	}, []);

	return (
		<>
			<Helmet>
				<title>The Mighty Dame | Fitness &amp; Nutrition</title>
				<meta name='description' content="Women's fitness programs" />
			</Helmet>
			<h1>Our Fitness &amp; Nutrition Programs</h1>
			<ProgramDisplayGrid>
				{programs &&
					programs.map((program) => {
						return (
							<ProgramCard
								key={program.programId}
								image={program.Image}
								title={program.title}
								description={program.description}
								numberOfSessions={program.numberOfSessions}
								lengthOfSessionInHours={program.lengthOfSessionInHours}
								frequencyOfSessionsPerWeek={program.frequencyOfSessionsPerWeek}
								price={program.price}
								available={program.available}
							/>
						);
					})}
			</ProgramDisplayGrid>
		</>
	);
}


const ProgramDisplayGrid = styled.section`
	display: flex;
	flex-flow: row wrap;
	align-content: center;
	justify-content: space-evenly;
	max-width: 1000px;
	margin: 0 auto;
`;