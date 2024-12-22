import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <header className="bg-wood-brown shadow-lg">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-black">
          <Link to="/">
            <img
              src="/logofurniture.png" // Replace with your logo file path
              alt="FurnitureFirst"
              className="h-12" // You can adjust the height or width as needed
            />
          </Link>
        </h2>
        {/* Hamburger Menu */}
        <input type="checkbox" id="menu-toggler" className="hidden" />
        <label
          htmlFor="menu-toggler"
          id="hamburger-btn"
          className="lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            width="24px"
            height="24px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
          </svg>
        </label>
        {/* Navbar Links */}
        <ul className="all-links lg:flex hidden space-x-6 text-black">
          <li>
            <Link
              to="/"
              className="px-4 py-2 text-black text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="px-4 py-2 text-black text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 text-black text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="px-4 py-2 text-black text-lg rounded-[30px] transition duration-300 hover:text-[#3b141c] hover:bg-[#f3961c]"
            >
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Mobile Menu */}
        <ul className="all-links flex-col lg:hidden hidden absolute bg-wood-brown top-16 right-6 w-40 rounded-lg shadow-lg text-white text-center">
          <li className="py-2">
            <Link to="/" className="block hover:text-golden-yellow">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/services" className="block hover:text-golden-yellow">
              Services
            </Link>
          </li>
          <li className="py-2">
            <Link to="/portfolio" className="block hover:text-golden-yellow">
              Portfolio
            </Link>
          </li>
          <li className="py-2">
            <Link to="/about" className="block hover:text-golden-yellow">
              About Us
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact" className="block hover:text-golden-yellow">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
