// src/components/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import user0 from '../assets/user.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);
  // Sample testimonial data
  const testimonials = [
    {
      img: `${user1}`,
      name: 'John Doe',
      organization: 'CEO, Tech Innovators',
      message: 'Their expertise in architectural design transformed our workspace into a modern and efficient environment. Highly recommended!',
    },
    {
      img: `${user2}`,
      name: 'Jane Smith',
      organization: 'Head of Operations, Business Corp.',
      message: 'Exceptional service from concept to completion. Their team is professional, creative, and reliable.',
    },
    {
      img: `${user3}`,
      name: 'Emily Johnson',
      organization: 'Creative Director, Design Studio',
      message: 'A seamless experience working with them. They understood our vision and executed it flawlessly.',
    },
    {
      img: `${user4}`,
      name: 'Michael Brown',
      organization: 'Founder, Startup Hub',
      message: 'Their innovative approach and attention to detail set them apart. Our office now inspires creativity and productivity.',
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="bg-gray-100 p-8 max-w-5xl mx-auto rounded-lg mt-[10rem]">
      {/* Start: Article List */}
      <section className="article-list mb-8"></section>
      {/* End: Article List */}

      {/* Why Choose Us Heading */}
      <h2
        data-aos="fade-in"
        className="text-3xl md:text-4xl font-bold font-inter text-center mb-6"
        style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
      >
        WHY CHOOSE US?
      </h2>

      {/* Why Choose Us Content */}
      <p
        className="font-inter text-lg text-gray-700 text-center mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <p>
          We excel at transforming architectural challenges into stunning, functional designs. Our team possesses extensive expertise in a diverse range of architectural styles and interior decorations, catering to multi-location offices, farmhouses, residences, restaurants, as well as industrial and commercial complexes.
        </p>
      </p>

      {/* Testimonials Grid */}
      <div 
        data-aos="slide-up"
        className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className='inline'>
              <div className="inline-block mr-4">
                  <img
                    src={`${testimonial.img}`} // Replace with actual user image if available
                    alt={`${testimonial.name} avatar`}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              <div className="inline-block">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-gray-600">{testimonial.organization}</p>
              </div>
            </div>

            <p className="italic text-center text-lg my-8">"{testimonial.message}"</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
