import React from "react";
import { IoMdClose } from "react-icons/io";
const Modal = ({ data }) => {
  return (
    <dialog className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl w-full max-w-[600px] min-h-[200px] text-xl bg-light dark:bg-dark dark:text-light">
      <div className="flex flex-col gap-4 w-full h-full relative p-8">
        <p>{data?.information?.header}</p>
        <p>{data?.information?.paragraphs}</p>
        <p>Created with: {data?.information?.technogies}</p>
        <button
          onClick={() => {
            const modal = document.querySelector(".modal");
            modal.close();
            document.body.style.overflow = "auto";
          }}
          className="absolute top-4 right-4"
          aria-label="Close Modal"
        >
          <IoMdClose />
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
