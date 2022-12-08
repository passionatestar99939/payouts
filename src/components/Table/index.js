import React, { useState } from "react"
import './index.css'

import { tableHeaders } from "../../data/constants"
import { tableData } from "../../data"
import Modal from "../Modal"

const Table = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          {tableHeaders.map((val, index) => (
            <th key={index}>{val}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((ele, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{ele["Affiliate Name"]}</td>
            <td>{ele["Most recent referral"]}</td>
            <td>+${ele["Revenue Generated"]}</td>
            <td>${ele["Paid Payouts"]}</td>
            <td>${ele["Unpaid Payouts"]}</td>
            <td>${ele["Ready Payouts"]}</td>
            <td>View ➜</td>
            <td><img style={{width: ''}}  src="/gitbox.jpg" alt="img"/></td>
            <td>
              <button onClick={() => setIsShowModal(true)}>Send payment ➢</button>
              <Modal
                isShowModal={isShowModal}
                setIsShowModal={setIsShowModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
