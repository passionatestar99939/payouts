import React, { useState } from "react"
import Modal from "../Modal"
import "./style.css"

const Card = (props) => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className="card" style={{ padding: "16px 20px" }}>
      <div className="flex justify-between">
        <img style={{ width: "16px", height: "16px" }} src="/card-img.png" />
        <div className="text-xs">{props.title}</div>
      </div>
      <div className="flex justify-between">
        <div>${props.value}</div>
        {props.isReadyPayouts ? (
          <button
            onClick={() => {
              setIsShowModal(true)
            }}
          >
            Pay All
          </button>
        ) : (
          ""
        )}
      </div>
      <Modal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
    </div>
  )
}

export default Card
