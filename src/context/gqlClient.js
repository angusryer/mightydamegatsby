import awsmobile from "../aws-exports"
import ApolloClient from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import "isomorphic-fetch"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = createHttpLink({
  uri: awsmobile.aws_appsync_graphqlEndpoint,
})

const authLink = setContext((_gqlRequest, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key": awsmobile.aws_appsync_apiKey,
    },
  }
})

export const gqlClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
