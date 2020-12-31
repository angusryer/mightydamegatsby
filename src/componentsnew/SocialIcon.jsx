import React from "react";
import styled from "styled-components";
import facebookIcon from "../assets/facebookIcon.png";
import instagramIcon from "../assets/instagramIcon.jpg";
import twitterIcon from "../assets/twitterIcon.png";

export default function SocialIcon({ type, size }) {
  let platformType;

  switch (type) {
    case "facebook":
      platformType = (
        <IconWordBlock>
          <a
            href="https://www.facebook.com/mightydame"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={facebookIcon} alt="facebook" size={size} />
            <Tag>facebook</Tag>
          </a>
        </IconWordBlock>
      );
      break;
    case "instagram":
      platformType = (
        <IconWordBlock>
          <a
            href="https://www.instagram.com/mightydamefit/"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={instagramIcon} alt="instagram" size={size} />
            <Tag>instagram</Tag>
          </a>
        </IconWordBlock>
      );
      break;
    case "twitter":
      platformType = (
        <IconWordBlock>
          <a
            href="https://www.twitter.com/mightydamefitness"
            rel="noreferrer"
            target="_blank"
          >
            <Image src={twitterIcon} alt="twitter" size={size} />
            <Tag>twitter</Tag>
          </a>
        </IconWordBlock>
      );
      break;
    default:
      platformType = <div></div>;
  }

  return platformType;
}

const IconWordBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const Tag = styled.span`
  margin-left: 10px;
`;
