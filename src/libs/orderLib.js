export function getTaxRateByRegion(region) {
  switch (region) {
    case "ON":
      return 0.13
    default:
      return 0
  }
}

export function calculateTotalWithTaxByRegion(items, region) {
  const itemsTotal = items.reduce((accumulatedValue, nextItem) => {
    return accumulatedValue + nextItem.price * nextItem.quantity
  }, 0)
  return Math.round(itemsTotal * (1 + getTaxRateByRegion(region)) * 100)
}

export function calculateTotal(cart) {
  const total = cart.reduce((cumulative, next) => {
    cumulative = cumulative + JSON.parse(next.price) * JSON.parse(next.quantity)
    return cumulative
  }, 0)
  return total
}
