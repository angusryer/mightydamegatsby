import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import { signOut } from "../utilities/auth"

export default function Profile({ user, path }) {
  // const [currentUser, setCurrentUser] = useState(state)

  // useEffect(() => {
  //   if (state !== null && state !== undefined) {
  //     console.log("PROFILE USEEFFECT ===> ", state)
  //     setCurrentUser(state)
  //   } else {
  //     // navigate('/login/')
  //   }
  // }, [currentUser])

  return (
    <section>
      <h2>Testing</h2>
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      <pre>{path}</pre>
    </section>
  )
}

