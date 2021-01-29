function getTaxRateByRegion(region) {
    switch (region) {
      case "ON":
        return 0.13
      default:
        return 0
    }
  }
  
  function calculateTotalWithTaxByRegion(items, region) {
    const itemsTotal = items.reduce((accumulatedValue, nextItem) => {
      return accumulatedValue + nextItem.price * nextItem.quantity
    }, 0)
    return Math.round(itemsTotal * (1 + getTaxRateByRegion(region)) * 100)
  }
  
  function resolveError(err) {
    switch (err.type) {
      case "StripeCardError":
        // A declined card error
        err.message // => e.g. "Your card's expiration year is invalid."
        break
      case "StripeRateLimitError":
        // Too many requests made to the API too quickly
        break
      case "StripeInvalidRequestError":
        // Invalid parameters were supplied to Stripe's API
        break
      case "StripeAPIError":
        // An error occurred internally with Stripe's API
        break
      case "StripeConnectionError":
        // Some kind of error occurred during the HTTPS communication
        break
      case "StripeAuthenticationError":
        // You probably used an incorrect API key
        break
      default:
        // Handle any other types of unexpected errors
        break
    }
  }
  
  module.exports = {
    getTaxRateByRegion,
    calculateTotalWithTaxByRegion,
    resolveError,
  }
  