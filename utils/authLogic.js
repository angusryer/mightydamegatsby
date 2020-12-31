// import {Auth} from 'aws-amplify';
// import awsConfig from '../aws-exports';

// // EMAIL authentication functions

// export async function signUp() {
//     try {
//         const { user } = await Auth.signUp({
//             username,
//             password,
//             attributes: {
//                 email,          // optional
//                 phone_number,   // optional - E.164 number convention
//                 // other custom attributes 
//             }
//         });
//         console.log(user);
//     } catch (error) {
//         console.log('error signing up:', error);
//     }
// }

// export async function confirmSignUp() {
//     try {
//       await Auth.confirmSignUp(username, code);
//     } catch (error) {
//         console.log('error confirming sign up', error);
//     }
// }

// export async function signIn() {
//     try {
//         const user = await Auth.signIn(username, password);
//     } catch (error) {
//         console.log('error signing in', error);
//     }
// }

// export async function resendConfirmationCode() {
//     try {
//         await Auth.resendSignUp(username);
//         console.log('code resent successfully');
//     } catch (err) {
//         console.log('error resending code: ', err);
//     }
// }

// export async function signOut() {
//     try {
//         await Auth.signOut();
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
// }


// // SOCIAL Federation auth functions
// // https://docs.amplify.aws/lib/auth/social/q/platform/js#amazon-cognito-user-pool-setup

// const isLocalhost = Boolean(
//     window.location.hostname === "localhost" ||
//       // [::1] is the IPv6 localhost address.
//       window.location.hostname === "[::1]" ||
//       // 127.0.0.1/8 is considered localhost for IPv4.
//       window.location.hostname.match(
//         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//       )
//   );
  
//   // Assuming you have two redirect URIs, and the first is for localhost and second is for production
//   const [
//     localRedirectSignIn,
//     productionRedirectSignIn,
//   ] = awsConfig.oauth.redirectSignIn.split(",");
  
//   const [
//     localRedirectSignOut,
//     productionRedirectSignOut,
//   ] = awsConfig.oauth.redirectSignOut.split(",");
  
//   const updatedAwsConfig = {
//     ...awsConfig,
//     oauth: {
//       ...awsConfig.oauth,
//       redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
//       redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
//     }
//   }
  
//   Amplify.configure(updatedAwsConfig);
