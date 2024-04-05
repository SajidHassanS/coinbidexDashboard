// components/Sidebar.js
import React, { useState } from 'react';
import { FiHome, FiCreditCard, FiUsers } from 'react-icons/fi';
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import BalanceWallet from '../balanceWallet/BalanceWallet';
import Merchants from '../merchants/Merchants';
import Support from '../support/Support';

const Sidebar = () => {
  // State to track active state
  const [activeItem, setActiveItem] = useState('personal');

  return (
    <div className={`bg-white-500 text-white w-96 mt-7 pl-8 flex-shrink-0 ${activeItem === 'sidebar' ? 'bg-white-200' : ''}`}>
      <div className="p-4  ">
        {/* Sidebar Logo */}
        <div className="flex items-center mb-8">
          <img src="/logonew.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-3xl font-bold">Coinbidex</span>
        </div>

        {/* Sidebar Items */}
        <ul>
          {/* Personal Wallet */}
          <li  className={`mb-4 flex items-center p-3 rounded-lg  hover:bg-white-100 ${activeItem === 'personal' ? 'bg-white-100' : ''}`}  onClick={() => setActiveItem('personal')}>
            <FiHome className="mr-5" size={25} />
            <a href="#" >
              Personal Wallet
            </a>
          </li>
          
          {/* Business Wallet */}
          <li className={`mb-4 flex items-center p-3 rounded-lg  hover:bg-white-100 ${activeItem === 'business' ? 'bg-white-100' : ''}`}  onClick={() => setActiveItem('business')}>
            <FiCreditCard className="mr-5" size={25} />
            <a href="#" >
              Business Wallet
            </a>
          </li>
          
          {/* P2P Trade Wallet */}
          <li className={`mb-4 flex items-center p-3 rounded-lg  hover:bg-white-100 ${activeItem === 'trade' ? 'bg-white-100' : ''}`}  onClick={() => setActiveItem('trade')}>
            <HiMiniArrowPathRoundedSquare className="mr-5" size={25} />
            <a href="#">
              P2P Trade Wallet
            </a>
          </li>
         
        </ul>
        <div className=''>
        <BalanceWallet/>
        </div>
        <div className='my-8'>
        <hr className='border-t border-gray-400'/>
        </div>
        <div>

          <Merchants/>
        </div>
        <div className='my-8 '>
        <hr className='border-t border-gray-400' />
        </div>

        <div>

          <Support/>
        </div>
        <div className='my-8 '>
        <hr className='border-t border-gray-400' />
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
