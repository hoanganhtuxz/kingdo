import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    zIndex: "100000",
  },
};

export default function ModalShowImages({ file }) {
  const [modalIsOpen, setIsOpen] = useState();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div style={{ zIndex: "1031" }}>
      <div onClick={openModal}>
        <img src={file} className="w-100" />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="btn p-0"
          style={{ width: "40px", position: "absolute", right: "20px" }}
          onClick={closeModal}
        >
          <img className="w-100" src="./images/Icon_Cancel.png" alt="" />
        </button>
        <img src={file} className="w-100" />
      </Modal>
    </div>
  );
}
