import { createContext, useContext } from "react"
import { AlertContext } from "../context/mainContext"
import { calculateTotal } from "../libs/orderLib"
import { INFO, SUCCESS } from "./alertContext"

export const CART_KEY = "mdf_cart"
export const initialCart = {
  cart: [],
  numberOfItemsInCart: 0,
  total: 0,
}
export const CartContext = createContext()

export function setItemQty(item, updateCallback) {
  const { cart } = JSON.parse(window.localStorage.getItem(CART_KEY))
  const index = cart.findIndex((cartItem) => cartItem.id === item.id)
  cart[index].quantity = item.quantity
  window.localStorage.setItem(
    CART_KEY,
    JSON.stringify({
      cart: cart,
      numberOfItemsInCart: cart.length,
      total: calculateTotal(cart),
    })
  )
  updateCallback()
}

export function AddToCart(item, updateCallback) {
  const { newAlert } = useContext(AlertContext)
  const { cart } = JSON.parse(window.localStorage.getItem(CART_KEY))
  if (cart.length) {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id)
    if (index >= Number(0)) {
      cart[index].quantity = cart[index].quantity + item.quantity
    } else {
      cart.push(item)
    }
  } else {
    cart.push(item)
  }

  window.localStorage.setItem(
    CART_KEY,
    JSON.stringify({
      cart: cart,
      numberOfItemsInCart: cart.length,
      total: calculateTotal(cart),
    })
  )
  newAlert(SUCCESS, "Successfully added to cart!")
  updateCallback()
}

export function RemoveFromCart(item, updateCallback) {
  const { newAlert } = useContext(AlertContext)
  const cartLocalStorage = JSON.parse(window.localStorage.getItem(CART_KEY))
  let { cart } = cartLocalStorage
  cart = cart.filter((cartItem) => cartItem.id !== item.id)

  window.localStorage.setItem(
    CART_KEY,
    JSON.stringify({
      cart: cart,
      numberOfItemsInCart: cart.length,
      total: calculateTotal(cart),
    })
  )
  newAlert(INFO, "Item removed from cart.")
  updateCallback()
}

export function clearCart(updateCallback) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(initialCart))
  updateCallback()
}
