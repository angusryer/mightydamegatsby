import React, { createContext, useState, useEffect } from "react"
import { isBrowser } from "../libs/envFsLib"

const THEME_KEY = "mdf_theme"
const ThemeContext = createContext()
export default ThemeContext

const getInitialTheme = () => {
  if (isBrowser && window.localStorage) {
    const themeLocalStorage = window.localStorage.getItem(THEME_KEY)
    if (themeLocalStorage != null) {
      return themeLocalStorage
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) {
      return "dark"
    }
  }
  return "light"
}

export function ThemeContextProvider({ initialTheme, children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = (selectedTheme) => {
    if (isBrowser) {
      const root = window.document.documentElement
      const isDark = selectedTheme === "dark"
      root.classList.remove(isDark ? "light" : "dark")
      root.classList.add(selectedTheme)
      localStorage.setItem(THEME_KEY, selectedTheme)
    }
  }

  if (initialTheme) {
    toggleTheme(initialTheme)
  }

  useEffect(() => {
    toggleTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
