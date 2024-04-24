"use client";

import React,{ useState } from 'react';
import { FiHome, FiCreditCard, FiUsers } from 'react-icons/fi';
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import BalanceWallet from '../balanceWallet/BalanceWallet';
import Merchants from '../merchants/Merchants';
import Support from '../support/Support';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import the usePathname hook

const Sidebar = () => {
  // Get the current pathname
 
  const pathname = usePathname();

  return (
    <div className="bg-white-500 text-white w-96 mt-7 pl-8 flex-shrink-0">
      <div className="p-4">
        {/* Sidebar Logo */}
        <div className="flex items-center mb-8">
          <img src="/logonew.png" alt="Logo" className="w-10 h-10 mr-2" />
          <span className="text-3xl font-bold">Coinbidex</span>
        </div>

        {/* Sidebar Items */}
        <ul>
          {/* Personal Wallet */}
          <Link href="/" passHref>
            <li
              className={`mb-4 flex items-center p-3 rounded-lg hover:bg-white-100 ${
                pathname === '/personalWallet' ? 'bg-white-100' : ''
              }`}
            >
              <FiHome className="mr-5" size={25} />
              Personal Wallet
            </li>
          </Link>

          <Link href="/businessWallet" passHref>
            <li
              className={`mb-4 flex items-center p-3 rounded-lg hover:bg-white-100 ${
                pathname === '/businessWallet' ? 'bg-white-100' : ''
              }`}
            >
              <FiCreditCard className="mr-5" size={25} />
              Business Wallet
            </li>
          </Link>

          <Link href="/p2pTrade" passHref>
            <li
              className={`mb-4 flex items-center p-3 rounded-lg hover:bg-white-100 ${
                pathname === '/p2pTrade' ? 'bg-white-100' : ''
              }`}
            >
              <HiMiniArrowPathRoundedSquare className="mr-5" size={25} />
              P2P Trade Wallet
            </li>
          </Link>
        </ul>

        <BalanceWallet />

        <hr className="my-8 border-t border-gray-400" />


      

        <Support />

        <hr className="my-8 border-t border-gray-400" />
      </div>
    
    </div>
  );
};

export default Sidebar;
