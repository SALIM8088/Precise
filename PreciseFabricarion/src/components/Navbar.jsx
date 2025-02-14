import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
