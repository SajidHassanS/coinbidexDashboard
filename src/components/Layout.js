// components/Layout.js
import React from 'react';
import Sidebar from './sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex w-40 gap-10">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
