"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RiSearchLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full px-8 py-4 fixed top-0 z-50 bg-gradient-to-r from-black via-red-900 to-black shadow-lg">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto text-white">
        {/* Left Section */}
        <div className="flex items-center">
          <RiMenuLine className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
          <h1 className="text-3xl font-serif ml-4">Menu</h1>
        </div>

        {/* Center Section */}
        <nav className="hidden md:flex items-center space-x-6 text-sm mr-24 font-medium">
          <a href="#" className="hover:text-red-500 transition-all">Drinks</a>
          <a href="#" className="hover:text-red-500 transition-all">Categories</a>
          <a href="#" className="hover:text-red-500 transition-all">Buy Franchise</a>
          <div className="h-[2px] w-[150px] bg-red-500"></div>
          <Image
            src="/coca-cola-logo-png-3.png"
            alt="Coca-Cola Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg hover:scale-110 transition-all"
          />
          <div className="h-[2px] w-[150px] bg-red-500"></div>
          <a href="#" className="hover:text-red-500 transition-all">Stores</a>
          <a href="#" className="hover:text-red-500 transition-all">Contact</a>
          <a href="#" className="hover:text-red-500 transition-all">Our Story</a>
        </nav>

        {/* Right Section */}
        <RiSearchLine className="text-xl cursor-pointer" />

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-black text-white py-4 px-6 space-y-4 shadow-lg z-40">
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Drinks</a>
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Categories</a>
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Buy Franchise</a>
            <Image
              src="/coca-cola-logo-png-3.png"
              alt="Coca-Cola Logo"
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Stores</a>
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Contact</a>
            <a href="#" className="block text-lg font-medium hover:text-red-500 transition-all">Our Story</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
