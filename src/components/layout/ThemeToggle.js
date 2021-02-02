import React, { useContext, useState } from "react"
import { ThemeContext } from "../../context/mainContext"

export default function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  const [darkClass, setDarkClass] = useState(
    theme === "dark" ? "darkToggle" : ""
  )

  const isDark = () => {
    return theme === "dark"
  }

  const handleClick = (e) => {
    setDarkClass(isDark() ? "darkToggle" : "")
    setTheme(e.target.checked ? "dark" : "light")
  }

  return (
    <>
      <label className="relative inline-block w-8 h-4">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isDark()}
          onChange={(e) => handleClick(e)}
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-buttonPrimary transition-all rounded-full">
          <span
            className={`absolute w-3 h-3 rounded-full top-0.5 toggle ${darkClass} align-middle bg-primary`}
          ></span>
        </span>
      </label>
    </>
  )
}
