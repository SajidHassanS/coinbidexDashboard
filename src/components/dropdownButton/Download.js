import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";

const DownloadButton = () => {
  return (
    <button className="flex items-center px-4 py-2 bg-white-100 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        <MdOutlineFileDownload size={25}/>
      <span>Download</span>
     
    </button>
  );
};

export default DownloadButton;
