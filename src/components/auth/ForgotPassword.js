import React, { useState, useContext } from "react"
import { forgotPassword, forgotPasswordSubmit } from "../../libs/auth"
import { AlertContext } from "../../context/mainContext"
import { useFormFields } from "../../libs/hooksLib"
import ButtonTwo from "../common/ButtonTwo"
import SignInSuccess from "./SignInSuccess"

export default function ForgotPassword({ toggleFormState }) {
  const {
    newAlert,
    types: { ERROR },
  } = useContext(AlertContext)
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

  const validateResetForm = () => {
    return (
      form.code.length > 0 &&
      form.password.length > 0 &&
      form.password === form.confirmPassword
    )
  }

  const sendAuthCode = async (event) => {
    event.preventDefault()
    setIsSendingCode(true)
    const { success, response } = await forgotPassword(form.username)
    if (success) setCodeSent(true)
    else {
      newAlert(ERROR, response)
      setIsSendingCode(false)
    }
  }

  const confirmAuthCode = async (event) => {
    event.preventDefault()
    setIsConfirming(true)
    const { success, response } = await forgotPasswordSubmit(
      form.email,
      form.password,
      form.code
    )
    if (success) setConfirmed(true)
    else {
      newAlert(ERROR, response)
      setIsConfirming(false)
    }
  }

  const renderRequestCodeForm = () => {
    return (
      <div className="flex flex-col items-center justify-start w-1/2 min-w-128 max-w-5xl">
        <h3 className="mb-4 w-full text-center font-light text-primary">
          Request a validation code to the email you signed up with by providing
          your <span className="font-bold">user name</span> below:
        </h3>
        <form
          onSubmit={confirmAuthCode}
          className="bg-shadedPrimary shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div id="username" className="mb-4">
            <label
              htmlFor="username"
              className="block text-primary text-sm font-light mb-2"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="username"
              value={form.username}
              onChange={setForm}
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <ButtonTwo
            type="submit"
            callBack={sendAuthCode}
            innerText={
              isSendingCode ? "Sending confirmation..." : "Send Confirmation"
            }
          />
        </form>
      </div>
    )
  }

  const renderConfirmationForm = () => {
    return (
      <form
        onSubmit={confirmAuthCode}
        className="bg-overlaySecondary shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div id="code">
          <label htmlFor="code">Confirmation Code</label>
          <input
            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light bg-formPrimary leading-tight focus:outline-none focus:shadow-outline"
            id="code"
            type="tel"
            value={form.code}
            onChange={setForm}
            tabIndex="-1"
          />
          <p className="font-light my-4">
            Please check the email you signed up with for the reset confirmation
            code.
          </p>
        </div>
        <hr />
        <div id="password">
          <label htmlFor="password">New Password</label>
          <input
            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light bg-formPrimary leading-tight focus:outline-none focus:shadow-outline"
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
            className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light bg-formPrimary leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={setForm}
            tabIndex="-3"
          />
        </div>
        <button
          type="submit"
          disabled={!validateResetForm()}
          className="my-3 w-56 bg-overlayPrimary font-light text-secondary hover:text-primary hover:bg-overlaySecondary border px-5 whitespace-nowrap text-center rounded-lg focus:outline-none focus:shadow-outline"
        >
          {isConfirming ? "Confirming..." : "Confirm"}
        </button>
      </form>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-5xl min-w-104 px-5">
      <div className="flex flex-col justify-center items-center">
        {!codeSent ? (
          renderRequestCodeForm()
        ) : !confirmed ? (
          renderConfirmationForm()
        ) : (
          <SignInSuccess toggleFormState={toggleFormState} />
        )}
      </div>
      <ButtonTwo
        innerText="Sign Up"
        callBack={() => toggleFormState("signUp")}
      />
      <ButtonTwo
        innerText="Sign In"
        callBack={() => toggleFormState("signIn")}
      />
    </div>
  )
}
