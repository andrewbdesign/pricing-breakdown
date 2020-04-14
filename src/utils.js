export const toDecimal = amount => {
  return amount.toFixed(2)
}

export const addCommas = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
