import React from "react";

const Footer = () => {
  return (
    <footer className="bg-textSecondary text-white py-8 font-secondary flex-1 text-center lg:text-left">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 items-center">

        {/* Left Section: Logo and Copyright */}
        <div className="flex flex-col md:flex-row items-center space-y-2  md:space-y-0 md:space-x-2">
          <div className="flex items-center space-x-2">
            {/* Placeholder for the Logo */}
            <img src="./images/FortiMinds logo horizontal footer@3x.svg" alt="" />
          </div>
          <span className="text-xs md:text-sm font-light mt-4">© 2024 FortiMinds Ltd. All rights reserved.</span>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 font-light font-secondary" >
          <a href="#" className="text-xs md:text-sm hover:text-gray-300">
            Cookie settings
          </a>
          <a href="#" className="text-xs md:text-sm hover:text-gray-300">
            Privacy policy
          </a>
          <a href="#" className="text-xs md:text-sm hover:text-gray-300">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
