import React from "react"
import { signOut } from "../utilities/auth"

export default function Profile({ user, path }) {
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
