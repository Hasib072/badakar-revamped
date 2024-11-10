// src/pages/PageUnderConstruction.jsx
import React, { useEffect } from 'react';
import backgroundImage from '../assets/aboutbg3.jpg'; // Finished Image
import overlayImage from '../assets/aboutbg3.jpg'; // Unfinished Image
import './HeroSection.css'; // Import the CSS file
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos';
import { Link } from 'react-router-dom';


const PageUnderConstruction = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,      // Whether animation should happen only once while scrolling down
    });
  }, []);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative flex items-center justify-center bg-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        height: '100vh', // Full viewport height for better centering
        maxHeight: '100vh' 
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
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Informational Text */}
        <div data-aos="fade-in" className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Page Under Construction
          </h1>
          <p className="text-lg md:text-xl text-white drop-shadow-lg">
            We're working hard to bring you this page. Stay tuned!
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div data-aos="fade-up" data-aos-delay="200" className="mb-6">
          <Link
            to="/#"
            className="inline-block px-2 md:px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-600/50 hover:text-white transition duration-300"
          >
            Return Home
          </Link>
        </div>

        {/* Social Media Icons */}
        <div data-aos="fade-up" data-aos-delay="400" className="flex space-x-4">
          <a 
            href='https://www.facebook.com/badakarindia' 
            className='text-white hover:text-blue-400' 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className='text-2xl' />
          </a>
          <a 
            href='https://x.com/i/flow/login?redirect_after_login=%2FBadakarInterio1' 
            className='text-white hover:text-gray-800' 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter className='text-2xl' />
          </a>
          <a 
            href='https://www.instagram.com/badakarinteriors/' 
            className='text-white hover:text-[#fc2d75]' 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <RiInstagramFill className='text-2xl' />
          </a>
          <a 
            href='https://www.linkedin.com/company/badakar/' 
            className='text-white hover:text-[#0882bd]' 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className='text-2xl' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageUnderConstruction;
