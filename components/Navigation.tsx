'use client'
import React, { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold">MyLogo</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md::hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-gray-800 overflow-hidden"
        >
          <a href="#home" className="block px-5 py-3 border-b border-gray-700 hover:text-gray-400">Home</a>
          <a href="#about" className="block px-5 py-3 border-b border-gray-700 hover:text-gray-400">About</a>
          <a href="#services" className="block px-5 py-3 border-b border-gray-700 hover:text-gray-400">Services</a>
          <a href="#contact" className="block px-5 py-3 hover:text-gray-400">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
