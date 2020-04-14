import React, { useState } from 'react'
import { toDecimal, addCommas, removeCommasOrCurrency } from '../utils'

function PerFortnight() {

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

  const perYear = amount => {
    // if not number return 0
    return toDecimal(amount * 26)
  }

  const PerQuarter = amount => {
    return toDecimal(perYear(amount) / 4)
  }

  const perMonth = amount => {
    return toDecimal(perYear(amount) / 12)
  }

  const perWeek = amount => {
    return toDecimal(perYear(amount) / 52)
  }
  
  const perDay = amount => {
    return toDecimal(perYear(amount) / 365)
  }

  return (
    <tr>
      <td>${addCommas(perYear(amount))}</td>
      <td>${addCommas(PerQuarter(amount))}</td>
      <td>${addCommas(perMonth(amount))}</td>
      <td><input placeholder={0} onChange={onChange} /></td>
      <td>${addCommas(perWeek(amount))}</td>
      <td>${addCommas(perDay(amount))}</td>
    </tr>
  )
}

export default PerFortnight;