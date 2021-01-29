import React, { useState, useEffect } from "react"
import { Router } from "@reach/router"
import { verifySignInStatus } from "../utilities/auth"
import { isBrowser } from "../../utils/helpers"
import SignUp from "../components/auth/SignUp"
import ConfirmSignUp from "../components/auth/ConfirmSignUp"
import SignIn from "../components/auth/SignIn"
import ForgotPassword from "../components/auth/ForgotPassword"
import Profile from "./profile"
import { navigate } from "gatsby"

function LoginForm({ error, setUser, setError }) {
  const [formState, setFormState] = useState("signIn")

  const toggleFormState = (newFormState) => {
    setFormState(newFormState)
    setError(null)
  }

  const renderForm = (formState) => {
    switch (formState) {
      case "signUp":
        return (
          <SignUp
            toggleFormState={toggleFormState}
            setUser={setUser}
            setError={setError}
          />
        )

      case "confirmSignUp":
        return <ConfirmSignUp setError={setError} setUser={setUser} />

      case "signIn":
        return (
          <SignIn
            toggleFormState={toggleFormState}
            setUser={setUser}
            setError={setError}
          />
        )

      case "forgotPassword":
        return (
          <ForgotPassword
            toggleFormState={toggleFormState}
            setError={setError}
          />
        )

      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col items-center pt-5 ">
      <div className="max-w-5xl flex flex-col pt-5">
        <span>{error}</span>
        {renderForm(formState)}
      </div>
    </div>
  )
}

export default function Login() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState("")

  const initialUserCheck = async () => {
    const { success, response } = await verifySignInStatus()
    if (success) setUser(response)
  }

  useEffect(() => {
    initialUserCheck()
  }, [])

  useEffect(() => {
    if (user !== null && isBrowser) navigate("/profile")
    else navigate("/login")
  }, [user])

  return (
    <Router>
      <LoginForm
        path="/login"
        error={error}
        setError={setError}
        setUser={setUser}
      />
      <Profile path="/profile" user={user} />
    </Router>
  )
}
