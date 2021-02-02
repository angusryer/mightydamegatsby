import React, { useState, useContext } from "react"
import { CartContext } from "../context/mainContext"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link } from "gatsby"
import { v4 as uuid } from "uuid"
import Image from "../components/common/Image"
import { DENOMINATION } from "../libs/constants"

import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_DvXwcKnVaaZUpWJIbh9cjgZr00IjIAjZAA")

export default function CheckoutWithContext(props) {
  return (
    <Elements stripe={stripePromise}>
      <Checkout {...props} />
    </Elements>
  )
}

const calculateShipping = () => {
  return 0
}

const Input = ({ onChange, value, name, placeholder, tabIndex }) => (
  <input
    onChange={onChange}
    value={value}
    className="mt-2 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary text-opacity-80 leading-tight focus:outline-none focus:shadow-outline"
    type="text"
    placeholder={placeholder}
    name={name}
    tabIndex={tabIndex}
  />
)

const Checkout = () => {
  const { clearCart, quantityOfItems, items, total } = useContext(CartContext)
  const [errorMessage, setErrorMessage] = useState(null)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [input, setInput] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    postal_code: "",
    state: "",
  })

  const stripe = useStripe()
  const elements = useElements()

  const onChange = (e) => {
    setErrorMessage(null)
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, street, city, postal_code, state } = input

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return
    }

    // Validate input
    if (!street || !city || !postal_code || !state) {
      setErrorMessage("Please fill in the form!")
      return
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement)

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name: name },
    })

    if (error) {
      setErrorMessage(error.message)
      return
    }

    const order = {
      email,
      amount: total,
      address: state, // should this be {street, city, postal_code, state} ?
      payment_method_id: paymentMethod.id,
      receipt_email: email,
      id: uuid(),
    }
    console.log("order: ", order)
    // TODO call API
    setOrderCompleted(true)
    clearCart()
  }

  const cartEmpty = quantityOfItems === Number(0)

  if (orderCompleted) {
    return (
      <div>
        <h3>Thanks! Your order has been successfully processed.</h3>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center pb-10">
      <div
        className="
            flex flex-col w-full
            c_large:w-c_large
          "
      >
        <div className="pt-10 pb-8">
          <h1 className="text-5xl font-light">Checkout</h1>
          <Link to="/cart">
            <div className="cursor-pointer flex">
              <FaLongArrowAltLeft className="mr-2 text-primary text-opacity-75 mt-1" />
              <p className="text-primary text-opacity-75 text-sm">Edit Cart</p>
            </div>
          </Link>
        </div>

        {cartEmpty ? (
          <h3>No items in cart.</h3>
        ) : (
          <div className="flex flex-col">
            <div className="">
              {items.map((item, index) => {
                return (
                  <div className="border-b py-10" key={index}>
                    <div className="flex items-center">
                      <Image
                        className="w-32 m-0"
                        src={item.image}
                        alt={item.name}
                      />
                      <p className="m-0 pl-10 text-primary text-opacity-75 text-sm">
                        {item.name}
                      </p>
                      <div className="flex flex-1 justify-end">
                        <p className="m-0 pl-10 text-primary text-opacity-90 tracking-tighter font-semibold">
                          {DENOMINATION + item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="flex flex-1 pt-8 flex-col">
                <div className="mt-4 border-t pt-10">
                  <form onSubmit={handleSubmit}>
                    {errorMessage ? <span>{errorMessage}</span> : ""}
                    <Input
                      onChange={onChange}
                      value={input.name}
                      name="name"
                      placeholder="Cardholder name"
                      tabIndex="0"
                    />
                    <CardElement className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-primary text-opacity-80 leading-tight focus:outline-none focus:shadow-outline" />
                    <Input
                      onChange={onChange}
                      value={input.email}
                      name="email"
                      placeholder="Email"
                      tabIndex="-1"
                    />
                    <Input
                      onChange={onChange}
                      value={input.street}
                      name="street"
                      placeholder="Street"
                      tabIndex="-2"
                    />
                    <Input
                      onChange={onChange}
                      value={input.city}
                      name="city"
                      placeholder="City"
                      tabIndex="-3"
                    />
                    <Input
                      onChange={onChange}
                      value={input.state}
                      name="state"
                      placeholder="State"
                      tabIndex="-4"
                    />
                    <Input
                      onChange={onChange}
                      value={input.postal_code}
                      name="postal_code"
                      placeholder="Postal Code"
                      tabIndex="-5"
                    />
                    <button
                      type="submit"
                      disabled={!stripe}
                      onClick={handleSubmit}
                      className="hidden md:block bg-secondary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                      tabIndex="-6"
                    >
                      Confirm order
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:pt-20">
                <div className="ml-4 pl-2 flex flex-1 justify-end pt-2 md:pt-8 pr-4">
                  <p className="text-sm pr-10">Subtotal</p>
                  <p className="tracking-tighter w-38 flex justify-end">
                    {DENOMINATION + total}
                  </p>
                </div>
                <div className="ml-4 pl-2 flex flex-1 justify-end pr-4">
                  <p className="text-sm pr-10">Shipping</p>
                  <p className="tracking-tighter w-38 flex justify-end">
                    FREE SHIPPING
                  </p>
                </div>
                <div className="md:ml-4 pl-2 flex flex-1 justify-end bg-gray-200 pr-4 pt-6">
                  <p className="text-sm pr-10">Total</p>
                  <p className="font-semibold tracking-tighter w-38 flex justify-end">
                    {DENOMINATION + (total + calculateShipping())}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={!stripe}
                  onClick={handleSubmit}
                  className="md:hidden bg-secondary hover:bg-black text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                  tabIndex="-7"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
