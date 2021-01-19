import React, { useEffect, useState } from "react";
// import { API, Auth } from "aws-amplify";
import Subscribe from "./Subscribe";
import Review from "./Review";
import heroImage from "../assets/AloraGriffiths.jpg";
import userImage from "../assets/User.png";
import reviewData from "../seed/reviews.json";

export default function Hero() {

	return (
		<section>
			HERO {/* bgImage={heroImage}> */}
			{/* <CopyContainer>
				<MainTag>
					Learn the science and get the results 42 seconds at a time.
				</MainTag>
				<Subscribe />
				<ReviewBlock>
					{reviews instanceof Array &&
						reviews.map((review) => (
							<Review
								key={review.reviewId}
								value={review.rating}
								image={userImage}
								reviewer={review.reviewerName}
								quote={review.quote}
							/>
						))}
				</ReviewBlock>
			</CopyContainer> */}
		</section>
	);
}

// const HeroContainer = styled.section`
// 	display: flex;
// 	background-image: url(${(props) => props.bgImage});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	height: 100%;
// `;

// const CopyContainer = styled.div`
// 	display: flex;
// 	flex-flow: column nowrap;
// 	margin: 100px 0 0 100px;
// 	max-width: 700px;
// 	z-index: 1;
// `;

// const MainTag = styled.h2`
// 	color: whitesmoke;
// 	font-size: 42px;
// `;

// const ReviewBlock = styled.div`
// 	display: flex;
// 	width: 100%;
// `;
