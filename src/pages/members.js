import React from "react"
import { Router } from "@reach/router"
import LoginView from "../components/auth/LoginView"
import Profile from "../protected/Profile"
import ProtectedRoute from "../protected/ProtectedRoute"
import { isBrowser } from "../libs/envFsLib"

export default function AuthRouter() {
  if (isBrowser) {
    if (
      window.location.pathname === "/members" ||
      window.location.pathname === "/members/"
    )
      window.location.pathname = "/members/login"
  }
  return (
    <Router basepath="/members">
      <LoginView path="/login" />
      <ProtectedRoute path="/profile" component={Profile} />
    </Router>
  )
}
