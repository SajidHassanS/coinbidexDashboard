"use client";
import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
import { FaRegCircleCheck } from "react-icons/fa6";

import { TbWorld } from "react-icons/tb";

import { FaRegMoon, FaRegBell, FaRegUser, FaTimes } from "react-icons/fa";
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
import { IoSettingsOutline } from "react-icons/io5";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { IoGiftOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

const Page = () => {
  const [activeButton, setActiveButton] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const sampleMessages = [
    "New message from John",
    "Your package has shipped",
    "Reminder: Meeting at 3 PM",
  ];

  // modal end
  const renderComponent = () => {
    switch (activeButton) {
      case "Receive":
        return <ReceiveComponent />;
      case "Withdrawal":
        return <WithdrawalComponent />;
      case "Transfer":
        return <TransferComponent />;
      case "Convert":
        return <ConvertComponent />;
      default:
        return (
          <>
            <div className="flex p-8 justify-between border-b border-gray-400">
              <div className="flex gap-4">
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
            <div className="w-80 mx-auto flex flex-col justify-center items-center mt-12">
              <div className="text-2xl font-bold">
                <h1>No transactions yet</h1>
              </div>
              <div className="text-center py-3">
                <p>
                  Create your first merchant and start accepting cryptocurrency
                  payments for your business.
                </p>
              </div>
              <div className="bg-blue-800 font-bold text-white-500 w-100 px-20 py-5 rounded-lg">
                <button>Get address</button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <Layout>
      <div className="bg-blue-200 rounded-b-large">
        <header className="text-white md:px-10 md:pb-10 md:pt-10">
          {/* Left side: CRMS */}
          <div className="flex justify-between">
            <div>
              <span className="text-xl font-bold">Dashboard</span>
            </div>

            {/* Right side: Icons */}
            <div className="flex items-center">
              <div className="bg-white-500 p-3 mr-3 rounded-full">
                <FaRegMoon className="cursor-pointer" size={20} />
              </div>

              <div
                className="bg-white-500 relative  p-3 mr-3 rounded-full"
                onClick={toggleModal}
              >
                <FaRegBell className="cursor-pointer" size={20} />
              </div>

              {isModalOpen && (
                <div
                  className=" absolute top-24 right-80 "
                  style={{ marginRight: "5%" }}
                >
                  <NotificationModal
                    onClose={toggleModal}
                    messages={sampleMessages}
                  />
                </div>
              )}

              <div className="bg-white-500 p-3 mr-3 rounded-full">
                <TbWorld className="cursor-pointer" size={20} />
              </div>

              <div className="relative">
                <div
                  className="bg-white-500 p-3 mr-3 rounded-full"
                  onClick={toggleDropdown}
                >
                  <FaRegUser className="cursor-pointer" size={20} />
                </div>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 bg-white-500 shadow-lg rounded-lg z-10"
                  >
                    <ul className="p-2">
                      <li className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-3">
                        <IoSettingsOutline size={25} />
                        <h1>Settings</h1>
                      </li>
                      <li className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-3">
                        <PiCurrencyCircleDollar size={25} />
                        <h1>Currency</h1>
                      </li>
                      <li className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-3">
                        <IoGiftOutline size={25} />
                        <h1>Awards</h1>
                      </li>
                      <li className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-3">
                        <TbLogout size={25} />
                        <h1>Logout</h1>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="bg-white-500 md:hidden p-3 mr-3 rounded-full">
                <HiMenuAlt4 className="cursor-pointer" size={20} />
              </div>
              <div className="bg-white-500 md:hidden p-3 mr-3 rounded-full">
                <RxCross2 className="cursor-pointer" size={20} />
              </div>
            </div>
          </div>

          {/* Second row: Available Balance */}
          <div className="md:my-10 flex flex-row">
            {/* <span>Available Balance</span> */}
            <span className="font-bold text-4xl">$0.0</span>
          </div>

          {/* Third row: Withdrawal button */}
          <div className="flex gap-6 items-center">
            <button
              className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex justify-between items-center"
              onClick={() => handleButtonClick("Receive")}
            >
              Receive
              <span className="bg-white-200 p-3 rounded-full">
                <GoArrowUpRight />
              </span>
            </button>

            <button
              className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex justify-between items-center"
              onClick={() => handleButtonClick("Withdrawal")}
            >
              Withdrawal
              <span className="bg-white-200 p-3 rounded-full">
                <GoArrowDownLeft />
              </span>
            </button>

            <button
              className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex justify-between items-center"
              onClick={() => handleButtonClick("Transfer")}
            >
              Transfer
              <span className="bg-white-200 p-3 rounded-full">
                <LuArrowRightLeft />
              </span>
            </button>

            <button
              className="bg-white-500 text-xl hover:bg-gray-400 text-white px-4 py-4 gap-16 rounded-smlarge flex justify-between items-center"
              onClick={() => handleButtonClick("Convert")}
            >
              Convert
              <span className="bg-white-200 p-3 rounded-full">
                <PiArrowsCounterClockwiseBold />
              </span>
            </button>
          </div>
        </header>
      </div>

      {renderComponent()}
    </Layout>
  );
};

export default Page;

const NotificationModal = ({ onClose, messages }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  const useOutsideClick = (ref, callback) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, callback]);
  };

  useOutsideClick(modalRef, onClose);

  return (
    <div className=" z-40 inset-0 bg-black-500 bg-opacity-30 flex items-center justify-center ">
      <div
        ref={modalRef}
        className="bg-white-500 p-4  rounded-lg shadow-lg relative"
      >
        <div className="flex justify-between items-center gap-16 items-center">
          <h2 className="text-lg font-bold">Notifications</h2>
          <div className="mt-4 flex justify-end">
            <button
              className=" text-white px-4 py-2 rounded-lg "
              onClick={() => alert("Marked all as read!")}
            >
           
              <FaRegCircleCheck />
            </button>
          </div>
          <button onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>
        <div className="mt-4">
          {messages.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            <ul>
              {messages.map((message, index) => (
                <li key={index} className="border-b py-2">
                  {message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
