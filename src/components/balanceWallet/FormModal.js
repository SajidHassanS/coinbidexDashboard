"use client"
import React from "react";

const FormModal = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Your modal content here */}
        <h1>This is the FormModal</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FormModal;
