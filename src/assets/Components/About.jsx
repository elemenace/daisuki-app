import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-wood-brown text-black py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg mb-12 leading-relaxed">
          At{" "}
          <span className="text-golden-yellow font-bold">FurnitureFirst</span>,
          we are passionate about crafting high-quality, stylish, and durable
          furniture that transforms spaces into elegant havens. Our mission is
          to provide exceptional furniture solutions that blend comfort,
          functionality, and design.
        </p>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="team-member bg-white text-black rounded-lg shadow-lg p-6">
            <img
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-sm text-gray-600">Founder & Designer</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member bg-white text-black rounded-lg shadow-lg p-6">
            <img
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-sm text-gray-600">Master Craftsman</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member bg-white text-black rounded-lg shadow-lg p-6">
            <img
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-bold">Sarah Brown</h3>
            <p className="text-sm text-gray-600">Marketing Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
