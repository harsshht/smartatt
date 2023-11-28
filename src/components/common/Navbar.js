import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-white text-2xl font-bold border-b-2 border-white px-2 py-1 mb-4 lg:mb-0 lg:mr-4"
          activeClassName="active"
        >
          Smart Attendance
        </NavLink>
        <div className="lg:hidden">
          {/* Hamburger icon for small screens */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {/* Dropdown menu for small screens */}
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-gray-800 p-4">
              <p className="text-white">Welcome!</p>
            </div>
          )}
        </div>
        {/* Regular links for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <p className="text-white">Welcome!</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
