import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center px-3">
       <IoSearch size={25} color='gray'/>
      </span>
      <input type="text" className="block w-full pl-10 pr-3 py-2  rounded-md bg-white-100  " placeholder="Search" />
    </div>
  );
};

export default SearchInput;
