import React, { useState } from "react"
import Modal from "../Modal"
import "./index.css"

const Card = (props) => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className="card">
      <div>
        <img style={{ width: "16px" }} src="/card-img.png" />
        {props.title}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
