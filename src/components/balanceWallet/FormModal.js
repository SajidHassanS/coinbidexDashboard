"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FormModal = ({ show, onClose }) => {
  // State for input fields
  const [blockchain, setBlockchain] = useState("");
  const [hash, setHash] = useState("");
  const [coinsOrTokens, setCoinsOrTokens] = useState("");
  const [description, setDescription] = useState("");

  // State for error messages
  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (blockchain.trim() === "") {
      newErrors.blockchain = "Blockchain name is required.";
    }
    if (hash.trim() === "") {
      newErrors.hash = "Hash is required.";
    }
    if (coinsOrTokens.trim() === "") {
      newErrors.coinsOrTokens = "Coin or token name is required.";
    }
    return newErrors;
  };

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
        <div className="flex justify-between p-5 gap-32 items-center border-b">
          <div className="text-xl font-bold">Request to add coin or token</div>
          <button
            className="rounded-full p-2"
            onClick={onClose}
          >
            <RxCross2 size={25} />
          </button>
        </div>

        <div className="px-5 py-2">
          <div className="mb-2">
            <label className="block text-xl mb-3 font-medium text-gray-700">Blockchain</label>
            <input
              type="text"
              className={`w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none ${
                errors.blockchain ? "border-red-500" : "focus:border-blue-500"
              }`}
              placeholder="Enter Blockchain name"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
            />
            {errors.blockchain && (
              <p className="text-red-500 text-sm mt-1">{errors.blockchain}</p>
            )}
          </div>
        </div>

        <div className="px-5 py-2">
          <div className="mb-2">
            <label className="block text-xl mb-3 font-medium text-gray-700">Hash</label>
            <input
              type="text"
              className={`w-full border border-gray-300 py-4 px-2 rounded-lg ${
                errors.hash ? "border-red-500" : "focus:border-blue-500"
              }`}
              placeholder="Enter hash"
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
            {errors.hash && (
              <p className="text-red-500 text-sm mt-1">{errors.hash}</p>
            )}
          </div>
        </div>

        <div className="px-5 py-2">
          <div className="mb-2">
            <label className="block text-xl mb-3 font-medium text-gray-700">Coins or Tokens</label>
            <input
              type="text"
              className={`w-full border border-gray-300 py-4 px-2 rounded-lg ${
                errors.coinsOrTokens ? "border-red-500" : "focus:border-blue-500"
              }`}
              placeholder="Enter coins or tokens name"
              value={coinsOrTokens}
              onChange={(e) => setCoinsOrTokens(e.target.value)}
            />
            {errors.coinsOrTokens && (
              <p className="text-red-500 text-sm mt-1">{errors.coinsOrTokens}</p>
            )}
          </div>
        </div>

        <div className="px-5 py-2">
          <div className="mb-2">
            <label className="block text-xl mb-3 font-medium text-gray-700">Description (Optional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 py-4 px-2 rounded-lg focus:border-blue-500"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="px-5 py-5">
          <button
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
