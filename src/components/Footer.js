import React from "react"
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="flex justify-center flex-shrink-1 w-full mt-5">
      <div className="flex w-full h-full max-w-6xl px-8 xl:px-0 border-solid border-t border-green border-opacity-70 justify-between items-center">
        <span className="block text-gray-700 pt-4 pb-8 mt-2 text-sm ml-4">
          {" "}
          &#169; 2020-2021 Mighty Dame Fitness. All rights reserved.
        </span>
        <div className="mr-4 flex w-full max-w-48 justify-between">
          <SocialIcon type="facebook" className="w-auto h-7" />
          <SocialIcon type="instagram" className="w-auto h-7" />
          <SocialIcon type="twitter" className="w-auto h-7" />
        </div>
      </div>
    </footer>
  )
}
