import React from "react"
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="flex justify-center bg-violet flex-shrink-1 w-full mt-5">
      <div className="flex flex-col w-full h-full nav:flex-row bg-dark bg-opacity-30 px-8 xl:px-0 justify-between items-center">
        <span className="block font-bold text-light pt-4 pb-8 mt-2 text-sm ml-4">
          {" "}
          &#169; 2020-2021 Mighty Dame Fitness. All rights reserved.
        </span>
        <div className="nav:mr-4 flex w-full max-w-20 mb-5 nav:mb-0 justify-between items-center">
          <SocialIcon type="facebook" className="w-auto h-5 my-2" />
          <SocialIcon type="instagram" className="w-auto h-5 my-2" />
          <SocialIcon type="twitter" className="w-auto h-4 my-2" />
        </div>
      </div>
    </footer>
  )
}
