import React from "react"
import { useFormFields } from "../../../utils/hooksLib"
import { signIn } from "../../utilities/auth"
import ButtonTwo from "../common/ButtonTwo"
import FunctionalLink from "./FunctionalLink"

export default function SignIn({ toggleFormState, onError }) {
  const [form, setForm] = useFormFields()

  const handleSubmit = async (formFields) => {
    const data = await signIn(formFields)
    if (!data.success) onError(data.response.message)
  }

  return (
    <div>
      <h3>Sign In</h3>
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
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={setForm}
                name="password"
                autoComplete="on"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex flex-col items-center justify-between">
              <ButtonTwo
                innerText="Sign In"
                callBack={() => handleSubmit(form)}
              />
              <ButtonTwo
                innerText="Sign Up"
                callBack={() => toggleFormState("signUp")}
              />
              <FunctionalLink
                innerText="Forgot your password?"
                callBack={() => toggleFormState("forgotPassword")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
