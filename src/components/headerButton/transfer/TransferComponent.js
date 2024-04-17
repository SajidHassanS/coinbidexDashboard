import React from "react";
import DropdownButtonSelect from "./Dropdown_select";
import DropdownButton from "./Dropdown";
import { FaDotCircle } from "react-icons/fa";

const TransferComponent = () => {
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
            <h1>Transfer to</h1>
          </div>

          <div className="">
            <DropdownButtonSelect />
          </div>
        </div>

        <div>
          <div className="text-4xl font-bold text-gray-400 mt-10 mb-5">
            <h1>Enter amount to be send</h1>
          </div>
          <div
            className=" bg-gray-100 py-3 flex justify-between items-center  rounded-lg px-4 mt-5 mb-5"
            style={{ width: "50%" }}
          >
            <div>
            
              <p className="text-black-600">0.00000000</p>{" "}
            </div>
            <div className="bg-black-600 rounded-lg py-2 px-3 text-white-100">
             
              <button>Send all</button>
            </div>
           
          </div>
          <div className="bg-black-600 py-4 text-center text-white-100 rounded-lg"   style={{ width: "50%" }}>  <button>Transfer</button></div>
        
        </div>
      </div>
    </>
  );
};

export default TransferComponent;
