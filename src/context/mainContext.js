import React, { Component } from "react"
import { verifySignInStatus } from "../libs/auth"
import {
  CART_KEY,
  CartContext,
  AddToCart,
  clearCart,
  initialCart,
  RemoveFromCart,
  setItemQty,
} from "./cartContext"
import {
  USER_KEY,
  UserContext,
  initialUser,
  storeUser,
  removeUser,
} from "./userContext"
import {
  THEME_KEY,
  ThemeContext,
  initialTheme,
  toggleTheme,
} from "./themeContext"
import { isBrowser } from "../libs/envFsLib"
import AlertContext, { AlertContextProvider } from "./alertContext"

class ContextProvider extends Component {

  state = {
    cartState: initialCart,
    userState: initialUser,
    themeState: initialTheme
  }

  async componentDidMount() {
    if (isBrowser) {
      const cartLocalStorage = window.localStorage.getItem(CART_KEY)
      if (!cartLocalStorage)
        window.localStorage.setItem(CART_KEY, JSON.stringify(initialCart))
      const userLocalStorage = window.localStorage.getItem(USER_KEY)
      if (!userLocalStorage)
        window.localStorage.setItem(USER_KEY, JSON.stringify(initialUser))
      const themelocalStorage = window.localStorage.getItem(THEME_KEY)
      if (!themelocalStorage)
        window.localStorage.setItem(THEME_KEY, JSON.stringify(initialTheme))
    }
    const { success, response } = await verifySignInStatus()
    if (success) this.setState({userState: response})
  }

  render() {
    if (isBrowser) {
      const cartLocalStorage = window.localStorage.getItem(CART_KEY)
      if (cartLocalStorage) this.setState({cartState: JSON.parse(cartLocalStorage)})
      const userLocalStorage = window.localStorage.getItem(USER_KEY)
      if (userLocalStorage) this.setState({userState: JSON.parse(userLocalStorage)})
      const themeLocalStorage = window.localStorage.getItem(THEME_KEY)
      if (themeLocalStorage) this.setState({themeState: JSON.parse(themeLocalStorage)})
    }

    return (
      <AlertContextProvider>
        <UserContext.Provider
          value={{
            ...this.userState,
            storeUser: (user) => storeUser(user, this.forceUpdate),
            removeUser: () => removeUser(this.forceUpdate),
          }}
        >
          <ThemeContext.Provider
            value={{
              ...this.themeState,
              toggleTheme: () => toggleTheme(this.forceUpdate),
            }}
          >
            <CartContext.Provider
              value={{
                ...this.cartState,
                removeFromCart: (item) =>
                  RemoveFromCart(item, this.forceUpdate),
                setItemQty: (item) => setItemQty(item, this.forceUpdate),
                addToCart: (item) => AddToCart(item, this.forceUpdate),
                clearCart: (item) => clearCart(item, this.forceUpdate),
              }}
            >
              {this.props.children}
            </CartContext.Provider>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </AlertContextProvider>
    )
  }
}

export { AlertContext, CartContext, UserContext, ThemeContext, ContextProvider }
