import React, { useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "react-apollo"
import { v4 as uuid } from "uuid"
import { createUser } from "../graphql/mutations"
// import { API, graphqlOperations } from 'aws-amplify'

const SUBSCRIBE_USER = gql(createUser)

function getFormattedDate(dateObject) {
  const month = dateObject.getUTCMonth() + 1 //months from 1-12
  const day = dateObject.getUTCDate()
  const year = dateObject.getUTCFullYear()
  return year + "/" + month + "/" + day
}

const subscribe = async (e, subscribeUser, setSubscribeSuccess) => {
  e.preventDefault()
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
    data && setSubscribeSuccess(true)
  } catch (err) {
    console.log("Could not subscribe user ==> ", err)
  } finally {
    console.log("Subscription process complete.")
  }

  // modify graphql schema to suit changes from my work on the admin side
  // send user email to DynamoDB (via API?), and assign that record 'true' for isSubscribed
  // double check the user does not already exist
  // create lambda that sends a SES email from amazon welcoming new user via a DynamoDB 'on new record' trigger
  // --- look into using the amazon SES template maker to see if it can access a filtered list of DynamoDB email records
}

export default function Subscribe() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribeUser] = useMutation(SUBSCRIBE_USER)

  return (
    <form onSubmit={(e) => subscribe(e, subscribeUser, setSubscribeSuccess)}>
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

// const createUserMutation = graphql`
//   mutation {
//     email {
//       data {
//         id
//         rating
//         title
//         comment
//         ownerId
//       }
//     }
//   }
// `
