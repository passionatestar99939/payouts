import React, { useState } from "react"
import "./index.css"

import { tableHeaders } from "../../data/constants"
import { tableData } from "../../data"
import Modal from "../Modal"

const Table = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [tableDataState, setTableDataState] = useState([...tableData])
  let tempTableData = [...tableData]

  return (
    <table className="main-table">
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
        {tableDataState.map((ele, index) => (
          <tr
            key={index}
            onClick={() => {
              // tempTableData[index].checked ^= 1
              // setTableDataState(tempTableData)
              // console.log(`???=>ele:${ele.checked}`)
            }}
          >
            <td>
              <input
                type="checkbox"
                checked={ele.checked}
                onChange={() => {
                  tempTableData[index].checked ^= 1
                  setTableDataState(tempTableData)
                  console.log(`???=>ele:${ele.checked}`)
                }}
              />
            </td>
            <td>{ele["Affiliate Name"]}</td>
            <td>{ele["Most recent referral"]}</td>
            <td>+${ele["Revenue Generated"]}</td>
            <td>${ele["Paid Payouts"]}</td>
            <td>${ele["Unpaid Payouts"]}</td>
            <td>${ele["Ready Payouts"]}</td>
            <td>View ➜</td>
            <td>
              <img
                style={{ width: "" }}
                src={ele.Type === "Store Credit" ? "/gitbox.jpg" : "img"}
                alt="img"
              />
            </td>
            <td>
              <button onClick={() => setIsShowModal(true)}>
                Send payment ➢
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <Modal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        tableDataState={tableDataState}
        setTableDataState={setTableDataState}
      />
    </table>
  )
}

export default Table
