import React, { useState } from "react";

const CTA = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        consent: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [responseMesage, setResponseMessage] = useState('')
    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) {
            errors.firstName = "First name is required.";
        }
        if (!formData.lastName.trim()) {
            errors.lastName = "Last name is required.";
        }
        if (!formData.email.trim()) {
            errors.email = "Email address is required.";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            errors.email = "Invalid email address.";
        }
        if (!formData.consent) {
            errors.consent = "You must agree to the terms.";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {



        try {


            e.preventDefault();
            const validationErrors = validateForm();
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length === 0) {

                console.log(formData)

                setFormData({ firstName: "", lastName: "", email: "", consent: false });


                // Send data to Azure Function
                const response = await fetch("https://fortimindsfunctionslist.azurewebsites.net/api/httpTrigger2?", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (data.status == 200) {
                    setIsSubmitted(true);
                    // alert("Form submitted successfully!");
                    setResponseMessage("Form submitted successfully!");
                    console.log("Response from server:", data);
                    setFormData({ firstName: "", lastName: "", email: "", consent: false }); // Reset form
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 3000)
                } else {
                    setResponseMessage(data.error || "Error submitting form.");
                    setTimeout(() => {
                        setIsSubmitted(false);
                    }, 3000)
                }
            }


        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("An error occurred while submitting the form.");
        } finally {
            // setIsSubmitted(false);
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b relative from-blue-100 to-blue-200 md:px-24">
            <div className="flex flex-col px-5 md:flex-row w-full items-center relative z-10">
                {/* Form Section */}
                <div className="w-full p-8 mx-auto md:w-fit flex-1 text-center lg:text-left px-8">
                    <h3 className="text-md uppercase text-black opacity-70 font-normal mb-2">
                        Get a Demo
                    </h3>
                    <h2 className="text-4xl font-medium text-black opacity-85 mb-4 font-primary text-center md:text-left lg:text-left py-3 leading-extra-loose">
                        Stay in the loop - Sign up
                        today!
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* First Name */}
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={` border border-[rgba(255,255,255,0.5)]   border-solid w-full px-4 py-3 placeholder:text-black placeholder:opacity-50  bg-lightBackground rounded-xs ${errors.firstName ? "border-red-500" : "border-white"
                                    }`}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-left text-sm mt-1">{errors.firstName}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={` border border-[rgba(255,255,255,0.5)]   border-solid w-full px-4 py-3 placeholder:text-black placeholder:opacity-50  bg-lightBackground rounded-xs ${errors.firstName ? "border-red-500" : "border-white"
                                    }`}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-left text-sm mt-1">{errors.lastName}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Work email address*"
                                value={formData.email}
                                onChange={handleChange}
                                className={` border border-[rgba(255,255,255,0.5)]   border-solid w-full px-4 py-3 placeholder:text-black placeholder:opacity-50  bg-lightBackground rounded-xs ${errors.firstName ? "border-red-500" : "border-white"
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-left text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Consent */}
                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="opacity-40 text-blue-600 border-gray-300 rounded custom-checkbox"
                            />

                            <label className="text-black opacity-70 font-normal text-md font-secondary text-left">
                                By submitting this form I agree to receive communications from
                                FortiMinds. For more details, see our Privacy Statement.
                            </label>
                        </div>
                        {errors.consent && (
                            <p className="text-red-500 text-left text-sm mt-1">{errors.consent}</p>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-buttonBg text-white font-medium rounded-md hover:bg-blue-900 py-3"
                        >
                            Submit
                        </button>
                    </form>
                    {isSubmitted && (
                        <p className="text-white text-sm mt-4 bg-black p-2 text-center font-secondary font-light opacity-85 rounded-sm ">
                            Your details has been submitted successfully!
                        </p>
                    )}
                </div>

                {/* Placeholder for Image Section */}
                <div className="w-full hidden md:block md:w-1/2 bg-cover bg-center relative" style={{ backgroundImage: "url('/path/to/your/image.png')" }}>
                    {/* Add a placeholder image URL above */}

                </div>

            </div>
            <img src="./images/constellation-full@3x.svg" className="absolute hidden md:block lg:block right-0 bottom-0" alt="" />

            <img src="./images/bottomvector.svg" className="opacity-10 h-2/3 hidden md:block absolute bottom-0 right-0" alt="" />

        </div>
    );
};

export default CTA;
