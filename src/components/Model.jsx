import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: isOpen ? "translate(-50%, -50%)" : "translate(-50%, -150%)",
  };

  return (
    <section
      className={` relative ${
        isOpen ? "block" : "hidden"
      } z-50 w-screen h-screen  bg-black/50`}
      style={modalStyles}
    >
      <div>
        <div className="bg-transparent h-auto sm:h-1/2 overflow-scroll flex justify-center text-center shadow-xl ">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
