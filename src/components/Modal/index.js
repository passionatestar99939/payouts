import React, { useState, useEffect, useRef } from "react"
import ReactModal from "react-modal"

import "./style.css"

const Modal = () => {
  const ref = useRef(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const handleOpenModal = () => {
    setIsShowModal(true)
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCloseModal()
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
          <button onClick={handleCloseModal}>&times;</button>
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
      <div>
        <button className="btn btn-primary" onClick={handleOpenModal}>
          Open Modal
        </button>
      </div>

      <ReactModal isOpen={isShowModal} contentLabel="Minimal Modal Example">
        <ModalHeader />
        <ModalBody />
      </ReactModal>
    </div>
  )
}

const props = {}

export default Modal
