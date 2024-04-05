// DropdownButton.js
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { TiArrowSortedDown } from "react-icons/ti";

const DropdownButton = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState([]);
  const [isOpenCurrencyDropdown, setIsOpenCurrencyDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
    const isSelected = selectedCurrencies.includes(currency);
    if (isSelected) {
      setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
    } else {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const clearSelection = () => {
    setSelectedCurrencies([]);
  };

  const buttonText = selectedCurrencies.length > 0 ? selectedCurrencies.length.toString() : "Transaction Type";

  return (
    <div className="relative block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex justify-center gap-2 items-center rounded-large border border-gray-400 shadow-sm bg-white-500 px-4 py-2 text-sm font-medium text-gray-700 transition duration-500 ease-in-out"
          onClick={toggleDropdown}
        >
          {buttonText} 
          <div className={`${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
          <TiArrowSortedDown  size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="origin-top-left absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg bg-white-300 ring-1 ring-black ring-opacity-5 transition duration-500 ease-in-out">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer"
              onClick={clearSelection}
            >
              Clear Selection
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {["USDT", "EUR", "BTC", "USDC"].map((currency) => (
              <label key={currency} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer">
                {currency}
                <input
                  type="checkbox"
                  checked={selectedCurrencies.includes(currency)}
                  onChange={() => handleCurrencyItemClick(currency)}
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
