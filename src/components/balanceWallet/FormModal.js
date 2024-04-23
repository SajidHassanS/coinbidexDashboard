"use client"
import React from "react";
import { RxCross2 } from "react-icons/rx";

const FormModal = ({ show, onClose }) => {
  return (
    <div className={` modal ${show ? "show" : ""}`} onClick={onClose}>
        <div className="p-5 max-h-96 overflow-y-auto">
      <div className="modal-content max-h-full " onClick={(e) => e.stopPropagation()}>
       
        <div className="flex justify-between p-5   gap-32 items-center border-b"> 
          <div className="text-xl font-bold">Request to add coin or token</div>
          <div className=" ">   <button className="rounded-full bg-white-100 p-2" onClick={onClose}><RxCross2 size={25} /></button></div>
        

        </div>

        
          <div className="mb-4">
          <label className="block text-xl mb-3 font-medium text-gray-700">
            Blockchain
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter Blockchain name"
           
          />
        </div>
        </div>

        <div className="p-5">
        
        <div className="mb-4">
        <label className="block text-xl mb-3 font-medium text-gray-700">
          Hash
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter hash"
         
        />
      </div>
      </div>

      <div className="p-5">
        
        <div className="mb-4">
        <label className="block text-xl mb-3 font-medium text-gray-700">
          Coins or tokens
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter coins or tokens name"
         
        />
      </div>
      </div>

      <div className="p-5">
        
        <div className="mb-4">
        <label className="block text-xl mb-3 font-medium text-gray-700">
          Description (Optional)
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 py-4 px-2 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter Blockchain name"
         
        />
      </div>
      </div>
      <div className="p-5">
      <div className="p-5 flex text-center justify-center rounded-lg bg-black-500 text-white-100"> <button className="text-center">Send</button></div>
     
      </div>
       
      </div>
    </div>
  );
};

export default FormModal;
