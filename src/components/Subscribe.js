import React, { useState } from "react"
// import * as mutations from "../graphql/mutations"
// import { Amplify } from "aws-amplify"
// import axios from "axios"
// import config from "../aws-exports"

// const subscribeUser = mutations.createUser(graphql`
//   mutation {
//     users {
//       data {
//         id
//       }
//     }
//   }
// `

const subscribe = async (e, setSubscribeSuccess) => {
  e.preventDefault()

  // try {
  //   const subscribeResult = await axios({
  //     url: config.aws_appsync_graphqlEndpoint,
  //     method: "post",
  //     headers: {
  //       "x-api-key": config.aws_appsync_apiKey,
  //     },
  //     data: {
  //       mutation: print(subscribeUser),
  //     },
  //   })
  //   console.log("User successfully subscribed ==> ", subscribeResult)
  //   setSubscribeSuccess()
  // } catch (err) {
  //   console.log("Could not subscribe user ==> ", err)
  // }

  // modify graphql schema to suit changes from my work on the admin side
  // send user email to DynamoDB (via API?), and assign that record 'true' for isSubscribed
  // double check the user does not already exist
  // create lambda that sends a SES email from amazon welcoming new user via a DynamoDB 'on new record' trigger
  // --- look into using the amazon SES template maker to see if it can access a filtered list of DynamoDB email records
}

export default function Subscribe() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  return (
    <form onSubmit={(e) => subscribe(e, setSubscribeSuccess)}>
      <input
        className="pd-3 border rounded"
        type="email"
        name="email"
        id="email"
      />
      <button className="pd-3" type="submit">
        Start Growing
      </button>
      {subscribeSuccess && <span>Subscribed!</span>}
    </form>
  )
}
