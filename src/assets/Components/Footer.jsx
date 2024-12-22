import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 shadow-lg">
      <div className="container mx-auto text-center">
        {/* Logo or Name */}
        <h2 className="text-xl font-bold mb-2">Furniture First</h2>

        {/* Links */}
        <ul className="flex justify-center space-x-6 mb-4">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-yellow-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} FurnitureFirst. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
