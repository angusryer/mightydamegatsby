import { createContext } from "react"
import { isBrowser } from "../libs/envFsLib"

const RED = "#EE3F46"
const LIGHT = "#F9F2E8"
const GREEN = "#0D5259"
const ORANGE = "#F57C23"
const VIOLET = "#BE2C8F"
const DARK = "#201D16"
const BLACK = "#000"
const WHITE = "#FFF"

export const THEME_KEY = "mdf_theme"
export const allThemes = {
  currentTheme: "light",
  light: {
    page: LIGHT,
    link: ORANGE,
    focus: VIOLET,
    text: DARK,
    lines: GREEN,
    white: WHITE,
    black: BLACK,
    warn: RED,
  },
  dark: {
    page: DARK,
    link: ORANGE,
    focus: VIOLET,
    text: LIGHT,
    lines: GREEN,
    white: WHITE,
    black: BLACK,
    warn: RED,
  },
}

export const initialTheme = {
  currentTheme: "light",
  ...allThemes.light,
}

export const ThemeContext = createContext()

export function toggleTheme(updateCallback) {
  if (isBrowser) {
    const storedTheme = window.localStorage.getItem(THEME_KEY)
    const newThemeName = storedTheme.currentTheme === "light" ? "dark" : "light"
    const newTheme = {
      currentTheme: newThemeName,
      ...allThemes[newThemeName],
    }
    window.localStorage.setItem(THEME_KEY, JSON.stringify(newTheme))
  }
  updateCallback()
}
