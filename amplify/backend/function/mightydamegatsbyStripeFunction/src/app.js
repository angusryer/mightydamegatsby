// https://stripe.com/docs/payments/without-card-authentication
const stripe = require("stripe")(process.env.SK_TEST)

exports.handler = async (event, context, callback) => {
  console.log("THE EVENT ===> ", event)
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: "invalid http method",
      }),
    }
  }

  const order = JSON.parse(event.body)

  const getTaxRate = (provinceCode) => {
    switch (provinceCode) {
      case "ON":
        return 0.13
      default:
        return 0
    }
  }

  const calculateOrderAmount = (items, provinceCode) => {
    const itemsTotal = items.reduce((accumulatedValue, nextItem) => {
      return accumulatedValue + nextItem.price * nextItem.quantity
    }, 0)
    return Math.round(itemsTotal * (1 + getTaxRate(provinceCode)) * 100)
  }

  try {
    const intent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(order.items, order.address.state),
      currency: order.currency,
      payment_method: order.payment_method_id,

      // A PaymentIntent can be confirmed some time after creation,
      // but here we want to confirm (collect payment) immediately.
      confirm: true,

      // If the payment requires any follow-up actions from the
      // customer, like two-factor authentication, Stripe will error
      // and you will need to prompt them for a new payment method.
      error_on_requires_action: true,
    })

    if (intent.status === "succeeded") {
      // This creates a new Customer and attaches the PaymentMethod in one API call.
      const customers = await stripe.customers.list({ email: order.email })
      let existingCustomer
      let customer
      if (customers.length > 0) {
        existingCustomer = customers.find((cust) => cust.email === order.email)
      }
      if (customers.length == 0) {
        customer = await stripe.customers.create({
          payment_method: intent.payment_method,
          email: order.email,
          address: order.address,
        })
      }
      await stripe.paymentMethods.attach(intent.payment_method, {
        customer: customer.id || existingCustomer.id,
      })
      // Handle post-payment fulfillment
      console.log(
        `Created Payment: ${intent.id} for Customer: ${
          customer.id || existingCustomer.id
        }`
      )
      // Now ship those goodies
      // await inventoryAPI.ship(order)

      const body = {
        client_secret: intent.client_secret,
        receipt_url: intent.charges.data[0].receipt_url,
      }

      const response = {
        statusCode: 200,
        body: JSON.stringify(body),
        isBase64Encoded: false,
      }

      // return response;
      callback(null, response)
    } else {
      // Any other status would be unexpected, so error
      console.log({ error: "Unexpected status " + intent.status })
      const response = {
        statusCode: 400,
        body: JSON.stringify({ error: intent.status }),
        isBase64Encoded: false,
      }
      // return response;
      callback(response, null)
    }
  } catch (e) {
    if (e.type === "StripeCardError") {
      const response = {
        statusCode: 400,
        body: JSON.stringify(e),
        isBase64Encoded: false,
      }
      // Display error to customer
      console.log(JSON.stringify(e))
      // return response;
      callback(response, null)
    } else {
      // Something else happened
      console.log(JSON.stringify(e.type))
      const response = {
        statusCode: 400,
        body: JSON.stringify(e.type),
        isBase64Encoded: false,
      }
      // return response;
      callback(response, null)
    }
  }
}
