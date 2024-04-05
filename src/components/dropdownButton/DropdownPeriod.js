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

  const buttonText = selectedCurrencies.length > 0 ? selectedCurrencies.length.toString() : "Period";

  return (
    <div className="relative block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex justify-center items-center gap-2 rounded-large border border-gray-400 shadow-sm bg-white-500 px-4 py-2 text-sm font-medium text-gray-700  transition duration-500 ease-in-out"
          onClick={toggleDropdown}
        >
          {buttonText}
          <div className={`${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
            <TiArrowSortedDown size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="origin-top-left absolute top-full left-0 mt-2 w-56 rounded-lg shadow-lg bg-white-300 ring-1 ring-black ring-opacity-5 transition duration-500 ease-in-out">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Clear Selection button removed */}
            {["USDT", "EUR", "BTC", "USDC"].map((currency) => (
              <div key={currency} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer">
                {currency}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
