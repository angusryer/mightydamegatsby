import React, { useContext } from "react"
import { navigate } from "gatsby"
import { UserContext, AlertContext } from "../../context/mainContext"

export default function Profile() {
  const { username, userLogout } = useContext(UserContext)
  const {
    newAlert,
    types: { ERROR },
  } = useContext(AlertContext)

  const handleSignOut = async () => {
    try {
      userLogout()
    } catch (err) {
      newAlert(ERROR, err.message)
      return
    }
    navigate("/")
  }

  return (
    <section className="flex flex-col w-full max-w-5xl px-5 items-center">
      <div className="flex w-full px-5 min-w-68 justify-between mt-5 mb-10">
        <h2 className="text-lg my-7">Hi, {username}!</h2>
        <button
          type="button"
          className="focus:outline-none"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </button>
      </div>
    </section>
  )
}
