import React from "react";
import DropdownButtonSelect from "./Dropdown_select";
import DropdownButton from "./Dropdown";
import { FaDotCircle } from "react-icons/fa";

const ReceiveComponent = () => {
  return (
    <>
      <div className="px-8">
        <div className="text-4xl font-bold mt-10 mb-5">
          <h1>Select wallet</h1>
        </div>
        <div className="">
          <DropdownButton />
        </div>

        <div>
          <div className="text-4xl font-bold text-gray-400 mt-10 mb-5">
            <h1>Select network</h1>
          </div>
          <div className=" bg-gray-100 py-3  rounded-md px-2 mt-5 mb-5" style={{width:"50%"}}>
           <p className="text-black-600">You need to select a wallet before you can select a network</p>
          </div>
          <div className="">
            <DropdownButtonSelect />
          </div>
        </div>

        <div>
          <div className="text-4xl font-bold text-gray-400 mt-10 mb-5">
            <h1>Type of receive</h1>
          </div>
          <div className=" bg-gray-100 py-3  rounded-md px-2 mt-5 mb-5" style={{width:"50%"}}>
           <p className="text-black-600">You need to select wallet and network before you can select a type</p>
          </div>
          <div className="flex gap-5 rounded-lg py-5 px-3 border items-center "  style={{width:"50%"}}>
          <FaDotCircle size={25} />
          <p>Crypto</p>

          </div>
        </div>

        <div>
          <div className="text-4xl font-bold text-gray-400 mt-10 mb-5">
            <h1>Share wallet address</h1>
          </div>
          <div className=" bg-gray-100 py-3  rounded-md px-2 mt-5 mb-5" style={{width:"50%"}}>
           <p className="text-black-600">Select wallet and network to share wallet address</p>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default ReceiveComponent;
