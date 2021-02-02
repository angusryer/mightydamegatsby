import React, { createContext, useEffect, useState, useContext } from "react"
import { verifySignInStatus, signIn, signOut } from "../libs/auth"
import { AlertContext } from "./mainContext"
import { isBrowser } from "../libs/envFsLib"

const USER_KEY = "mdf_user"
const initialUser = null
const UserContext = createContext()

export default UserContext
export function UserContextProvider({ children }) {
  const {
    newAlert,
    types: { ERROR, SUCCESS },
  } = useContext(AlertContext)
  const [user, setUser] = useState(initialUser)

  useEffect(() => {
    const userLocalStorage = window.localStorage.getItem(USER_KEY)
    if (userLocalStorage) {
      setUser(JSON.parse(userLocalStorage))
    } else {
      _verifyAndStoreUser()
    }
  }, [])

  const _verifyAndStoreUser = async () => {
    const { success, response } = await verifySignInStatus()
    if (success && isBrowser) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(response))
      setUser(response)
    } else if (isBrowser) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(initialUser))
      setUser(initialUser)
    }
  }

  const _storeUser = (user) => {
    if (isBrowser) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(user))
      setUser(user)
    }
  }

  const _removeUser = () => {
    if (isBrowser) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(initialUser))
      setUser(initialUser)
    }
  }

  const isLoggedIn = async () => {
    const { success, response } = await verifySignInStatus()
    if (success && isBrowser) {
      const userLocalStorage = window.localStorage.getItem(USER_KEY)
      if (!userLocalStorage)
        window.localStorage.setItem(USER_KEY, JSON.stringify(response))
    } else if (isBrowser) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(initialUser))
    }
    return success
  }

  const userLogin = async (username, password) => {
    const { success, response } = await signIn(username, password)
    if (success) _storeUser(response)
    else newAlert(ERROR, `Huhn? We couldn't sign you in! Error: ${response}`)
  }

  const userLogout = async () => {
    try {
      await signOut()
      _removeUser()
    } catch (err) {
      throw err.message
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...user,
        userLogin,
        userLogout,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
