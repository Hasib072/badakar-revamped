// src/components/ExpertiseSection.jsx
import React, { useEffect } from 'react';
import img01 from '../assets/commercial-ceilings.jpg';
import interiorFitouts from '../assets/oQlJhzBFam.jpg';
import securitySurveillance from '../assets/security.jpg';
import mepServices from '../assets/services-to-MEP-engineers.jpg';
import commercialCeilings from '../assets/bespoke-feature-lighting-2.jpg';
import homeAutomation from '../assets/smart-home.jpg';
import fireProtection from '../assets/nice-enterprise-gandhigram-rajkot-safety-equipment-dealers-g78em1aesj.jpg';
import electrical from '../assets/electrical.jpg'
import renovation from '../assets/old-house-living-room-renovation.jpg'


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
      image: img01,
    },
    {
      title: 'Renovation / Restructure / Remodelling',
      image: renovation,
    },
    {
      title: 'Electronics / Electricals',
      image: electrical,
    },
    {
      title: 'Interior Fitouts',
      image: interiorFitouts,
    },
    {
      title: 'Complete MEP Services',
      image: mepServices,
    },
    {
      title: 'Home Automation',
      image: homeAutomation,
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
      image: img01,
    },
  ];

  return (
    <section className="container mx-auto my-16 px-4 max-w-7xl mt-[100px]">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h3
          data-aos="fade-in"
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
                className="w-full h-full object-cover transform transition-transform group-hover:scale-110 filter grayscale group-hover:grayscale-0 transition-filter duration-300 ease-in-out"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-25"></div>

            {/* Expertise Title */}
            <div className="absolute bottom-0 left-0 w-full px-4 py-2">
              <h4 className="text-white text-[1.5rem] font-inter font-bold transition-opacity duration-300 group-hover:opacity-90">
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
