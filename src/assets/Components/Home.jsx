import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-center bg-cover">
      {/* Image */}
      <img
        src="/furniture.jpg" // Update the path if needed
        alt="Furniture Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-[85%] flex-col items-center justify-center text-center text-white">
        <div className="text mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Premium Furniture for Your Home
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-white text-shadow">
            Discover high-quality furniture that brings comfort, style, and
            functionality to your living space. <br />
            Create the perfect home with our exclusive collection.
          </p>
        </div>
        {/* Use Link for navigation */}
        <Link
          to="/products"
          className="px-6 py-3 text-lg font-semibold bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Our Products
        </Link>
      </div>
    </section>
  );
};

export default Home;
