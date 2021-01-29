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
    const response = await Auth.currentAuthenticatedUser()
    const userData = getUserObject(response)
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

export async function signIn(username, password) {
  try {
    const data = await Auth.signIn(username, password)
    const userData = getUserObject(data)
    console.log(userData)
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
    .then((res) => {
      const userData = getUserObject(res)
      if (userData !== null) {
        return {
          success: true,
          response: getUserObject(res),
        }
      } else {
        return {
          success: false,
          response: responseError,
        }
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
    .then((res) => {
      const userData = getUserObject(res)
      if (userData !== null) {
        return {
          success: true,
          response: getUserObject(res),
        }
      } else {
        return {
          success: false,
          response: responseError,
        }
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
  await Auth.signOut()
    .then((_res) => {
      return {
        success: true,
        response: "You have been successfully signed out.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}

export async function resendConfirmationCode(username) {
  await Auth.resendSignUp(username)
    .then((_res) => {
      return {
        success: true,
        response: "Confirmation code has been successfully re-sent.",
      }
    })
    .catch((err) => {
      return {
        success: false,
        response: err.message,
      }
    })
}
