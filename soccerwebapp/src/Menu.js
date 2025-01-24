import React, { useState } from "react";
import logo from './assets/logo.png';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-1" style={{"padding-block-end":"0px"}}>
     <div className="flex items-center justify-between" style={{"margin-top":"-18px"}}>
     <div className="flex items-center min-h-[1px] w-full p-6 rounded-lg p-6 lg:overflow-visible">
        <img
          className="object-cover object-center rounded-full h-10 w-10 mr-4"
          src={logo}
          alt="logo"
        />
  <     span className="text-white text-xl font-bold">SoccerQuiz</span>
      </div>


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

        <div className="hidden lg:flex space-x-4"style={{ padding: "2%" }} >
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
