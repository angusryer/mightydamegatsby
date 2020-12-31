import React from "react";
import { createGlobalStyle } from "styled-components";
// import Amplify from "aws-amplify";

import Layout from "./layout/Layout";
import Pages from "./pages/Pages";
import frederickaTheGreat from "./assets/FrederickatheGreat-Regular.ttf";
// import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);


// import Analytics from '@aws-amplify/analytics';
// import Auth from '@aws-amplify/auth';'

// const amplifyConfig = {
//   Auth: {
//     identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
//     region: 'ca-central-1'
//   }
// }
// //Initialize Amplify
// Auth.configure(amplifyConfig);

// const analyticsConfig = {
//   AWSPinpoint: {
//         // Amazon Pinpoint App Client ID
//         appId: '4afe3ce441df40e6a017f3c54eb9cf6f',
//         // Amazon service region
//         region: 'ca-central-1',
//         mandatorySignIn: false,
//   }
// }

// Analytics.configure(analyticsConfig)

const App = () => (
	<>
		<GlobalStyle />
		<Layout>
			<Pages />
		</Layout>
	</>
);

export default App;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Fredericka the Great";
        src: url(${frederickaTheGreat}) format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
    }
    html, body, #root {
        height: 100%;
    }
    body, #root {
        margin: 0;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }
    main {
        flex: 1 0 auto;
        padding: 0;
    }
    ol {
        margin: 0;
        padding: 0;
    }
    li {
        margin: 0;
        list-style-type: none;
    }
    a {
        text-decoration: none;
    }
    h1, h2 {
        font-family: "Fredericka the Great"
    }
`;
