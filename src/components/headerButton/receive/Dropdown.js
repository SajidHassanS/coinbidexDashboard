import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const DropdownButton = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("Crypto Wallet");
  const [selectedImageSrc, setSelectedImageSrc] = useState("/logonew.png");
  const [isOpenCurrencyDropdown, setIsOpenCurrencyDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [contentMarginTop, setContentMarginTop] = useState(0); // State to track content margin top
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !searchInputRef.current.contains(event.target)) {
        setIsOpenCurrencyDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Update content margin top when dropdown opens or closes
    if (isOpenCurrencyDropdown) {
      setContentMarginTop(dropdownRef.current.offsetHeight);
    } else {
      setContentMarginTop(0);
    }
  }, [isOpenCurrencyDropdown]);

  const handleCurrencyItemClick = (currency, imageSrc) => {
    setSelectedCurrency(currency);
    setSelectedImageSrc(imageSrc);
    if (currency !== selectedCurrency) {
      setIsOpenCurrencyDropdown(false); // Close dropdown if a different coin is selected
    }
  };
  

  const toggleDropdown = () => {
    setIsOpenCurrencyDropdown(!isOpenCurrencyDropdown);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
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
          className="flex justify-between py-2 items-center gap-4 rounded-lg border border-gray-400 shadow-sm bg-white-500 px-6 py-2 text-sm font-medium text-gray-700 transition duration-500 ease-in-out"
          onClick={toggleDropdown} style={{width:"50%"}}
        >
          <img src={selectedImageSrc} alt={selectedCurrency} width={40} height={40} className="mr-2" />
          <div className="flex items-center">
            {selectedCurrency || "Crypto Wallet"}
          </div>
          <div className={`ml-auto ${isOpenCurrencyDropdown ? 'transform rotate-180' : ''}`}>
            <IoIosArrowDown size={20}/>
          </div>
        </button>
      </div>

      {isOpenCurrencyDropdown && (
        <div className="max-h-32 overflow-y-auto origin-top-left absolute top-full left-0 mt-2 rounded-lg shadow-lg bg-white-500 ring-1 ring-black ring-opacity-5 transition duration-500 ease-in-out overflow-hidden" style={{ width: "50%" }}>
          <div className="px-4 pt-2">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Find Currency"
              className="w-full bg-white-100 rounded-md outline-none px-2 py-3 mb-2"
              value={searchText}
              onChange={handleSearchChange}
              onClick={handleSearchClick}
            />
          </div>
          <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {coinsData
              .filter(coin => coin.name.toLowerCase().includes(searchText))
              .map((coin) => (
<div key={coin.name} className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full cursor-pointer" onClick={(event) => handleCurrencyItemClick(event, coin.name, coin.imageSrc)}>
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
      <div style={{ marginTop: `${contentMarginTop}px` }}>
        {/* Content below the dropdown button */}
      </div>
    </div>
  );
};

export default DropdownButton;
