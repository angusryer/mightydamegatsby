import React, { useContext } from "react"
import { navigate } from "gatsby"
import { UserContext } from "../context/mainContext"

export default function ProtectedRoute({
  component: Component,
  location,
  ...rest
}) {
  const { isLoggedIn } = useContext(UserContext)
  if (!isLoggedIn && (location.pathname !== `/members/login` || location.pathname !== `/members`)) {
    navigate("/members/login")
    return null
  }
  return <Component {...rest} />
}
