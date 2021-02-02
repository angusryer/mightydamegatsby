import React from "react"
import CartContext, { CartContextProvider } from "./cartContext"
import UserContext, { UserContextProvider } from "./userContext"
import ThemeContext, { ThemeContextProvider } from "./themeContext"
import AlertContext, { AlertContextProvider } from "./alertContext"

function ContextProvider({ children }) {
  return (
    <AlertContextProvider>
      <UserContextProvider>
        <ThemeContextProvider>
          <CartContextProvider>{children}</CartContextProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </AlertContextProvider>
  )
}

export { AlertContext, CartContext, UserContext, ThemeContext, ContextProvider }
