// Sidebar.js

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Import the menu and close icons

const Sidebar = ({ onSidebarToggle, isSidebarOpen,pageName }) => {
  const handleClickOutsideSidebar = (e) => {
    if (isSidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.menu-icon')) {
      onSidebarToggle(false); // Close the sidebar if clicked outside
    }
  };

  // Add event listener when component mounts
  useEffect(() => {
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => {
      document.removeEventListener('click', handleClickOutsideSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-md w-64 p-6 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 sidebar`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <X
            onClick={() => onSidebarToggle(false)} // Close sidebar on click
            className="cursor-pointer text-primary"
            size={24}
          />
        </div>
        <ul className="space-y-4">
          <li className="cursor-pointer text-primary font-medium"><a href="/">Dashboard</a></li>
          <li className="cursor-pointer text-primary font-medium"><a href="/paymentdetails">Payment Details</a></li>
          <li className="cursor-pointer text-primary font-medium"><a href="/eventdetails">Event Details</a></li>
        </ul>
      </div>

      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
        <div
          onClick={() => onSidebarToggle(true)} // Open sidebar on click
          className="cursor-pointer text-primary menu-icon"
        >
          <Menu size={24} /> {/* Menu icon */}
        </div>
        <h1 className="text-2xl font-bold text-primary">{pageName}</h1>
        <span className="text-gray-700 font-medium">Welcome, Admin</span>
      </div>
    </div>
  );
};

export default Sidebar;
