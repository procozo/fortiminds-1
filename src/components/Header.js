import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // max-w-[83%]
        <header className="w-full bg-bgPrimary text-buttonBg font-secondary relative p-8 md:px-24">
            <div className=" mx-auto flex items-center justify-between p-6">
                {/* <h1 className="text-2xl font-bold">FortiMinds</h1> */}
                <img src="./images/FortiMinds logo horizontal@3x.svg" alt="" />

                {/* Desktop Menu */}
                <div className="hidden text-lg md:flex items-center ml-auto space-x-8">
                    <nav className="flex space-x-8">
                        <a href="#product" className="hover:underline">Product</a>
                        <a href="#benefits" className="hover:underline">Benefits</a>
                        <a href="#about us" className="hover:underline">About us</a>
                    </nav>

                    <button className="px-4 py-2 bg-buttonBg text-white rounded hover:bg-gray-200 hover:bg-bgGradientEnd">
                        <a href="#get A Demo" > Get a demo</a>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                {!isMenuOpen && <img src="./images/open.svg" onClick={toggleMenu} className="md:hidden focus:outline-none text-lg" alt="" />}
                {isMenuOpen && <img src="./images/close.svg" onClick={toggleMenu} className="md:hidden focus:outline-none text-lg" alt="" />}

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{ zIndex: 99999 }} className="absolute z-10  top-full left-0 w-full bg-bgGradientStart flex flex-col items-center space-y-4 py-4 md:hidden text-black text-left  p-8">
                    <a href="#product" className="hover:underline text-left w-full px-8">Product</a>
                    <a href="#benefits" className="hover:underline text-left w-full px-8 ">Benefits</a>
                    <a href="#about us" className="hover:underline text-left w-full px-8 ">About us</a>
                    <div className='w-full text-left'>
                        <button className="px-4 py-2 bg-buttonBg text-left  px-8 text-white font-secondary rounded hover:bg-gray-200">
                            <a href="#get A Demo" > Get a demo</a>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
