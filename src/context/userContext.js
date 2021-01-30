import { createContext } from "react"
import { isBrowser } from "../libs/envFsLib"

export const USER_KEY = "mdf_user"
export const initialUser = {}
export const UserContext = createContext()

export function storeUser(user, updateCallback) {
  if (isBrowser) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user))
    updateCallback()
  }
}

export function removeUser(updateCallback) {
  if (isBrowser) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(initialUser))
    updateCallback()
  }
}
