/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Amplify from "aws-amplify"
import awsmobile from "./src/aws-exports"
import { ApolloProvider } from "react-apollo"
import { ContextProvider } from "./src/context/mainContext"
import { gqlClient } from "./src/context/gqlClient"
import "./src/layouts/layout.css"
import "./src/styles/site.css"

Amplify.configure(awsmobile)

export const wrapRootElement = ({ element }) => (
  <ContextProvider>
    <ApolloProvider client={gqlClient}>{element}</ApolloProvider>
  </ContextProvider>
)
