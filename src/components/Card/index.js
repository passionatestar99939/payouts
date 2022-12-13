import React, { useState } from "react"
import Modal from "../Modal"
import "./style.css"

const Card = (props) => {
  const [isShowModal, setIsShowModal] = useState(false)

  return (
    <div className="card sm:w-1/2 md:w-1/3: lg:w-1/4" style={{ padding: "16px 20px" }}>
      <div className="flex">
        <img style={{ width: "16px", height: "16px" }} src="/card-img.png" />
        <div className="text-xs"> {props.title}</div>
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
