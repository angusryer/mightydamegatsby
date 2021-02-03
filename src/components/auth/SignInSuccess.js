import React from "react"
import ButtonTwo from "../common/ButtonTwo"

export default function SignInSuccess({ toggleFormState }) {
  return (
    <>
      <p className="font-light">Nice. Your password has been reset.</p>
      <ButtonTwo
        innerText="Log in with your new credentials"
        callBack={() => toggleFormState("signIn")}
      />
    </>
  )
}
