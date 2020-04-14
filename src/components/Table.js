import React from 'react'
import PerYear from './PerYear'
import PerQuarter from './PerQuarter'
import PerMonth from './PerMonth'
import PerFortnight from './PerFortnight'
import PerWeek from './PerWeek'
import PerDay from './PerDay'

function Table() {

  return (
    <div className="table-breakdown">
      <table>
        <thead>
        <tr>
          <th>$/Year</th>
          <th>$/Quarter</th>
          <th>$/Month</th>
          <th>$/Fortnight</th>
          <th>$/Week</th>
          <th>$/Day</th>
        </tr>
        </thead>
        <tbody>
          <PerYear />
          <PerQuarter />
          <PerMonth />
          <PerFortnight />
          <PerWeek />
          <PerDay />
        </tbody>
      </table>
    </div>
  )
}

export default Table