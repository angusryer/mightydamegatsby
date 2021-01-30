
const isLocal = process.env.NODE_ENV === "development";

export function logError(error, errorInfo = null) {
    if (isLocal) {
      return;
    }
    console.error(error, errorInfo)
  }

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();
  
    // Auth errors
    if (!(error instanceof Error) && error.message) {
      errorInfo = error;
      message = error.message;
      error = new Error(message);
      // API errors
    } else if (error.config && error.config.url) {
      errorInfo.url = error.config.url;
    }
  
    logError(error, errorInfo);
  
    alert(message);
  }

  
export function resolveStripeError(err) {
  switch (err.type) {
    case "StripeCardError":
      return `Your card has been declined for the following reason: ${err.message}`
    case "StripeRateLimitError":
      return `Too many requests have been made to the API endpoint: ${err.message}`
    case "StripeInvalidRequestError":
      return `Invalid parameters were supplied to Stripe's API: ${err.message}`
    case "StripeAPIError":
      return `An error occurred internally with Stripe's API: ${err.message}`
    case "StripeConnectionError":
      return `Some kind of error occurred during the HTTPS communication: ${err.message}`
    case "StripeAuthenticationError":
      return `You may have used an incorrect API key: ${err.message}`
    default:
      return `Unexpected error: ${err.message}`
  }
}