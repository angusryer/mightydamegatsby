import React, { useState } from "react"
import { Amplify } from "aws-amplify"

const subscribe = (e, setSubscribeSuccess) => {
  e.preventDefault()

  // modify graphql schema to suit changes from my work on the admin side
  // send user email to DynamoDB (via API?), and assign that record 'true' for isSubscribed
  // double check the user does not already exist
  // create lambda that sends a SES email from amazon welcoming new user via a DynamoDB 'on new record' trigger
  // --- look into using the amazon SES template maker to see if it can access a filtered list of DynamoDB email records

  const email = e.target.email.value
  
}

export default function Subscribe() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  return (
    <form onSubmit={(e) => subscribe(e, setSubscribeSuccess)}>
      <input type="email" name="email" id="email" />
      <button type="submit">Start Growing</button>
      {subscribeSuccess && <span>Subscribed!</span>}
    </form>
  )
}
