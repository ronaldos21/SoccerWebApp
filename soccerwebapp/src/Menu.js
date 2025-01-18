import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">MyApp</div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <a href="#home" className="text-white hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-white hover:text-blue-500">
            About
          </a>
          <a href="#services" className="text-white hover:text-blue-500">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-2`}
      >
        <a href="#home" className="block text-white hover:text-blue-500">
          Home
        </a>
        <a href="#about" className="block text-white hover:text-blue-500">
          About
        </a>
        <a href="#services" className="block text-white hover:text-blue-500">
          Services
        </a>
        <a href="#contact" className="block text-white hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Menu;
