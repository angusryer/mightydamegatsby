import React, { useContext } from "react"
import { AlertContext } from "../../context/mainContext"
import { signUp } from "../../libs/auth"
import { useFormFields } from "../../libs/hooksLib"
import ButtonTwo from "../common/ButtonTwo"
import FunctionalLink from "./FunctionalLink"

export default function SignUp({ toggleFormState }) {
  const {
    newAlert,
    types: { ERROR, SUCCESS },
  } = useContext(AlertContext)
  const [form, setForm] = useFormFields()

  const isInputPresent = (form) => {
    let check = true
    if (!form) return false
    const formValues = Object.values(form)
    for (let i = 0; i < formValues.length; i++) {
      check = check & !!formValues[i]
    }
    return check
  }

  const handleSignUp = async (form) => {
    if (isInputPresent(form)) {
      const { username, email, password } = form
      const { success, response } = await signUp(username, email, password)
      if (success) {
        newAlert(SUCCESS, response)
        toggleFormState("confirmSignUp")
      } else {
        newAlert(ERROR, response)
      }
    } else {
      newAlert(ERROR, "Make sure you fill out every field below!")
    }
  }

  return (
    <>
      <h3 className="mb-4 text-primary">Sign Up</h3>
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
                htmlFor="email"
              >
                Email
              </label>
              <input
                onChange={setForm}
                name="email"
                autoComplete="on"
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Email address"
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
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-primary font-light leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <ButtonTwo
                innerText="Sign Up"
                callBack={() => handleSignUp(form)}
              />
              <FunctionalLink
                classes="p-2 pl-3 mt-0 content-center text-primary hover:text-buttonSecondary cursor-pointer block font-light text-sm"
                innerText="Already have an account?"
                callBack={() => toggleFormState("signIn")}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
