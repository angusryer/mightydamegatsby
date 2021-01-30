import React, { useState } from "react"
import { Auth } from "aws-amplify"
import { useFormFields } from "../../libs/hooksLib"

export default function ForgotPassword({ toggleFormState, onError }) {
  const [form, setForm] = useFormFields({
    username: "",
    code: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [codeSent, setCodeSent] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const [isSendingCode, setIsSendingCode] = useState(false)

  const validateUsernameForm = () => {
    return form.username.length > 0
  }

  const validateResetForm = () => {
    return (
      form.code.length > 0 &&
      form.password.length > 0 &&
      form.password === form.confirmPassword
    )
  }

  const handleCodeSubmit = async (event) => {
    event.preventDefault()
    setIsSendingCode(true)
    const data = await Auth.forgotPassword(form.email)
    if (data.success) setCodeSent(true)
    else {
      onError(data.response.message)
      setIsSendingCode(false)
    }
  }

  const handleCodeConfirm = async (event) => {
    event.preventDefault()
    setIsConfirming(true)
    const data = await Auth.forgotPasswordSubmit(
      form.email,
      form.code,
      form.password
    )
    if (data.success) setConfirmed(true)
    else {
      onError(data.response.message)
      setIsConfirming(false)
    }
  }

  const renderRequestCodeForm = () => {
    return (
      <>
        <h3>
          Request a validation code to the email you signed up with by providing
          your username below:
        </h3>
        <form onSubmit={handleCodeSubmit}>
          <div id="username">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={form.username}
              onChange={setForm}
            />
          </div>
          <button type="submit" disabled={!validateUsernameForm()}>
            {isSendingCode ? "Sending confirmation..." : "Send Confirmation"}
          </button>
        </form>
      </>
    )
  }

  const renderConfirmationForm = () => {
    return (
      <form onSubmit={handleCodeConfirm}>
        <div id="code">
          <label htmlFor="code">Confirmation Code</label>
          <input
            id="code"
            type="tel"
            value={form.code}
            onChange={setForm}
            tabIndex="-1"
          />
          <p>
            Please check the email you signed up with for the reset confirmation
            code.
          </p>
        </div>
        <hr />
        <div id="password">
          <label htmlFor="password">New Password</label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={setForm}
            tabIndex="-2"
          />
        </div>
        <div id="confirmPassword">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={setForm}
            tabIndex="-3"
          />
        </div>
        <button type="submit" disabled={!validateResetForm()}>
          {isConfirming ? "Confirming..." : "Confirm"}
        </button>
      </form>
    )
  }

  const renderSuccessMessage = () => {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <span
            role="button"
            tabIndex="-10"
            onKeyDown={() => toggleFormState("signIn")}
            onclick={() => toggleFormState("signIn")}
          >
            Click here to login with your new credentials.
          </span>
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="ForgotPassword">
        {!codeSent
          ? renderRequestCodeForm()
          : !confirmed
          ? renderConfirmationForm()
          : renderSuccessMessage()}
      </div>
      <span
        role="button"
        tabIndex="-15"
        onKeyDown={() => toggleFormState("signUp")}
        onClick={() => toggleFormState("signUp")}
      >
        Sign Up
      </span>
      <span
        role="button"
        tabIndex="-20"
        onKeyDown={() => toggleFormState("signIn")}
        onClick={() => toggleFormState("signIn")}
      >
        Sign In
      </span>
    </>
  )
}
