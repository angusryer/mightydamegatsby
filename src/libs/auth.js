import { Auth } from "aws-amplify"

const responseError =
  "Shape of response object from auth service was unexpected."

export const getUserObject = (rawData) => {
  if (rawData instanceof Object && rawData.hasOwnProperty("username")) {
    const userObj = {
      id: rawData.attributes.sub,
      username: rawData.username,
      email: rawData.attributes.email,
      groups: rawData.signInUserSession.idToken.payload["cognito:groups"],
    }
    return userObj
  } else {
    return null
  }
}

export async function verifySignInStatus() {
  try {
    const data = await Auth.currentAuthenticatedUser()
    const userData = getUserObject(data)
    if (userData !== null) {
      return {
        success: true,
        response: userData,
      }
    } else {
      return {
        success: false,
        response: responseError,
      }
    }
  } catch (err) {
    return {
      success: false,
      response: err.message || "No user is currently signed in.",
    }
  }
}

export async function signIn(username, password) {
  try {
    const data = await Auth.signIn(username, password)
    const userData = getUserObject(data)
    if (userData !== null) {
      return {
        success: true,
        response: userData,
      }
    } else {
      return {
        success: false,
        response: responseError,
      }
    }
  } catch (err) {
    return {
      success: false,
      response: err.message,
    }
  }
}

export async function signUp(username, email, password) {
  await Auth.signUp({
    username,
    password,
    attributes: { email },
  })
    .then((_res) => {
      return {
        success: true,
        response:
          "We've sent a super secret code to your email: enter it to confirm your account!",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}

export async function confirmSignUp(username, authCode) {
  await Auth.confirmSignUp(username, authCode)
    .then((_res) => {
      return {
        success: true,
        response: "Great! Your account has been successfully confirmed.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}

export async function signOut() {
  try {
    const result = await Auth.signOut()
    if (result == undefined) {
      return {
        success: false,
        response: "Hmmn.. We can't seem to sign you out!",
      }
    }
    return {
      success: true,
      response: "You have been successfully signed out.",
    }
  } catch (err) {
    return {
      success: false,
      response: err.message,
    }
  }
}

export async function resendConfirmationCode(username) {
  await Auth.resendSignUp(username)
    .then((_res) => {
      return {
        success: true,
        response: "A new account confirmation code has been successfully sent.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}

export async function forgotPassword(email) {
  await Auth.forgotPassword(email)
    .then((_res) => {
      return {
        success: true,
        response:
          "If the email you provided is registered, a secret code has been sent to it.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}

export async function forgotPasswordSubmit(email, password, authCode) {
  await Auth.forgotPasswordSubmit(email, password, authCode)
    .then((_res) => {
      return {
        success: true,
        response:
          "Your password has been successfully reset! Please login with your new password.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}
