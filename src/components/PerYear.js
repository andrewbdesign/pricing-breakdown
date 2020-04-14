import React, { useState } from 'react'
import { toDecimal, addCommas, removeCommasOrCurrency } from '../utils'

function PerYear() {

  const [amount, setAmount] = useState(0)

  const onChange = e => {
    const value = removeCommasOrCurrency(e.target.value)
    const result = Number(value)
    if (typeof result === 'number' && !isNaN(result)) {
      setAmount(result)
    } else {
      setAmount(0)
    }
  }

  const perQuarter = amount => {
    return toDecimal(amount / 4)
  }

  const perMonth = amount => {
    return toDecimal(amount / 12)
  }

  const perFortnight = amount => {
    return toDecimal(amount / 26)
  }

  const perWeek = amount => {
    return toDecimal(amount / 52)
  }
  
  const perDay = amount => {
    return toDecimal(amount / 365)
  }

  return (
    <tr>
      <td><input placeholder={0} onChange={onChange} /></td>
      <td>${addCommas(perQuarter(amount))}</td>
      <td>${addCommas(perMonth(amount))}</td>
      <td>${addCommas(perFortnight(amount))}</td>
      <td>${addCommas(perWeek(amount))}</td>
      <td>${addCommas(perDay(amount))}</td>
    </tr>
  )
}

export default PerYear;