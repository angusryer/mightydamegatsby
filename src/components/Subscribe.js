import React from "react"
import gql from "graphql-tag"
import { useMutation } from "react-apollo"
import { v4 as uuid } from "uuid"
import { createUser } from "../graphql/mutations"
import { API, graphqlOperations } from 'aws-amplify'

const SUBSCRIBE_USER = gql(createUser)

const subscribe = async (e, subscribeUser) => {
  e.preventDefault()
  try {
    await subscribeUser({
      variables: {
        input: {
          id: uuid(),
          userType: "PUBLIC",
          email: e.target.email.value,
        },
      },
    })
    console.log("SUCCESS")
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
  // const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribeUser, { data }] = useMutation(SUBSCRIBE_USER)

  return (
    <form onSubmit={(e) => subscribe(e, subscribeUser)}>
      <input
        className="pd-3 border rounded"
        type="email"
        name="email"
        id="email"
      />
      <button className="pd-3" type="submit">
        Start Growing
      </button>
      {data && <span>Subscribed!</span>}
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
