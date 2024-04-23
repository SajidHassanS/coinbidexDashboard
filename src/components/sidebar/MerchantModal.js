"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const MerchantModal = ({ show, onClose }) => {
  // State for input fields
  const [blockchain, setBlockchain] = useState("");
  const [hash, setHash] = useState("");
  const [coinsOrTokens, setCoinsOrTokens] = useState("");
  const [description, setDescription] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({});



  const handleSubmit = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    // If there are no errors, proceed with the form submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
      onClose(); // Close the modal after successful submission
    }
  };

  return (
    <div className={`modal overflow-y-auto ${show ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between p-5 gap-32 items-center ">
          <div className=" flex justify-center">
            <h3>___________  ____________</h3></div>
          <button
            className="bg-gray-400 rounded-full p-2"
            onClick={onClose}
          >
        
            <RxCross2 className="  " size={20} />
          </button>
        </div>
        
        <div className="px-5 py-2 text-2xl font-bold border-b mb-5">Create new merchant</div>
        <div className="px-5 py-2">
          <div className="mb-2">
            <label className="block text-xl mb-3 font-medium text-gray-700">Enter a merchant name</label>
            <input
              type="text"
              className={`w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none ${
                errors.blockchain ? "border-red-500" : "focus:border-blue-500"
              }`}
              placeholder="Merchant name"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
            />
            {errors.blockchain && (
              <p className="text-red-500 text-sm mt-1">{errors.blockchain}</p>
            )}
          </div>
        </div>

       

        <div className="px-5 py-5">
          <button
            className="w-full py-3 bg-gray-400 text-white-500 rounded-lg hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Create merchant
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantModal;
