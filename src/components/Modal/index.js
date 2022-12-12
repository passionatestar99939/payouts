import React, { useState, useEffect, useRef } from "react"
import ReactModal from "react-modal"

import { useSelector, useDispatch } from "react-redux"
import { updateData as updateMainTableData } from "../../store/slices/mainTableSlice"
import { updateData as updateTotalValueData } from "../../store/slices/totalValueSlice"

import "./style.css"

const Modal = (props) => {
  const tableData = useSelector((state) => state.mainTable.data)
  const dispatch = useDispatch()

  const ref = useRef(null)
  // const [isShowModal, setIsShowModal] = useState(false)
  let tempTableData = [...tableData]
  const storeCredit = useRef(0)
  const tremendous = useRef(0)
  const total = useRef(0)

  const calculate = () => {
    storeCredit.current = tremendous.current = total.current = 0

    tempTableData.forEach((ele) => {
      storeCredit.current += ele.checked ? ele["Unpaid Payouts"] : 0
    })
    storeCredit.current = storeCredit.current.toFixed(2)
    total.current = storeCredit.current

    console.log(`???=>total:${total.current}`)

    let totalPaid = 0,
      totalUnpaid = 0,
      totalReady = 0

    tableData.forEach((ele) => {
      totalPaid += ele["Paid Payouts"]
      totalUnpaid += ele["Unpaid Payouts"]
      totalReady += ele["Ready Payouts"]
    })

    dispatch(
      updateTotalValueData({
        paid: totalPaid.toFixed(2),
        unpaid: totalUnpaid.toFixed(2),
        ready: totalReady.toFixed(2),
      })
    )
  }

  const sendPayouts = () => {
    props.setIsShowModal(false)
    const payoutsArray = []
    tableData.forEach((ele) => {
      // if (ele.checked)
      //   payoutsArray.push([ele["Affiliate Name"], ele["Unpaid Payouts"]])
      if (ele.checked) {
        const payout = {
          name: ele["Affiliate Name"],
          amount: ele["Unpaid Payouts"],
        }
        payoutsArray.push(payout)
        console.log(payout)
      }
    })
    console.log(
      `???=>payoutsArray:${payoutsArray} length:${payoutsArray.length}`
    )
  }

  useEffect(() => {
    calculate()
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setIsShowModal(false)
      }
    }
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  }, [])

  const ModalHeader = () => {
    return (
      <div className="modal__header">
        <div>
          <div style={{ position: "absolute", top: "0px", left: "0px" }}>
            <button onClick={() => props.setIsShowModal(false)}>← Back</button>
          </div>
          <div>Confirm Payouts</div>
        </div>
      </div>
    )
  }

  const ModalBody = () => {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          The following affiliates will be sent payouts:
        </div>
        <table className="modal__table">
          <thead>
            <tr>
              <th>Affiliate</th>
              <th>Commission</th>
              <th>Type</th>
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
                  dispatch(updateMainTableData({ data: tempTableData }))
                  calculate()
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={ele.checked}
                    // onChange={() => {
                    //   tempTableData[index] = {
                    //     ...tempTableData[index],
                    //     checked: tempTableData[index].checked ^ 1,
                    //   }
                    //   dispatch(updateMainTableData({ data: tempTableData }))
                    //   calculate()
                    // }}
                  />
                  {ele["Affiliate Name"]}
                </td>
                <td>${ele["Unpaid Payouts"]}</td>
                <td>{ele.Type}</td>
              </tr>
            ))}
            <tr>
              <td>Store Credit:</td>
              <td></td>
              <td>${storeCredit.current}</td>
            </tr>
            <tr>
              <td>Tremendous:</td>
              <td></td>
              <td>${tremendous.current}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td></td>
              <td>${total.current}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  const ModalFoot = () => {
    return (
      <div className="modal__foot">
        <button onClick={sendPayouts}>Send payouts ➢</button>
      </div>
    )
  }

  ReactModal.setAppElement("#root")

  return (
    <ReactModal
      className="modal"
      isOpen={props.isShowModal}
      contentLabel="Minimal Modal Example"
    >
      <div className="___________modal" ref={ref}>
        <ModalHeader />
        <ModalBody />
        <ModalFoot />
      </div>
    </ReactModal>
  )
}

const props = {}

export default Modal
