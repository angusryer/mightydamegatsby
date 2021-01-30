import React, { useState } from "react"
import { signOut } from "../libs/auth"

export default function Profile({ state: { user, setUser } }) {
  const [error, setError] = useState("")

  console.log("PROFILE ==> ", user)

  const handleSignOut = async () => {
    const { success, response } = await signOut()
    if (success) setUser(null)
    else setError(response)
  }

  return (
    <section className="flex flex-col w-full max-w-5xl px-5 items-center">
      <span>{error}</span>
      <div className="flex justify-between mt-5 mb-10">
        <h2 className="font-vibes text-lg my-7">Hi, {user.username}!</h2>
        <button type="button" onClick={() => handleSignOut()}>
          Sign Out
        </button>
      </div>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  )
}
