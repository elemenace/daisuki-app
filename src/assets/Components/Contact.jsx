import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-wood-brown text-black py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center mb-12 leading-relaxed">
          Have questions or need assistance? Reach out to our friendly team at{" "}
          <span className="text-golden-yellow font-bold">FurnitureFirst</span>.
          We're here to help!
        </p>

        {/* Contact Form */}
        <form className="bg-white text-black rounded-lg shadow-lg p-6 md:p-12 max-w-3xl mx-auto">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-golden-yellow focus:outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-golden-yellow focus:outline-none"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-golden-yellow focus:outline-none"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-golden-yellow text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
