import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateData } from "../../store/slices/mainTableSlice"

import "./style.css"

import { tableHeaders } from "../../data/constants"
// import { tableData } from "../../data"
import Modal from "../Modal"

const Table = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const tableData = useSelector((state) => state.mainTable.data)
  const dispatch = useDispatch()

  // const [tableData, setTableDataState] = useState([...tableData])

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
        {tableData.map((ele, index) => (
          <tr
            key={index}
            onClick={() => {
              tempTableData[index] = {
                ...tempTableData[index],
                checked: tempTableData[index].checked ^ 1,
              }
              dispatch(updateData({ data: tempTableData }))
            }}
          >
            <td>
              <input
                type="checkbox"
                checked={ele.checked}
                onChange={() => {
                  // tempTableData[index] = {
                  //   ...tempTableData[index],
                  //   checked: tempTableData[index].checked ^ 1,
                  // }
                  // dispatch(updateData({ data: tempTableData }))
                  // console.log(`???=>ele onchange:${ele.checked}`)
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
              <button
                onClick={(e) => {
                  setIsShowModal(true)
                  e.stopPropagation()
                  // e.preventDefault();
                }}
              >
                Send payment ➢
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </table>
  )
}

export default Table
