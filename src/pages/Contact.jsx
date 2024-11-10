// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/blueofficebg2.jpg'; // Finished Image
import overlayImage from '../assets/blueofficebg2.jpg'; // Unfinished Image
import './HeroSection.css'; // Import the CSS file
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from '../components/ContactForm';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
    <div
      className="relative flex items-center justify-center bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        height: '680px',
        maxHeight: '680px' 
      }} 
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay Image with Slanting Hover Effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out hero-overlay ${
          isHovered ? 'hovered' : ''
        }`}
        style={{ backgroundImage: `url(${overlayImage})` }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:pl-[10%] w-full px-4">
        {/* Hero Text */}
        <div data-aos="fade-in" className="text-center md:text-left md:w-1/2">
          <h1 className="font-anton text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Contact Us
          </h1>
          <h2 className="mt-4 text-1xl md:text-2xl text-white drop-shadow-lg font-semibold">
          A comprehensive range of modern designs and furnishing are available which outcompetes the peers globally.
          </h2>
          {/* Call-to-Action Button */}
          <div className='mt-[20px]'>
            <a href='https://www.facebook.com/badakarindia' className='text-white hover:text-blue-400' target = "_blank" rel = "noopener noreferrer">
              <FaFacebook className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://x.com/i/flow/login?redirect_after_login=%2FBadakarInterio1' className='text-white hover:text-gray-800' target = "_blank" rel = "noopener noreferrer">
              <FaXTwitter className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://www.instagram.com/badakarinteriors/' className='text-white hover:text-[#fc2d75]' target = "_blank" rel = "noopener noreferrer">
              <RiInstagramFill className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://www.linkedin.com/company/badakar/' className='text-white hover:text-[#0882bd]' target = "_blank" rel = "noopener noreferrer">
              <FaLinkedin className='inline mr-2 text-[1.5rem]' />
            </a>
          </div>
        </div>
      </div>
      {/* Other Content */}
    </div>
    <ContactForm/>
    </>
  );
};

export default Contact;
