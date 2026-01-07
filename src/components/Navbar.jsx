// Navigation bar component with logo, menu items, and CTA button
import React from 'react';
import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-[20px] border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 flex items-center justify-between h-[85px]">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo}
            alt="Aadrila.ai Logo" 
            className="h-[50px] w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-[11.25px]">
          <a href="#home" className="px-3 py-2 text-primary font-medium text-base leading-[18px]">
            Home
          </a>
          <a href="#industries" className="px-3 py-2 text-[#1E1C26] font-normal text-base leading-[18px]">
            Industries
          </a>
          <a href="#products" className="px-3 py-2 text-[#1E1C26] font-normal text-base leading-[18px]">
            Products
          </a>
          <a href="#blog" className="px-3 py-2 text-[#1E1C26] font-normal text-base leading-[18px]">
            Blog
          </a>
          <a href="#contact" className="px-3 py-2 text-[#1E1C26] font-normal text-base leading-[18px]">
            Contact Us
          </a>
          <a href="#about" className="px-3 py-2 text-[#1E1C26] font-normal text-base leading-[18px]">
            About Us
          </a>
        </div>

        {/* CTA Button */}
        <button className="hidden lg:flex items-center justify-center gap-2.5 px-9 py-4 bg-primary rounded-[160px] text-white font-semibold text-base leading-5">
          Get a Demo
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
