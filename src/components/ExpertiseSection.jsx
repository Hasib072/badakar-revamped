// src/components/ExpertiseSection.jsx
import React, { useEffect } from 'react';
import interiorFitouts from '../assets/interior-fitouts.jpg'; // Replace with your actual image paths
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
      title: 'Interior Fitouts',
      image: interiorFitouts,
    },
    {
      title: 'Security Surveillance',
      image: securitySurveillance,
    },
    {
      title: 'MEP Services',
      image: mepServices,
    },
    {
      title: 'Commercial Ceilings',
      image: commercialCeilings,
    },
    {
      title: 'Home Automation',
      image: homeAutomation,
    },
    {
      title: 'Fire Protection',
      image: fireProtection,
    },
  ];

  return (
    <section className="container mx-auto my-10 px-4">
      <div className="flex flex-wrap justify-center items-start">
        {/* Expertise Textual Content */}
        <div className="w-full lg:w-4/12 p-4">
          <span className="flex items-center font-light tracking-wider">
            {/* SVG Dash Icon */}
            <span>OUR EXPERTISE</span>
          </span>
          <h3
            data-aos="zoom-in"
            className="text-2xl md:text-3xl font-bold mt-5 font-inter text-left"
          >
            <strong>PASSION INTO</strong>
            <br />
            <strong>INTERIOR SERVICES.</strong>
          </h3>
          <p className="mt-5 font-inter text-base text-justify">
            The elegance meets efficiency in professional projects.
            <br /><br />
            • Fresh Commercial &amp; Residential Interiors.<br />
            • Renovation / Restructure / Remodelling.<br />
            • Electronics / Electricals.<br />
            • Interior Fitouts.<br />
            • Complete MEP Services.<br />
            • Home Automation.<br />
            • Security Surveillance.<br />
            • Fire Protection.<br />
          </p>
        </div>

        {/* Expertise Images Grid */}
        <div className="w-full lg:w-8/12 p-4">
          <div className="flex flex-wrap -mx-2">
            {expertiseData.map((expertise, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div
                  className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
                  data-aos="fade-up"
                >
                  <img
                    src={expertise.image}
                    alt={expertise.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-inter font-semibold text-gray-800">
                      {expertise.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
