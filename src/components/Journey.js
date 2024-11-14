import React from "react";
import SectionHeading from "./Heading";

const AspmJourney = () => {
    return (
        <>

            <div className="bg-grad2 h-full">
                <div className="relative overflow-hidden bg-bgSecondary bg-grad1 ">
                    {/* Curved Background */}


                    {/* Content Section */}
                    <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16   ">
                        {/* Left Section: Illustration */}
                        <div className="lg:px-16 md:px-16  flex flex-col md:flex-row lg:flex-row items-center">
                            <div className="flex-1 mb-8 lg:mb-0">
                                {/* Placeholder for image */}
                                {/* <div className="w-31 h-31 mx-auto lg:mx-0 bg-gray-300 rounded-lg flex items-center justify-center">
                                    <span className="text-black opacity-85">Image Placeholder</span>
                                </div> */}
                                <img src="./images/discovery@3x.svg" alt="" />
                            </div>

                            {/* Right Section: Text */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-md font-regular uppercase tracking-wide text-black opacity-70 font-secondary ">
                                    Automated Business Application Discovery
                                </h3>
                                <h2 className="text-4xl font-medium text-black opacity-85 my-4 font-primary py-2 leading-extra-loose">
                                    Accelerate your ASPM  <br></br>journey
                                </h2>
                                <p className="text-black opacity-70 font-secondary font-light md:w-11/12 lg:w-11/12">
                                    Vista automates your business application discovery,
                                    integrates progressive threat modeling across popular security
                                    solutions like CNAP and SAST, and delivers prioritized, actionable
                                    insights tailored to your organization’s unique environment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 ">
                        {/* Right Section: Text */}
                        <div className="lg:px-16 md:px-16 py-2 flex flex-col md:flex-row lg:flex-row items-center">
                            <div className="flex-1 text-center lg:text-left ">
                                <h3 className="text-md font-regular uppercase tracking-wide text-black opacity-70 font-secondary">
                                    PROGRESSIVE, CONTINUOUS, INTEGRATED THREAT MODELING
                                </h3>
                                <h2 className="text-4xl font-medium text-black opacity-85 my-4 font-primary py-2 leading-extra-loose">
                                    In control of your evolving  <br></br>security posture
                                </h2>
                                <p className="text-black opacity-70 font-secondary font-light md:w-11/12 lg:w-11/12">
                                    Using Al and our 100+ years of the combined cybersecurity experience, Vista learns about your business applications, provides threat models evolving with continuous drift in security posture, and integrates seamlessly with your existing security tools.
                                </p>
                            </div>
                            {/* Left Section: Illustration */}
                            <div className="flex-1 mb-8 lg:mb-0">
                                {/* Placeholder for image */}
                                <img src="./images/modelling@3x.svg" alt="" />
                                {/* <img src="./images/image1.png" alt="" /> */}
                            </div>


                        </div>
                    </div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 lg:pb-16 ">
                        {/* Left Section: Illustration */}
                        <div className="lg:px-16 md:px-16 flex flex-col md:flex-row lg:flex-row items-center">
                            <div className="flex-1 mb-8 lg:mb-0">
                                {/* Placeholder for image */}
                                <img src="./images/insight@3x.svg" alt="" />
                                {/* <img src="./images/image1.png" alt="" /> */}
                            </div>

                            {/* Right Section: Text */}
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-md font-regular uppercase tracking-wide text-black opacity-70 font-secondary">
                                    PRIORITIZED TAILORED AND ACTIONABI F INSIGHTS
                                </h3>
                                <h2 className="text-4xl font-medium text-black opacity-85 my-4 font-primary py-2 leading-extra-loose">
                                    Remediate with confidence <br></br> at speed
                                </h2>
                                <p className="text-black opacity-70 font-secondary font-light md:w-11/12 lg:w-11/12">
                                    With FortiMinds Secure, you can reduce risks effectively and protect what matters most without overburdening your team.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AspmJourney;
