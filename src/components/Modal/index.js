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
        <div>Modal</div>
        <div>
          <button onClick={() => props.setIsShowModal(false)}>&times;</button>
        </div>
      </div>
    )
  }

  const ModalBody = () => {
    return <div></div>
  }

  ReactModal.setAppElement("#root")

  return (
    <div ref={ref}>
      <ReactModal
        isOpen={props.isShowModal}
        contentLabel="Minimal Modal Example"
      >
        <ModalHeader />
        <ModalBody />
      </ReactModal>
    </div>
  )
}

const props = {}

export default Modal
