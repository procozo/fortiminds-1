import React from "react";

const Services = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white lg:px-16 md:px-16 md:py-8" >
        {/* Curved Background */}


        {/* Content Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 py-4">

          {/* Left Section: Illustration */}
          <div className="flex-1 mb-8 lg:mb-0">
            {/* Placeholder for image */}
            {/* <div className="w-64 h-64 mx-auto lg:mx-0 bg-gray-300 rounded-lg flex items-center justify-center"> */}
            <img src="./images/FortiMinds logo vertical@3x.svg" alt="" className="p-14" />
            {/* </div> */}
          </div>

          {/* Right Section: Text */}
          <div className="flex-1 text-center lg:text-left">

            <h2 className="text-4xl font-medium text-gray-800 my-4 font-primary leading-extra-loose">
              We create products for security engineers like us.
            </h2>
            <p className="text-black opacity-70 font-secondary font-normal text-md w-11/12 ">
              With 100+ years of combined cybersecurity and engineering expertise, FortiMinds has crafted Vista - an ingenious ASPM platform built by security engineers, for security engineers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
