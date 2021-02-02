import React, { createContext, useContext, useEffect, useState } from "react"
import { AlertContext } from "./mainContext"
import { calculateTotal } from "../libs/orderLib"
import { isBrowser } from "../libs/envFsLib"

const CART_KEY = "mdf_cart"
const initialCart = {
  items: [],
  quantityOfItems: 0,
  total: 0,
}
const CartContext = createContext()

export default CartContext
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(initialCart)
  const {
    newAlert,
    types: { SUCCESS, INFO },
  } = useContext(AlertContext)

  useEffect(() => {
    if (isBrowser) {
      const cartLocalStorage = window.localStorage.getItem(CART_KEY)
      if (cartLocalStorage) {
        setCart(JSON.parse(cartLocalStorage))
      } else {
        window.localStorage.setItem(CART_KEY, JSON.stringify(initialCart))
      }
    }
  }, [])

  const setItemQty = (item) => {
    const { items } = JSON.parse(window.localStorage.getItem(CART_KEY))
    const index = items.findIndex((cartItem) => cartItem.id === item.id)
    items[index].quantity = item.quantity
    const newCart = {
      items: items,
      quantityOfItems: items.length,
      total: calculateTotal(items),
    }
    window.localStorage.setItem(CART_KEY, JSON.stringify(newCart))
    setCart(newCart)
  }

  const addToCart = (item) => {
    const { items } = JSON.parse(window.localStorage.getItem(CART_KEY))
    if (items.length) {
      const index = items.findIndex((cartItem) => cartItem.id === item.id)
      if (index >= Number(0)) {
        items[index].quantity = items[index].quantity + item.quantity
      } else {
        items.push(item)
      }
    } else {
      items.push(item)
    }
    const newCart = {
      items: items,
      quantityOfItems: items.length,
      total: calculateTotal(items),
    }
    window.localStorage.setItem(CART_KEY, JSON.stringify(newCart))
    setCart(newCart)
    newAlert(SUCCESS, "Successfully added to cart!")
  }

  const removeFromCart = (item) => {
    const cartLocalStorage = JSON.parse(window.localStorage.getItem(CART_KEY))
    let { items } = cartLocalStorage
    items = items.filter((cartItem) => cartItem.id !== item.id)
    const newCart = {
      items: items,
      quantityOfItems: items.length,
      total: calculateTotal(items),
    }
    window.localStorage.setItem(CART_KEY, JSON.stringify(newCart))
    setCart(newCart)
    newAlert(INFO, "Item removed from cart.")
  }

  const clearCart = () => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(initialCart))
    setCart(initialCart)
  }

  return (
    <CartContext.Provider
      value={{
        ...cart,
        removeFromCart,
        setItemQty,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
