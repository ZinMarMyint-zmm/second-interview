import React from "react";
import add from "../assets/add.png";
import Form from "./Form";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const Modal = () => {
  const {
    state: { datas },
    showModal,
    setShowModal,
  } : any = useStateContext();

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="bg-topbar rounded-full flex p-1 items-center justify-around w-[180px] mt-5"
      >
        <img src={add} className="w-2 h-2" alt="" />
        <span className="text-white text-xs">Add new patient</span>
      </button>
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto">
            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <button
                onClick={() => setShowModal(false)}
                className="mt-5 pr-3 ml-auto bg-transparent border-0 text-black float-right text-lg leading-none font-semibold outline-none focus:outline-none"
              >
                <AiOutlineClose />
              </button>
              <div className="pt-1">
                <h3 className="text-lg text-center text-topbar font-semibold">
                  Add new patient
                </h3>
                <p className="text-center text-xs">
                  Enter new patient information below
                </p>
              </div>

              <Form datas={datas} onClose={() => setShowModal(false)} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
