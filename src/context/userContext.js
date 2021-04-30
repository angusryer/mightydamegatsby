import React, { createContext, useEffect, useState } from "react"
import { verifySignInStatus, signIn, signOut } from "../libs/auth"
import { isBrowser } from "../libs/envFsLib"

const USER_KEY = "mdf_user"
const initialUser = null
const UserContext = createContext()

export default UserContext
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialUser)

  useEffect(() => {
    if (isBrowser) {
      const userLocalStorage = window.localStorage.getItem(USER_KEY)
      if (userLocalStorage) {
        setUser(JSON.parse(userLocalStorage))
      } else {
        _verifyAndStoreUser()
      }
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
    try {
      const data = await signIn(username, password)
      if (data.success) {
        _storeUser(data.response)
        return {
          success: true,
          response: "You've successfully signed in!",
        }
      } else return data
    } catch (err) {
      return {
        success: false,
        response: err.message,
        type: err.type,
      }
    }
  }

  const userLogout = async () => {
    try {
      await signOut()
      _removeUser()
    } catch (err) {
      return err.message
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
