import React, { useContext } from "react"
import { AlertContext } from "../../context/mainContext"
import { useFormFields } from "../../libs/hooksLib"
import { confirmSignUp, resendConfirmationCode } from "../../libs/auth"

export default function ConfirmSignUp({ toggleFormState }) {
  const {
    newAlert,
    types: { ERROR, SUCCESS },
  } = useContext(AlertContext)
  const [form, setForm] = useFormFields()

  const handleConfirm = async ({ username, authcode }) => {
    const { success, response } = await confirmSignUp(username, authcode)
    if (success) toggleFormState("signIn")
    else newAlert(ERROR, response)
  }

  const resendCode = async ({ username }) => {
    const { success, response } = await resendConfirmationCode(username)
    if (success) newAlert(SUCCESS, response)
    else newAlert(ERROR, response)
  }

  return (
    <div>
      <h3>Sign Up</h3>
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-144">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={setForm}
                name="username"
                autoComplete="on"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="authcode"
              >
                Authentication Code
              </label>
              <input
                onChange={setForm}
                name="authcode"
                autoComplete="on"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="authcode"
                type="authcode"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleConfirm(form)}
                className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Confirm Sign Up
              </button>
              <button
                onClick={() => resendCode(form)}
                className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Resend Confirmation Code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
