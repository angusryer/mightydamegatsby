import React from "react"
import facebookIcon from "../images/fb.png"
import instagramIcon from "../images/ig.jpg"
import twitterIcon from "../images/twitter.png"

export default function SocialIcon({ type, className, textIsOn }) {
  let platformType

  switch (type) {
    case "facebook":
      platformType = (
        <div>
          <a
            href="https://www.facebook.com/mightydame"
            rel="noreferrer"
            target="_blank"
          >
            <img src={facebookIcon} alt="facebook" className={className} />
            {textIsOn && <span>facebook</span>}
          </a>
        </div>
      )
      break
    case "instagram":
      platformType = (
        <div>
          <a
            href="https://www.instagram.com/mightydamefit/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagramIcon} alt="instagram" className={className} />
            {textIsOn && <span>instagram</span>}
          </a>
        </div>
      )
      break
    case "twitter":
      platformType = (
        <div>
          <a
            href="https://www.twitter.com/mightydamefitness"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitterIcon} alt="twitter" className={className} />
            {textIsOn && <span>twitter</span>}
          </a>
        </div>
      )
      break
    default:
      platformType = <div></div>
  }

  return platformType
}

// const IconWordBlock = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Image = styled.img`
//   width: ${(props) => props.size};
//   height: ${(props) => props.size};
// `;

// const Tag = styled.span`
//   margin-left: 10px;
// `;
