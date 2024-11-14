import React from 'react';

function HeroSection() {
  return (
    <section className="relative flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-400 text-white py-20 px-8 md:px-16 overflow-hidden">
      {/* Smooth Curved Background SVG */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00bcd4" // Adjust color to match gradient for blending
            fillOpacity="0.7"
            d="M0,224 C480,320 960,128 1440,256L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Illustration */}
        <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
          <img
            src="/path/to/illustration.png" // Replace with your illustration path
            alt="Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="uppercase text-sm font-semibold mb-2">
            Automated Business Application Discovery
          </h2>
          <h1 className="text-4xl font-bold mb-4">
            Accelerate your ASPM journey
          </h1>
          <p className="text-lg text-gray-100">
            Vista automates your business application discovery,
            integrates progressive threat modeling across popular security
            solutions like CNAP and SAST, and delivers prioritized, actionable
            insights tailored to your organization’s unique environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
