import React from "react"
import { Router } from "@reach/router"
import LoginView from "../components/auth/LoginView"
import Profile from "../protected/Profile"
import ProtectedRoute from "../protected/ProtectedRoute"

export default function AuthRouter() {
  if (
    window.location.pathname === "/members" ||
    window.location.pathname === "/members/"
  )
    window.location.pathname = "/members/login"
  return (
    <Router basepath="/members">
      <LoginView path="/login" />
      <ProtectedRoute path="/profile" component={Profile} />
    </Router>
  )
}
