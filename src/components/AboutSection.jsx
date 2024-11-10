// src/components/AboutSection.jsx
import React, { useEffect } from 'react';
import mainBanner from '../assets/main-banner1.png'; // Ensure the path is correct
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="container mx-auto my-10 px-[40px] md:px-[120px]">
      <div className="flex flex-wrap justify-center">
        {/* Rotated BADAKAR Text */}
        <div data-aos="slide-up" className="relative left-10 hidden lg:block rotate-90">
          <h1
            className="transform -rotate-90 text-6xl font-bold text-gray-400 mb-1 mt-40"
          >
            BADAKAR
          </h1>
        </div>
        {/* Image */}
        <div className=" relative right-16 hidden lg:block">
          <img
            src={mainBanner}
            alt="Main Banner"
            className="img-fluid float-end flex justify-center items-center w-100 h-100"
            style={{ width: '400px', height: '400px' }}
            data-aos="fade-up-right"
          />
        </div>

        {/* Main Content */}
        <div className=" relative md:right-10 w-full md:w-5/12">

          {/* Heading */}
          <h1
            data-aos="fade-in"
            className=" text-[1.2rem] md:text-[1.8rem] font-bold mt-20 mb-4 font-anton"
          >
            <p>
              BADAKAR, TRANSFORMING YOUR DREAMS AND IMAGINATION <br/>INTO REALITY.
            </p>
          </h1>

          {/* Paragraph */}
          <p  data-aos="fade-in" className="mt-5 text-base text-justify">
          As experts in Commercial & Industrial interior design, we offer a diverse team of highly skilled interior decorators who bring a refined, professional touch to every project.
            <br /><br />
            Our clients receive cutting-edge, SMART & MODERN INTERIOR DESIGNS, meticulously crafted to align with your company’s unique brand identity.
          </p>

          {/* Read More Button */}
          <a
            href="/about"
            className="btn btn-dark btn-sm active font-light float-right mt-5 flex items-center space-x-2"
            style={{ borderRadius: '0px', letterSpacing: '2px'}}
            role="button"
            aria-label="Read more about Badakar"
          >
            <span>KNOW MORE</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
