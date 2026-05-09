import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    zIndex: "100",
    display: "flex",
    justifyContent: "center",
  },
};

export default function ModalPlayVideo({ url }) {
  const [modalIsOpen, setIsOpen] = useState();
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      style={{
        zIndex: "1031",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        onClick={openModal}
        className="hover-video"
        style={{ margin: "auto", cursor: "pointer" }}
      >
        <img src="./images/playVideo.png" className="img-play-video" />
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
        <div>
          <ReactPlayer playing={true} url={url} width={1000} height={600} />
        </div>
      </Modal>
    </div>
  );
}
