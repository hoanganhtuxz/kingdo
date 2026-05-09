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
    background: "../images/Bo-sung-10.jpg",
  },
};

export default function ModalCreate({
  file,
  register,
  submitRecuilt,
  handleSubmit,
  setFile,
  alert,
  loader,
  modalIsOpen,
  setIsOpen,
}) {
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "blue";
  }
  function closeModal() {
    setIsOpen(false);
    setFile();
  }

  return (
    <div>
      <button
        className="viethoa text-white bg-red-800s border-all-red font-13px px-3 py-2  rounded"
        onClick={openModal}
        style={{ fontWeight: "600", cursor: "pointer" }}
      >
        ứng tuyển ngay
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
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
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <h3 className="mt-4 viethoa text-modal">Nộp đơn ứng tuyển</h3>
        <form
          className="mt-4 modal-form"
          onSubmit={handleSubmit(submitRecuilt)}
        >
          <div>
            <div className="mt-3">
              <input
                type="text"
                className="py-2 border-0 px-4 w-100 input-modal"
                placeholder="Họ và tên..."
                required
                {...register("name")}
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                required
                className="py-2 border-0 px-4 w-100 input-modal"
                placeholder="Email..."
                {...register("email")}
              />
            </div>
            <div className="mt-4">
              <input
                type="tel"
                required
                className="py-2  border-0 px-4 w-100 input-modal"
                placeholder="Số điện thoại..."
                {...register("phone_number")}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="py-2 border-0 px-4 w-100 input-modal"
                placeholder="Tên chức vụ ứng tuyển..."
                required
                {...register("name_position")}
              />
            </div>
            <div>
              <p className="text-white mt-4">
                Tải lên hồ sơ của bạn (kích cỡ không quá 10MB, định dạng: doc,
                docx, pdf. png, gif, jpg)
              </p>
              <label className="text-white" for="file">
                <div
                  className="d-flex align-items-center p-1 px-2 rounded"
                  style={{ background: "#e2e2e2", color: "#3c3c3c" }}
                >
                  <p className="mb-0 mr-2 ">Up file</p>
                  <img style={{ width: "20px" }} src="./images/upfile.png" />
                </div>
              </label>
              {file ? (
                <span className="text-white ml-2">{file?.name}</span>
              ) : null}

              <input
                onChange={(e) => setFile(e.target.files[0])}
                id="file"
                type="file"
                accept=".pdf"
                hidden
              />
            </div>
          </div>
          {loader ? (
            <h3 className="text-white text-center"> Đang tải....</h3>
          ) : (
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning">Xác nhận</button>
            </div>
          )}
        </form>
      </Modal>
    </div>
  );
}
