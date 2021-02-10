import React, { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/mainContext"

export default function ThemeToggle({ className }) {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light")
  }

  return (
    <div className={className}>
      <label className="relative inline-block w-8 h-4">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-buttonPrimary transition-all rounded-full">
          <span
            className={`absolute w-3 h-3 rounded-full top-0.5 toggle ${
              theme === "dark" ? "dark_enabled" : "light_enabled"
            } align-middle bg-primary`}
          ></span>
        </span>
      </label>
    </div>
  )
}
