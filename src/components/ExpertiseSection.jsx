// src/components/ExpertiseSection.jsx
import React, { useEffect } from 'react';
import interiorFitouts from '../assets/interior-fitouts.jpg';
import securitySurveillance from '../assets/security-surveillance.jpg';
import mepServices from '../assets/mep-services.jpg';
import commercialCeilings from '../assets/commercial-ceilings.jpg';
import homeAutomation from '../assets/home-automation.jpg';
import fireProtection from '../assets/fire-protection.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExpertiseSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  const expertiseData = [
    {
      title: 'Fresh Commercial & Residential Interiors',
      image: interiorFitouts,
    },
    {
      title: 'Renovation / Restructure / Remodelling',
      image: securitySurveillance,
    },
    {
      title: 'Electronics / Electricals',
      image: mepServices,
    },
    {
      title: 'Interior Fitouts',
      image: commercialCeilings,
    },
    {
      title: 'Complete MEP Services',
      image: homeAutomation,
    },
    {
      title: 'Home Automation',
      image: fireProtection,
    },
    {
      title: 'Security Surveillance',
      image: securitySurveillance,
    },
    {
      title: 'Fire Protection',
      image: fireProtection,
    },
    {
      title: 'Let`s Talk',
      image: fireProtection,
    },
  ];

  return (
    <section className="container mx-auto my-16 px-4 max-w-7xl mt-[100px]">
      {/* Title Section */}
      <div className="text-center mb-12">
        <span className="flex justify-center items-center font-light tracking-wider mb-4">
          <span>OUR EXPERTISE</span>
        </span>
        <h3
          data-aos="zoom-in"
          className="text-3xl md:text-4xl font-bold font-inter mb-4"
        >
          <p>PASSION INTO INTERIOR SERVICES.</p>
        </h3>
        <p className="mt-4 font-inter text-lg text-gray-700">
          The elegance meets efficiency in professional projects, transforming your spaces with our expertise.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            {/* Expertise Image with 4:3 Aspect Ratio */}
            <div className="aspect-w-4 aspect-h-3">
              <img
                src={expertise.image}
                alt={expertise.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-25"></div>

            {/* Expertise Title */}
            <div className="absolute bottom-0 left-0 w-full text-center px-4 py-2">
              <h4 className="text-white text-lg font-inter font-semibold transition-opacity duration-300 group-hover:opacity-90">
                {expertise.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
