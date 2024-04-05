// components/Header.js
import React from 'react';
import { FaMoon, FaBell, FaGlobe, FaUser } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      {/* Left side: CRMS */}
      <div className=' flex justify-between'>
      <div>
        <span className="text-lg font-bold">CRMS</span>
      </div>

      {/* Right side: Icons */}
      <div className="flex items-center">
        <FaMoon className="mr-4 cursor-pointer" />
        <FaBell className="mr-4 cursor-pointer" />
        <FaGlobe className="mr-4 cursor-pointer" />
        <FaUser className="mr-4 cursor-pointer" />
      </div>

      </div>
      

      {/* Second row: Available Balance */}
      <div className="text-center">
        <span className="block">Available Balance</span>
        <span className="block font-bold text-xl">$0.0</span>
      </div>

      {/* Third row: Withdrawal button */}
      <div className="flex items-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
          Withdrawal
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;
