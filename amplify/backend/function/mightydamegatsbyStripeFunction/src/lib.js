export const getTaxRate = (provinceCode) => {
  switch (provinceCode) {
    case "ON":
      return 0.13
    default:
      return 0
  }
}

export const calculateOrderAmount = (items, provinceCode) => {
  const itemsTotal = items.reduce((accumulatedValue, nextItem) => {
    return accumulatedValue + nextItem.price * nextItem.quantity
  }, 0)
  return Math.round(itemsTotal * (1 + getTaxRate(provinceCode)) * 100)
}
