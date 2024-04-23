"use client";
import React,{useState} from "react";
import Layout from "../../components/Layout";

import { TbWorld } from "react-icons/tb";

import { FaRegMoon, FaRegBell, FaRegUser } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { LuArrowRightLeft } from "react-icons/lu";
import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import DropdownTransaction from "@/components/dropdownButton/DropdownTransaction";
import DropdownPeriod from "@/components/dropdownButton/DropdownPeriod";
import SearchInput from "@/components/dropdownButton/SearchInput";
import DownloadButton from "@/components/dropdownButton/Download";
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import ReceiveComponent from "../../components/headerButton/receive/ReceiveComponent";
import WithdrawalComponent from "../../components/headerButton/WithdrawalComponent";
import TransferComponent from "../../components/headerButton/transfer/TransferComponent";
import ConvertComponent from "../../components/headerButton/convert/ConvertComponent";
import Merchants from "@/components/merchants/Merchants";
import MerchantModal from "@/components/sidebar/MerchantModal";
const businessWallet = () => {
  
  const [activeButton, setActiveButton] = useState("dashboard");

  const [showFormModal, setShowFormModal] = useState(false);



  

  const toggleFormModal = () => {
    setShowFormModal(!showFormModal);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderComponent = () => {
    switch (activeButton) {
     
      case "Transfer":
        return <TransferComponent />;
     
      default:
        return (
          <>
            <div className="flex p-8 justify-between border-b border-gray-400">
           <div className=" flex gap-4">
             <div className="w-30">
               <DropdownTransaction />
             </div>
             <div className="w-30">
               <DropdownPeriod />
             </div>
           </div>
           <div className="flex gap-3">
             <div>
               <SearchInput />
             </div>
             <div>
               <DownloadButton />
             </div>
           </div>
         </div>
          <div className=" w-80 mx-auto flex flex-col justify-center items-center mt-12">
           
            <div className="text-center py-3">
              <p>
                Create your first merchant and start accepting cryptocurrency
                payments for your business
              </p>
            </div>
            <div className="bg-blue-800 font-bold text-white-500  px-5 py-5 rounded-lg" onClick={toggleFormModal}
              style={{ cursor: "pointer" }}>
           
          <div >
                <Merchants   />
              </div>
          
           
         
              
            </div>
          </div>
         
         </>
        );
    }
  };
  
  return (
    <Layout>
      {/* Your dashboard content */}
      <>
        <div className=" bg-gradient-to-r from-black-600 to-black-500 focus:from-pink-500 focus:to-yellow-500  rounded-b-large    ">
          <header className="  text-white md:px-10 md:pb-10 md:pt-10  ">
            {/* Left side: CRMS */}
            <div className=" flex justify-between">
              <div>
                <span className="text-xl font-bold text-white-300">Dashboard</span>
              </div>

              {/* Right side: Icons */}
              <div className="flex items-center">
              <div className="bg-white-500 flex p-3 mr-3 rounded-full">
                 <h1>API documentation</h1>
                
                </div>
                <div className=" text-white-500 mx-5 text-4xl"><span>|</span></div>
                <div className="bg-white-500  p-3 mr-3 rounded-full">
                  <FaRegMoon className=" cursor-pointer  " size={20} />
                </div>

                <div className="bg-white-500  p-3 mr-3 rounded-full">
                  <FaRegBell className=" cursor-pointer  " size={20} />
                </div>

                <div className="bg-white-500  p-3 mr-3 rounded-full">
                  <TbWorld className=" cursor-pointer  " size={20} />
                </div>

                <div className="bg-white-500  p-3 mr-3 rounded-full">
                  <FaRegUser className=" cursor-pointer  " size={20} />
                </div>
                <div className="bg-white-500 md:hidden  p-3 mr-3 rounded-full">
                  <HiMenuAlt4 className=" cursor-pointer  " size={20} />
                </div>
                <div className="bg-white-500 md:hidden  p-3 mr-3 rounded-full">
                  <RxCross2 className=" cursor-pointer  " size={20} />
                </div>
              </div>
            </div>

            {/* Second row: Available Balance */}
            <div className="md:my-10">
              <span className="block text-white-300">Available Balance</span>
              <span className="block font-bold text-4xl text-white-300">$0.0</span>
            </div>

            {/* Third row: Withdrawal button */}
            <div className="flex gap-6 w-full ">
            
             
             
            <div className="flex gap-6 items-center">
              <button className={`bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex 
              justify-between items-center `}  onClick={() => handleButtonClick("Receive")}>
                Merchant
                <span className="bg-white-200 p-3 rounded-full">
                  <GoArrowUpRight className="" />
                </span>
              </button>
              <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex 
              justify-between items-center"   onClick={() => handleButtonClick("Withdrawal")}>
                Invoice
                <span className="bg-white-200 p-3 rounded-full">
                  <GoArrowDownLeft className="" />
                </span>
              </button>
              <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge
               flex justify-between items-center" onClick={() => handleButtonClick("Transfer")}>
                Transfer
                <span className="bg-white-200 p-3 rounded-full">
                  <LuArrowRightLeft className="" />
                </span>
              </button>
              <button className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge
               flex justify-between items-center"   onClick={() => handleButtonClick("Convert")}>
                Swap
                <span className="bg-white-200 p-3 rounded-full">
                  <PiArrowsCounterClockwiseBold className="" />
                </span>
              </button>
            </div>
            
            </div>
          </header>
        </div>
       

       

        {renderComponent()}

        {showFormModal && (
          <div className="fixed inset-0 z-40 flex justify-center   items-center bg-black-500 bg-opacity-50">
          <div className="bg-white-500  rounded-large ">
        <MerchantModal onClose={toggleFormModal} />
        </div>
              </div>
      )}
      </>
    </Layout>
  );
};

export default businessWallet;
