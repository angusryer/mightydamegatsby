import React, { createContext, Component } from "react"
import { toast } from "react-toastify"
import { Auth } from "aws-amplify"

const STORAGE_KEY = "MDF_"

const initialState = {
  cart: [],
  numberOfItemsInCart: 0,
  total: 0,
  currentUser: {},
}

const SiteContext = createContext()

function calculateTotal(cart) {
  const total = cart.reduce((cumulative, next) => {
    // const quantity = next.quantity // TODO delete
    cumulative = cumulative + JSON.parse(next.price) * JSON.parse(next.quantity)
    return cumulative
  }, 0)
  return total
}

class ContextProvider extends Component {
  async componentDidMount() {
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (!storageState) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
      }
    }
    Auth.currentAuthenticatedUser().then(res => {
      console.log(res)
      if (res.data) initialState.currentUser = res.data
    }).catch(err => {
      console.log("Auth error ===> ", err)
    })
  }

  setItemQuantity = (item) => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cart } = storageState
    const index = cart.findIndex((cartItem) => cartItem.id === item.id)
    cart[index].quantity = item.quantity
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )
    this.forceUpdate() // force a re-render on our context since we haven't triggered it (no setState anywhere, we've only updated local storage)
  }

  addToCart = (item) => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    const { cart } = storageState
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
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )
    toast("Successfully added to cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    })
    this.forceUpdate() // force a re-render on our context since we haven't triggered it (no setState anywhere, we've only updated local storage)
  }

  removeFromCart = (item) => {
    const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    let { cart } = storageState
    cart = cart.filter((cartItem) => cartItem.id !== item.id)

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart,
        numberOfItemsInCart: cart.length,
        total: calculateTotal(cart),
      })
    )
    this.forceUpdate() // force a re-render on our context since we haven't triggered it (no setState anywhere, we've only updated local storage)
  }

  clearCart = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
    this.forceUpdate() // force a re-render on our context since we haven't triggered it (no setState anywhere, we've only updated local storage)
  }

  render() {
    let state = initialState
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (storageState) {
        state = JSON.parse(storageState)
      }
    }

    return (
      <SiteContext.Provider
        value={{
          ...state,
          addToCart: this.addToCart,
          clearCart: this.clearCart,
          removeFromCart: this.removeFromCart,
          setItemQuantity: this.setItemQuantity,
        }}
      >
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}

export { SiteContext, ContextProvider }
