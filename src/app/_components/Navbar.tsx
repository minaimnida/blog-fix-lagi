"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          Planto Blog
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-green-800 transition-all duration-300">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-green-800 transition-all duration-300">
            Blog
          </Link>
          <Link href="/about" className="hover:text-green-800 transition-all duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-800 transition-all duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-green-600"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 transition-transform duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 hidden"}`}
      >
        <Link href="/" className="text-lg hover:text-green-800 transition-all duration-300" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link href="/blogs" className="text-lg hover:text-green-800 transition-all duration-300" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link href="/about" className="text-lg hover:text-green-800 transition-all duration-300" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href="/contact" className="text-lg hover:text-green-800 transition-all duration-300" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
