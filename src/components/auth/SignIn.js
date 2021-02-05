import React, { useContext } from "react"
import { UserContext, AlertContext } from "../../context/mainContext"
import { useFormFields } from "../../libs/hooksLib"
import ButtonTwo from "../common/ButtonTwo"
import FunctionalLink from "./FunctionalLink"

// TODO Make form elements in to reusable components

export default function SignIn({ toggleFormState }) {
  const { userLogin } = useContext(UserContext)
  const {
    newAlert,
    types: { WARN, ERROR },
  } = useContext(AlertContext)
  const [form, setForm] = useFormFields()

  const handleSignIn = async () => {
    if (form?.username && form?.password) {
      const { success, response } = await userLogin(
        form.username,
        form.password
      )
      if (!success) {
        newAlert(ERROR, response)
      }
    } else {
      newAlert(WARN, "We'll need a bit more information to sign you in...")
    }
  }

  return (
    <>
      <h3 className="mb-4 text-primary">Sign In</h3>
      <div className="flex flex-1 justify-center">
        <div className="w-full max-w-144">
          <form className="bg-shadedPrimary shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-primary text-sm font-light mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onChange={setForm}
                name="username"
                autoComplete="on"
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-primary text-sm font-light mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                onChange={setForm}
                name="password"
                autoComplete="on"
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex flex-col items-center justify-between">
              <ButtonTwo innerText="Sign In" callBack={() => handleSignIn()} />
              <ButtonTwo
                innerText="Sign Up"
                callBack={() => toggleFormState("signUp")}
              />
              <FunctionalLink
                classes="p-2 mt-6 content-center text-primary hover:text-buttonSecondary cursor-pointer block font-light text-sm"
                innerText="Forgot your password?"
                callBack={() => toggleFormState("forgotPassword")}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
