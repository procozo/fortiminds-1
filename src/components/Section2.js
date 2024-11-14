import React from 'react';

function CustomerSection() {
    return (
        <section id="product" className="relative flex items-center justify-center bg-white text-black py-8 px-8 md:px-16 overflow-hidden">
            {/* Smooth Curved Background SVG */}


            {/* Content */}
            <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center">
                {/* Left Side: Illustration */}
                <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
                    <img
                        src="./images/core offering@3x.svg" // Replace with your illustration path
                        alt="Illustration"
                        className="max-w-full h-auto"
                    />





                </div>

                {/* Right Side: Text */}
                <div className="flex-1 text-center md:text-left ">

                    <p className="text-2xl text-black opacity-70 font-secondary font-regular md:w-11/12 lg:w-11/12 ">
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

export default CustomerSection;
