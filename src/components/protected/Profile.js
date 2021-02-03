import React, { useContext } from "react"
import { navigate } from "gatsby"
import { UserContext, AlertContext } from "../../context/mainContext"
import ButtonTwo from "../common/ButtonTwo"

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
      <div className="flex w-full items-center px-5 min-w-68 justify-between mt-5 mb-10">
        <h2 className="text-xl my-7 text-primary">Hi, {username}!</h2>
        <ButtonTwo innerText="Sign Out" callBack={handleSignOut} />
      </div>
      <section>
        <div></div>
        <div></div>
      </section>
    </section>
  )
}
