import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
	return (
		<>
			<Helmet>
				<title>The Mighty Dame | Page Not Found</title>
				<meta name='description' content='Might Dame Fitness' />
			</Helmet>
			<h3>There's actually no page here... try going back or going <a href="/">here.</a></h3>
		</>
	);
}
