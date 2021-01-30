import React from "react"
import { useFormFields } from "../../libs/hooksLib"
import { confirmSignUp } from "../../libs/auth"

export default function ConfirmSignUp({ setError, setUser }) {
  const [form, setForm] = useFormFields()

  const handleSubmit = async (formFields) => {
    const { success, response } = await confirmSignUp(formFields)
    if (success) setUser(response)
    else setError(response)
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
                onClick={() => handleSubmit(form)}
                className="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Confirm Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
