import React from "react"
import SocialIcon from "../common/SocialIcon"

export default function Footer() {
  return (
    <footer className="flex justify-center bg-secondary flex-shrink-1 w-full pt-5">
      <div className="flex flex-col w-full h-full nav:flex-row bg-secondary px-8 xl:px-0 justify-between items-center max-w-6xl">
        <span className="block font-light text-secondary pt-4 pb-8 nav:py-5 mt-2 text-xs ml-4">
          {" "}
          &#169; 2020-2021 Mighty Dame Fitness. All rights reserved.
        </span>
        <div className="nav:mr-4 flex w-full max-w-20 mb-5 nav:mb-0 justify-center items-center">
          <SocialIcon
            type="facebook"
            className={`w-auto h-5 mx-2 svg_static_footer`}
          />
          <SocialIcon
            type="instagram"
            className={`w-auto h-5 mx-2 svg_static_footer`}
          />
        </div>
      </div>
    </footer>
  )
}
