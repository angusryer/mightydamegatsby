import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Router } from "@reach/router"
import { verifySignInStatus, signOut } from "../utilities/auth"
import { isBrowser } from "../../utils/helpers"
import SignUp from "../components/auth/SignUp"
import ConfirmSignUp from "../components/auth/ConfirmSignUp"
import SignIn from "../components/auth/SignIn"
import ForgotPassword from "../components/auth/ForgotPassword"
import Profile from "../protected/profile"

function LoginForm() {
  const [formState, setFormState] = useState("signIn")
  const [formError, setFormError] = useState(null)

  const toggleFormState = (newFormState) => {
    setFormState(newFormState)
    setFormError(null)
  }

  const renderForm = (formState) => {
    switch (formState) {
      case "signUp":
        return (
          <SignUp toggleFormState={toggleFormState} onError={setFormError} />
        )

      case "confirmSignUp":
        return <ConfirmSignUp onError={setFormError} />

      case "signIn":
        return (
          <SignIn toggleFormState={toggleFormState} onError={setFormError} />
        )

      case "forgotPassword":
        return (
          <ForgotPassword
            toggleFormState={toggleFormState}
            onError={setFormError}
          />
        )

      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col items-center pt-5 ">
      <div className="max-w-5xl flex flex-col pt-5">
        <span>{formError}</span>
        {renderForm(formState)}
      </div>
    </div>
  )
}

export default function Login() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const initialUserCheck = async () => {
      const data = await verifySignInStatus()
      setUser(data)
    }
    initialUserCheck()
  }, [])

  return (
    <Router basepath="/">
      {user instanceof Object && isBrowser ? (
        <Profile path="profile" user={user} />
      ) : (
        <LoginForm path="login" />
      )}
    </Router>
  )
}
