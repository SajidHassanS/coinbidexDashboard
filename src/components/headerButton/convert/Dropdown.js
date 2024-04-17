// Import useRef and useEffect
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const DropdownButton = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Currency Select");
  const [isOpenCurrencyDropdown, setIsOpenCurrencyDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [contentMarginTop, setContentMarginTop] = useState(0); // State to track content margin top
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null); // Ref for the search input

 
  const coinsData = [
    {
      name: "CRMS",
      
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "AVAX",
      
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BCH",
            quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BNB",
            quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "BTC",
            quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "CGPT",
      
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "DASH",
      
      quantity: "0.0000000",
      value: "$0.00",
    },
    {
      name: "DAI",
            quantity: "0.0000000",
      value: "$0.00",
    },
    // Add more coin data objects as needed
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !searchInputRef.current.contains(event.target)) {
        setIsOpenCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

 

  const handleCurrencyItemClick = (currency) => {
    setSelectedCurrency(currency === selectedCurrency ? "Currency Select" : currency);
  };

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Prevent propagation of click events from the search input to the document
  const handleSearchClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="relative block text-left">
      <div ref={dropdownRef}>
        <button
          type="button"
          className="flex justify-between py-5 items-center gap-4 rounded-lg  shadow-lg bg-white-500 px-6 text-sm font-medium text-gray-700 transition duration-500 ease-in-out"
          onClick={toggleDropdown} 
        >
          <div className="flex items-center">
            {selectedCurrency || "Currency Select"}
          </div>
          <div className={`ml-auto ${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
            <IoIosArrowDown size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="max-h-32 overflow-y-auto origin-top-left absolute top-full left-0  rounded-lg shadow-lg bg-white-500  transition duration-500 ease-in-out overflow-hidden">
          <div className="px-4 pt-2">
            <input
              ref={searchInputRef} // Assign the ref
              type="text"
              placeholder="Find Currency"
              className="w-full bg-white-100 rounded-md outline-none px-2 py-3 mb-2"
              value={searchText}
              onChange={handleSearchChange}
              onClick={handleSearchClick} // Prevent propagation of click events
            />
          </div>
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {coinsData.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase())).map((coin) => (
              <div key={coin.name} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer" onClick={() => handleCurrencyItemClick(coin.name)}>
                <div className="flex items-center">
                  <span className="ml-2">{coin.name}</span>
                </div>
                <div>{coin.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ marginTop: `${contentMarginTop}px` }}>
        {/* Content below the dropdown button */}
      </div>
    </div>
  );
};

export default DropdownButton;
