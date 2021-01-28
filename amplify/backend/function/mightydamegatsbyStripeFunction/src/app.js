// https://stripe.com/docs/payments/without-card-authentication
const stripe = require("stripe")(process.env.SK_TEST)
const { calculateOrderAmount } = require("./lib")

exports.handler = async (event, _context, callback) => {
  // ensure we are receiving a POST request method
  if (!event.body || event.httpMethod !== "POST") {
    callback(err, {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalic HTTP request method received." }),
    })
  }

  const {
    eventCartItems = items,
    eventAddress = address,
    eventPaymentMethodId = payment_method_id,
    eventEmail = email,
    eventCurrency = currency,
  } = JSON.parse(event.body)

  let paymentIntent, customerList, existingCustomer, newCustomer, chargeReceipts

  const createIntentConfig = {
    amount: calculateOrderAmount(eventCartItems, eventAddress.state),
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
      body: JSON.stringify({ error: err.message }),
    })
  }

  if (paymentIntent.status === "succeeded") {
    try {
      customerList = await stripe.customers.list({ email: eventEmail })
    } catch (err) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ error: err.message }),
      })
    }
  }

  if (customerList.length > 0) {
    existingCustomer = customerList.find(
      (customer) => customer.email === eventEmail
    )
  }

  if (customerList.length == 0) {
    try {
      newCustomer = await stripe.customers.create({
        payment_method: paymentIntent.payment_method,
        email: eventEmail,
        address: eventAddress,
      })
    } catch (err) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ error: err.message }),
      })
    }
  }

  try {
    await stripe.paymentMethods.attach(paymentIntent.payment_method, {
      customer: newCustomer.id || existingCustomer.id,
    })
  } catch (err) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: err.message }),
    })
  }

  // everything has executed successfully so far, so return
  // a 200 response to client with receipt urls and status
  if (paymentIntent && paymentIntent.charges && paymentIntent.charges.data) {
    chargeReceipts = paymentIntent.charges.data.map((chargeItemData) => {
      return chargeItemData.receipt_url
    })
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      receipts: chargeReceipts,
    }),
  })
}
