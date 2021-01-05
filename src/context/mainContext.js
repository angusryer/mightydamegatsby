import React, { createContext, Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { toast } from "react-toastify"


console.log("==== 55555 ====")


const mainQuery = graphql`
  query {
    navInfo {
      data
    }
  }
`

// Use local storage to maintain initial state and set up our context provider

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
  componentDidMount() {
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem(STORAGE_KEY)
      if (!storageState) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialState))
      }
    }
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
        // If this item is already in the cart, update its quantity
        cart[index].quantity = cart[index].quantity + item.quantity
      } else {
        // If this item is not yet in the cart, add it
        cart.push(item)
      }
    } else {
      // If there are no items in the cart, just add this as its first item
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

console.log("==== 66666 ====")


    return (
      <StaticQuery query={mainQuery}>
        {(queryData) => {
          return (
            <SiteContext.Provider
              value={{
                ...state,
                navItems: queryData,
                addToCart: this.addToCart,
                clearCart: this.clearCart,
                removeFromCart: this.removeFromCart,
                setItemQuantity: this.setItemQuantity,
              }}
            >
              {this.props.children}
            </SiteContext.Provider>
          )
        }}
      </StaticQuery>
    )
  }
}

export { SiteContext, ContextProvider }
