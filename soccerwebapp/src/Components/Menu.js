import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png"; // Import the logo image

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-green-700 p-4">
            {/* Top Bar */}
            <div className="flex items-center justify-between" style={{ "margin-top": "-18px" }}>
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


                {/* Desktop Navigation */}
                <div className="hidden lg:flex space-x-6">
                    <Link to="/" className="text-white hover:text-yellow-400">
                        Home
                    </Link>
                    <Link to="/quiz" className="text-white hover:text-yellow-400">
                        Quiz
                    </Link>
                    <Link to="/leaderboard" className="text-white hover:text-yellow-400">
                        Leaderboard
                    </Link>
                    <Link to="/about" className="text-white hover:text-yellow-400">
                        About
                    </Link>
                    <Link to="/contact" className="text-white hover:text-yellow-400">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4 space-y-2`}
            >
                <Link to="/" className="block text-white hover:text-yellow-400">
                    Home
                </Link>
                <Link to="/quiz" className="block text-white hover:text-yellow-400">
                    Quiz
                </Link>
                <Link to="/leaderboard" className="block text-white hover:text-yellow-400">
                    Leaderboard
                </Link>
                <Link to="/about" className="block text-white hover:text-yellow-400">
                    About
                </Link>
                <Link to="/contact" className="block text-white hover:text-yellow-400">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Menu;
