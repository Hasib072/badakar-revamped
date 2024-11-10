// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import logo from '../assets/BadakarLogoFull.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#022c4b] text-white md:px-20 mt-[100px]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap">
          {/* Column 1: Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-5">
            <img src={logo} alt="Badakar Interiors & Automation Pvt Ltd." className="relative w-60 mb-4 left-[-20px]" />
            <h4 className="text-[1rem] font-semibold mb-2">Badakar Interiors & Automation Pvt Ltd.</h4>
            <p className="text-gray-300 text-sm">
              Badakar Interiors & Automation is the leading Interior design company in Bangalore. We offer various Interior Design and Automation in Bangalore.
            </p>
            {/* Social Media Icons */}
            <div className='mt-6'>
              <a href='https://www.facebook.com/badakarindia' className='text-white hover:text-blue-400 mr-4' target="_blank" rel="noopener noreferrer">
                <FaFacebook className='inline text-2xl' />
              </a>
              <a href='https://x.com/i/flow/login?redirect_after_login=%2FBadakarInterio1' className='text-white hover:text-gray-800 mr-4' target="_blank" rel="noopener noreferrer">
                <FaXTwitter className='inline text-2xl' />
              </a>
              <a href='https://www.instagram.com/badakarinteriors/' className='text-white hover:text-[#fd6431] mr-4' target="_blank" rel="noopener noreferrer">
                <RiInstagramFill className='inline text-2xl' />
              </a>
              <a href='https://www.linkedin.com/company/badakar/' className='text-white hover:text-[#0882bd]' target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='inline text-2xl' />
              </a>
            </div>
          </div>
          
          {/* Column 2: Know More */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Know More</h4>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="text-white hover:text-gray-100 text-sm">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/integrated-solutions" className="text-white hover:text-gray-100 text-sm">Integrated Solutions</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white hover:text-gray-100 text-sm">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/project" className="text-white hover:text-gray-100 text-sm">Project</Link>
              </li>
              <li className="mb-2">
                <Link to="/career" className="text-white hover:text-gray-100 text-sm">Career</Link>
              </li>
              <li>
                <Link to="/contact" className=" text-white hover:text-gray-100 text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Our Services */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Our Services</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Commercial Interiors</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Corporate Interiors</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Residential Interiors</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Home Automations</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Fire Protection & HVAC</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 text-sm text-white">Digital Surveillance</a>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-300 ">More Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Interior Designing In Bangalore</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100 text-sm text-white">Luxury Residential Interior Designing</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-100 text-sm text-white">Mobile: +919611830222</a>
              </li>
              <li>
                <a href="mailto:info@badakar.com" className="hover:text-gray-100 text-sm text-white">Email: info@badakar.com</a>
              </li>
            </ul>
            <h4 className="text-lg font-semibold mt-6 mb-4 text-gray-300 " >Address</h4>
            <p className="text-sm text-gray-300">
              42/1, 9th D Main Rd, RPC Layout, Vijay Nagar, Myysore Rd, Bengaluru, Karnataka 560104.
            </p>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Company Motto */}
          <p className="text-sm text-gray-300 mb-4 md:mb-0">
            BADAKAR Offers end-to-end interior solutions with complete detailing of your project.
          </p>
          
          {/* Middle: Legal Links */}
          <div className="flex space-x-4">
            <a href="/Privacy-policy.html" className="text-sm hover:text-gray-100 text-white">Privacy Policy</a>
            <a href="/Terms-of-uses.html" className="text-sm hover:text-gray-100 text-white">Terms of Use</a>
            <a href="/Legal.html" className="text-sm hover:text-gray-100 text-white">Legal</a>
            <a href="#" className="text-sm hover:text-gray-100 text-white">License</a>
          </div>
          
          {/* Right: Copyright */}
          <p className="text-sm text-gray-300 mt-4 md:mt-0">
            &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
