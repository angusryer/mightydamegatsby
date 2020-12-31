import React from "react";
import styled from "styled-components";
import Rating from "./Rating";

export default function Review({ value, quote, reviewer, image }) {
  return (
    <ReviewContainer>
      <RatingBlock>
        <Rating value={value} height="25px" />
        <RatingWords>{`${value} bars`}</RatingWords>
      </RatingBlock>
      <ReviewQuote>{`"${quote}"`}</ReviewQuote>
      <ReviewerBlock>
        <ReviewerImageContainer>
          <ReviewerImage src={image} alt="Normal person" />
        </ReviewerImageContainer>
        <ReviewerName>{reviewer}</ReviewerName>
      </ReviewerBlock>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-width: 250px;
  max-width: 350px;
  max-height: 150px;
  border: none;
  border-radius: 5px;
  margin: 25px 10px 10px 5px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const RatingBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
`;

const RatingWords = styled.span`
  margin-left: 15px;
  font-size: 14px;
  color: whitesmoke;
  font-family: "Fredericka the Great";
`;

const ReviewQuote = styled.blockquote`
  margin: 10px 0 0 0;
  color: whitesmoke;
  font-family: "Fredericka the Great";
`;

const ReviewerBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 auto;
`;

const ReviewerImageContainer = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const ReviewerImage = styled.img`
  height: 100%;
  width: auto;
  filter: invert(50%);
`;

const ReviewerName = styled.span`
  margin: 0;
  transform: translateX(-10px);
  font-size: 14px;
  color: whitesmoke;
  font-family: "Fredericka the Great";
`;
