/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import Amplify from 'aws-amplify'
import config from './src/aws-exports'

import "./src/styles/site.css"
import "./src/layouts/layout.css"

Amplify.configure(config)