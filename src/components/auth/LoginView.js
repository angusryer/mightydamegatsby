import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../../context/mainContext"
import SignUp from "./SignUp"
import ConfirmSignUp from "./ConfirmSignUp"
import SignIn from "./SignIn"
import ForgotPassword from "./ForgotPassword"
import { navigate } from "gatsby"

// TODO Factor out the business logic from this component

export default function LoginView() {
  const { isLoggedIn } = useContext(UserContext)
  const [formState, setFormState] = useState("signIn")

  useEffect(() => {
    handleLoginState()
  })

  const handleLoginState = async () => {
    const loggedInStatus = await isLoggedIn()
    if (loggedInStatus) navigate("/members/profile")
  }

  const toggleFormState = (newFormState) => {
    setFormState(newFormState)
  }

  const renderForm = (formState) => {
    switch (formState) {
      case "signUp":
        return <SignUp toggleFormState={toggleFormState} />

      case "confirmSignUp":
        return <ConfirmSignUp toggleFormState={toggleFormState} />

      case "signIn":
        return <SignIn toggleFormState={toggleFormState} />

      case "forgotPassword":
        return <ForgotPassword toggleFormState={toggleFormState} />

      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col items-center pt-5 ">
      <div className="max-w-5xl flex flex-col pt-5">
        {renderForm(formState)}
      </div>
    </div>
  )
}
