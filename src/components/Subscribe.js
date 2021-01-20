import React, { useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "react-apollo"
import { v4 as uuid } from "uuid"
import { createUser } from "../graphql/mutations"

const SUBSCRIBE_USER = gql(createUser)

function getFormattedDate(dateObject) {
  const month = dateObject.getUTCMonth() + 1 //months from 1-12
  const day = dateObject.getUTCDate()
  const year = dateObject.getUTCFullYear()
  return year + "/" + month + "/" + day
}

const FORM_URL = "https://app.convertkit.com/forms/1970875/subscriptions"

const subscribe = async (e, subscribeUser, setSubscribeSuccess, setEmail) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  try {
    const response = await fetch(FORM_URL, {
      method: "post",
      body: formData,
      headers: {
        accept: "application/json",
      },
    })
    setEmail("")
    const json = await response.json()

    if (json.status === "success" || 200) {
      setSubscribeSuccess(true)
      return
    }
  } catch (err) {
    setSubscribeSuccess(false)
    console.log("Couldn't subscribe user: ", err)
  }

  try {
    const data = await subscribeUser({
      variables: {
        input: {
          id: uuid(),
          cognitoId: "",
          firstName: "",
          lastName: "",
          userName: "",
          displayName: "",
          email: e.target.email.value,
          dateRegistered: "",
          userType: "PUBLIC",
          streetAddressOne: "",
          streetAddressTwo: "",
          city: "",
          provinceState: "",
          country: "",
          postalZip: "",
          phone: "",
          isSubscribed: true,
          dateSubscribed: getFormattedDate(new Date()),
          avatarUrl: "",
        },
      },
    })
    data && console.log("SUCCESS adding subscriber to DB")
  } catch (err) {
    console.log("Could not subscribe user ==> ", err)
  } finally {
    console.log("Subscription process complete.")
  }

  // double check the user does not already exist in Dynamo
  // create lambda that sends a SES email from amazon welcoming new user via a DynamoDB 'on new record' trigger
  // --- look into using the amazon SES template maker to see if it can access a filtered list of DynamoDB email records
}

export default function Subscribe(styles) {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribeUser] = useMutation(SUBSCRIBE_USER)
  const [email, setEmail] = useState("")

  return (
    <form
      className="flex flex-col justify-center mt-2 sm:max-w-md sm:flex-row"
      onSubmit={(e) =>
        subscribe(e, subscribeUser, setSubscribeSuccess, setEmail)
      }
      action={FORM_URL}
      method="post"
    >
      <input
        className="border-none rounded-sm outline-none text-xs w-full p-1"
        aria-label="Your email"
        placeholder="Your beautiful email"
        type="email"
        name="email_address"
        id="email_address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <button className="text-light p-1 text-xs w-28 mt-1 bg-violet bg-opacity-50 border-none rounded-sm sm:mt-0 sm:ml-2" type="submit">
        Start Learning
      </button>
      {subscribeSuccess && <span className="align-middle text-center pl-5 text-xs">Subscribed!</span>}
    </form>
  )
}
