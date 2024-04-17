import React, { useState, useRef, useEffect } from 'react';

import { IoIosArrowDown } from "react-icons/io";


const DropdownButton = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Business Wallet");
  const [isOpenCurrencyDropdown, setIsOpenCurrencyDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);

  const coinsData = [
    {
      name: "CRMS",
      imageSrc: "coin/CRMS.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "AVAX",
      imageSrc: "coin/AVAX.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BCH",
      imageSrc: "coin/BCH.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BNB",
      imageSrc: "coin/BNB.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BTC",
      imageSrc: "coin/BTC.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "CGPT",
      imageSrc: "coin/CGPT.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "DASH",
      imageSrc: "coin/DASH.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "DAI",
      imageSrc: "coin/DAI.svg",
      quantity: "0.0000000",
      value: "$0.00",
    },
    // Add more coin data objects as needed
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleCurrencyItemClick = (currency) => {
    setSelectedCurrency(currency === selectedCurrency ? "Business Wallet" : currency);
  };

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="relative block text-left">
      <div ref={dropdownRef}>
        <button
          type="button"
          className="flex justify-between py-5 items-center gap-4 rounded-lg border border-gray-400 shadow-sm bg-white-500 px-6 py-2 text-sm font-medium text-gray-700 transition duration-500 ease-in-out"
          onClick={toggleDropdown} style={{width:"50%"}}
        >
          {/* <img src={selectedCurrency === "Select network" ? "/logonew.png" : coinsData.find(coin => coin.name === selectedCurrency).imageSrc} alt={selectedCurrency} width={40} height={40} className="mr-2" /> */}
          <div className="flex items-center">
            {selectedCurrency || "Business Wallet"}
          </div>
          <div className={`ml-auto ${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
            <IoIosArrowDown size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="max-h-32 overflow-y-auto origin-top-left absolute top-full left-0 mt-2  rounded-lg shadow-lg bg-white-500 ring-1 
        ring-black ring-opacity-5 transition duration-500 ease-in-out overflow-hidden" style={{width:"50%"}}>
          <div className="px-4 pt-2">
            <input
              type="text"
              placeholder="Find Currency"
              className="w-full bg-white-100 rounded-md outline-none px-2 py-3 mb-2"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {coinsData.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase())).map((coin) => (
              <div key={coin.name} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer" onClick={() => handleCurrencyItemClick(coin.name)}>
                <div className="flex items-center">
                  <img src={coin.imageSrc} alt={coin.name} width={40} height={40} className="mr-2" />
                  <span className="ml-2">{coin.name}</span>
                </div>
                <div>{coin.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;