import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import Products from "./assets/Components/Products";
import About from "./assets/Components/About"; // Ensure this path is correct
import Contact from "./assets/Components/Contact";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} /> {/* Correct path */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
