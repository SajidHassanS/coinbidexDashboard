import React, { useState, useRef, useEffect } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";

const DropdownButton = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Crypto Wallet");
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
    setSelectedCurrency(currency === selectedCurrency ? "Crypto Wallet" : currency);
  };

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="relative block text-left">
      <div>
        <button
          type="button"
          className="flex justify-between py-4 items-center gap-4 rounded-lg border border-gray-400 shadow-sm bg-white-500 px-6 py-2 text-sm font-medium text-gray-700 transition duration-500 ease-in-out"
          onClick={toggleDropdown}
        >
          <img src={selectedCurrency === "Crypto Wallet" ? "/logonew.png" : coinsData.find(coin => coin.name === selectedCurrency).imageSrc} alt={selectedCurrency} width={24} height={24} className="mr-2" />
          <div className="flex items-center">
            {selectedCurrency || "Crypto Wallet"}
          </div>
          <div className={`ml-auto ${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
            <TiArrowSortedDown size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="origin-top-left absolute top-full left-0 mt-2 w-full rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition duration-500 ease-in-out overflow-y-auto">
          <div className="px-4 pt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-md px-2 py-1 mb-2"
              value={searchText}
              onChange={handleSearchChange}
            />
          </div>
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {coinsData.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase())).map((coin) => (
              <div key={coin.name} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer" onClick={() => handleCurrencyItemClick(coin.name)}>
                <div className="flex items-center">
                  <img src={coin.imageSrc} alt={coin.name} width={24} height={24} className="mr-2" />
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
