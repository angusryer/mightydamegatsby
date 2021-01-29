const stripe = require("stripe")(process.env.SK)
const { calculateTotalWithTaxByRegion } = require("./lib")

exports.handler = async (event, context, callback) => {
  if (!event.body || event.httpMethod !== "POST") {
    callback(null, {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ error: "Invalid HTTP request method received." }),
    })
    context.done()
  }

  const headers = {
    "Access-Control-Allow-Headers":
      "Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Origin": "*",
  }

  const {
    items: eventCartItems,
    address: eventAddress,
    payment_method_id: eventPaymentMethodId,
    email: eventEmail,
    currency: eventCurrency,
  } = JSON.parse(event.body)

  let paymentIntent, chargeReceipts

  const createIntentConfig = {
    amount: calculateTotalWithTaxByRegion(eventCartItems, eventAddress.state),
    currency: eventCurrency,
    payment_method: eventPaymentMethodId,
    confirm: true, // immediately confirm and collect payment
    error_on_requires_action: true, // if the customer needs multifactor, then throw error
  }

  try {
    paymentIntent = await stripe.paymentIntents.create(createIntentConfig)
  } catch (err) {
    callback(null, {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ error: err.message }),
    })
    context.done()
  }

  if (paymentIntent.status === "succeeded") {
    if (paymentIntent && paymentIntent.charges && paymentIntent.charges.data) {
      chargeReceipts = paymentIntent.charges.data.map((chargeItemData) => {
        return chargeItemData.receipt_url
      })
    }
  }

  callback(null, {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify({
      success: true,
      receipts: chargeReceipts,
      receipt_email: eventEmail
    }),
  })
  context.done()
}
