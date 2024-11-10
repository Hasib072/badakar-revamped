// src/components/Clients.jsx
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Clients = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,      // Whether animation should happen only once while scrolling down
    });
  }, []);

  // Sample clients data
  const clientsData = [
    {
      name: 'Array About',
      image: 'https://www.badakar.com/assets/img/array-about.jpg',
      link: '#', // Replace with actual client website URL
      animation: 'slide-up',
    },
    {
      name: 'GRC Subhiksha',
      image: 'https://www.badakar.com/assets/img/grc-subhiksha-logo.png',
      link: '#',
      animation: 'slide-up',
    },
    {
      name: 'Prestige Glenwood',
      image: 'https://www.badakar.com/assets/img/Prestige-Glenwood-Logo.png',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'LOGO',
      image: 'https://www.badakar.com/assets/img/LOGO.gif',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'Wurfel',
      image: 'https://www.badakar.com/assets/img/wurfel.jpeg',
      link: '#',
      animation: 'flip-left',
    },
    {
      name: 'Park Plaza',
      image: 'https://www.badakar.com/assets/img/Logo-Park-Plaza.jpg',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'IIMB',
      image: 'https://www.badakar.com/assets/img/IIMB%20Logo.jpg',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'FORTIS HOSPITAL',
      image: 'https://www.badakar.com/assets/img/FORTIS%20HOSPITAL.png',
      link: '#',
      animation: 'flip-left',
    },
    {
      name: '3dots',
      image: 'https://www.badakar.com/assets/img/3dots-logo.jpg',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'Brand',
      image: 'https://www.badakar.com/assets/img/brand.gif',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'Ola',
      image: 'https://www.badakar.com/assets/img/ola.jpg',
      link: '#',
      animation: 'slide-right',
    },
    {
      name: 'Kr Hospital',
      image: 'https://www.badakar.com/assets/img/kr-hospital.jpg',
      link: '#',
      animation: 'flip-left',
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-12 mt-[100px]">
      {/* Section Header */}
        
      <div className="flex flex-wrap mb-8">
        <div className="w-full px-2 justify-center">
          <h1 className="text-3xl md:text-4xl font-bold font-inter text-center mb-12" 
            data-aos="fade-in"
          >
            OUR PRESTIGIOUS CLIENTS
          </h1>
        </div>
        <div className="w-full bg-white px-2">
          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {clientsData.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center border-solid border-[1px] border-gray-100 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                data-aos="slide-up"
                data-aos-duration="950"
              >
                <a href={client.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={client.image}
                    alt={`${client.name} Logo`}
                    className="max-h-20 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
          {/* Call-to-Action Button */}
          <div className="flex justify-center mt-8">
            {/* Read More Button */}
          <Link
            to="/our-clients"
            className="btn btn-dark btn-sm active font-light float-right mt-5 flex items-center space-x-2"
            style={{ borderRadius: '0px', letterSpacing: '2px'}}
            role="button"
            aria-label="Read more about Badakar"
          >
            <span>VIEW MORE</span>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
