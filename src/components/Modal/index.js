import React, { useState, useEffect, useRef } from "react"
import ReactModal from "react-modal"

import "./style.css"

const Modal = (props) => {
  const ref = useRef(null)
  // const [isShowModal, setIsShowModal] = useState(false)

  useEffect(() => {
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
        <div style={{ position: "absolute", top: "0px", left: "0px" }}>
          <button onClick={() => props.setIsShowModal(false)}>← Back</button>
        </div>
        <div>Confirm Payouts</div>
      </div>
    )
  }

  const ModalBody = () => {
    return <div></div>
  }

  const ModalFoot = () => {
    return (
      <div className="modal__foot">
        <button>Send payouts ➢</button>
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
