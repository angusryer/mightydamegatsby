// import React, { useState, useContext } from "react"
// import axios from "axios"
// import { Link } from "gatsby"
// import { FaLongArrowAltLeft } from "react-icons/fa"
// import { v4 as uuid } from "uuid"
// import { loadStripe } from "@stripe/stripe-js"
// import mightyDameWithText from "../images/MightDameWithWords.png"
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js"
// import { ThemeContext, AlertContext, CartContext } from "../context/mainContext"
// import { DENOMINATION } from "../libs/constants"
// import Input from "../components/common/Input"

// const PK_KEY = process.env.GATSBY_PK
// const PAY_ENDPOINT = process.env.GATSBY_PAYMENT_ENDPOINT

// const stripePromise = loadStripe(PK_KEY)

// export default function CheckoutWithContext() {
//   return (
//     <Elements stripe={stripePromise}>
//       <Checkout />
//     </Elements>
//   )
// }

// const Checkout = () => {
//   const [orderCompleted, setOrderCompleted] = useState(false)
//   const [receipts, setReceipts] = useState([])
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     street: "",
//     city: "",
//     postal_code: "",
//     province: "",
//   })
//   const { theme } = useContext(ThemeContext)
//   const {
//     newAlert,
//     types: { ERROR, INFO },
//   } = useContext(AlertContext)
//   const { items, total, clearCart } = useContext(CartContext)
//   const stripe = useStripe()
//   const elements = useElements()

//   const onChange = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const { name, email, street, city, postal_code, province } = input

//     if (!stripe || !elements) {
//       return
//     }

//     // Validate input
//     if (!name || !email | !street || !city || !postal_code || !province) {
//       newAlert(INFO, "Please fill in the form!")
//       return
//     }

//     const address = {
//       line1: street,
//       line2: "",
//       city: city,
//       postal_code: postal_code,
//       state: province,
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement)
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//       billing_details: { name: name, email: email, address: address },
//     })

//     if (error) {
//       newAlert(ERROR, error.message)
//       return
//     }

//     const order = {
//       id: uuid(),
//       email: email,
//       items: items,
//       amount: total,
//       currency: "cad",
//       address: address,
//       payment_method_id: paymentMethod.id,
//       receipt_email: email,
//     }

//     try {
//       const data = await axios({
//         method: "post",
//         url: PAY_ENDPOINT,
//         data: order,
//       })
//       setOrderCompleted(true)
//       setReceipts(data.data.receipts)
//       clearCart()
//     } catch (err) {
//       newAlert(ERROR, err.message)
//       throw err.message
//     }
//   }

//   const calculateTax = () => {
//     // TODO implement different regional tax rates if needed
//     // This is only for client viewing. Tax is calculated on the server
//     switch (input.province) {
//       case "ON":
//         return total * 0.13
//       default:
//         return 0
//     }
//   }

//   if (orderCompleted) {
//     return (
//       <div className="flex flex-col h-full items-center justify-center p-5">
//         <h3 className="font-poppins font-light text-primary text-center">
//           Thanks! Your order has been successfully processed. Check your email!
//         </h3>
//         <Link
//           className="font-lemon text-primary text-2xl my-4 text-center"
//           to="/"
//         >
//           You are a Mighty Dame.
//         </Link>
//         <div className="mt-5 flex flex-col items-center justify-center">
//           <p className="mb-3 text-primary text-xs font-light text-center">
//             View your receipt here (or in your email):
//           </p>
//           <div className="flex flex-col items-center">
//             {receipts &&
//               receipts.map((receipt, i) => {
//                 return (
//                   <a
//                     className="text-primary text-xxs font-extralight text-center break-all"
//                     href={receipt}
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     {receipt}
//                   </a>
//                 )
//               })}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col items-center pb-10">
//       <div className="flex flex-col w-full max-w-5xl px-5">
//         <div className="pt-10 pb-8">
//           <h1 className="text-5xl font-light text-primary">Checkout</h1>
//           <Link to="/cart">
//             <div className="cursor-pointer flex items-center">
//               <FaLongArrowAltLeft className="mr-2 text-primary" />
//               <p className="text-primary font-light text-sm">
//                 Back to your cart
//               </p>
//             </div>
//           </Link>
//         </div>

//         <div className="flex flex-col">
//           {items &&
//             items.map((item) => (
//               <div key={item.id} className="">
//                 <div className="border-b border-accentsPrimary py-2">
//                   <div className="flex items-center">
//                     <img
//                       className="snav:w-16 nav:w-20 m-0 hidden snav:block"
//                       src={mightyDameWithText}
//                       alt={item.name}
//                     />
//                     <p className="m-0 pl-0 text-xs snav:text-sm sm:text-md snav:pl-2 sm:pl-10 text-primary">
//                       {`${item.name} (${item.quantity} at ${
//                         DENOMINATION + item.price
//                       } each)`}
//                     </p>
//                     <div className="flex flex-1 justify-end">
//                       <p className="m-0 pl-10 text-primary tracking-tighter font-normal">
//                         {DENOMINATION + item.price * item.quantity}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-1 flex-col nav:flex-row"
//           >
//             <div className="flex flex-1 pt-8 flex-col">
//               <div className="mt-4">
//                 <Input
//                   onChange={onChange}
//                   value={input.name}
//                   name="name"
//                   placeholder="Cardholder name"
//                   tabIndex="0"
//                 />
//                 <CardElement
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: "14px",
//                         color: theme === "dark" ? "#eee8df" : "#201d16",
//                         "::placeholder": {
//                           color: theme === "dark" ? "#eee8df" : "#201d16",
//                         },
//                       },
//                       invalid: {
//                         color: "#9e2146",
//                       },
//                     },
//                   }}
//                   className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline"
//                 />
//                 <Input
//                   onChange={onChange}
//                   value={input.email}
//                   name="email"
//                   placeholder="Email"
//                   tabIndex="0"
//                 />
//                 <Input
//                   onChange={onChange}
//                   value={input.street}
//                   name="street"
//                   placeholder="Street"
//                   tabIndex="0"
//                 />
//                 <Input
//                   onChange={onChange}
//                   value={input.city}
//                   name="city"
//                   placeholder="City"
//                   tabIndex="0"
//                 />
//                 <Input
//                   onChange={onChange}
//                   value={input.province}
//                   name="province"
//                   placeholder="Province"
//                   tabIndex="0"
//                 />
//                 <Input
//                   onChange={onChange}
//                   value={input.postal_code}
//                   name="postal_code"
//                   placeholder="Postal Code"
//                   tabIndex="0"
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col item-center self-end nav:self-start nav:ml-4 w-full max-w-72 nav:mt-8">
//               <div className="flex flex-col w-full mt-5">
//                 <div className="flex justify-between">
//                   <p className="text-sm text-primary">Subtotal</p>
//                   <p className="text-primary">{DENOMINATION + total}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p className="text-sm text-primary">Tax</p>
//                   <p className="text-primary">
//                     {DENOMINATION + calculateTax()}
//                   </p>
//                 </div>
//                 <div className="flex justify-between my-5">
//                   <p className="text-sm text-primary">Total</p>
//                   <p className="font-semibold tracking-tighter text-primary">
//                     {DENOMINATION + (total + calculateTax())}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 disabled={!stripe}
//                 className="text-center bg-secondary hover:bg-buttonSecondary text-primary font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
//                 tabIndex="0"
//               >
//                 Confirm Order
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }
