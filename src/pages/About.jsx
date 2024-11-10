// src/pages/About.jsx
import React, {useEffect} from 'react';
import backgroundImage from '../assets/aboutbg.jpg'; // Finished Image
import overlayImage from '../assets/aboutbg.jpg'; // Unfinished Image
import './HeroSection.css'; // Import the CSS file
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import logo from '../assets/BadakarLogoFull.png'
import officeimage from '../assets/image9.jpg'
import AOS from 'aos';


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="page">
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
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-5 md:px-48">
        {/* Hero Text */}
        <div data-aos="fade-in" className="text-center">
          {/* <h1 className="font-anton text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          BADAKAR
          </h1> */}
          <div className='flex justify-center items-center'>
            <img
            src={logo}
            className='md:h-40 justify-center items-center my-[25px]'
            >
            </img>
          </div>
          <h1 className="font-anton text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Crafting Dreams Into Reality
          </h1>
          {/* <h1 className="font-anton text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          CRAFTING DREAMS INTO REALITY.
          </h1> */}
          <h2 className="mt-4 text-1xl md:text-2xl text-white drop-shadow-lg font-semibold">
          From concept to completion, we transform spaces with visionary designs and unparalleled craftsmanship for the modern world.
          </h2>
          
          <div className='mt-8'>

          <div className="inline mr-5">
            <a
              href="https://drive.google.com/file/d/1jnAoG139EZbv-depo5SgV7gcCMIk8zkN/view"
              className="inline-block px-2 md:px-6 py-3 border-solid border-yellow-500 border-2 text-white font-semibold rounded-md shadow hover:bg-yellow-600/50 hover:text-white transition duration-300" target = "_blank" rel = "noopener noreferrer"
            >VIEW BROSCHER
            </a>
            
          </div>
          <div className="inline">
            <a
              href="/contact"
              className="inline-block px-2 md:px-6 py-3 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-600/50 hover:text-white transition duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Other Content */}
    {/* New "WHO ARE WE?" Section */}
      <section className="py-16 bg-white"
      data-aos="fade-in"
      >
        <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div
          className='hidden md:block bg-gray-100 flex-col h-[450px] w-[100%]'
          >
            <img src={officeimage} alt="Office Image" className='object-cover w-[100%] h-[100%]' />
          </div>

          <div className='flex-col px-10'>
          
          <h2
            className="text-3xl md:text-4xl font-bold text-left text-gray-800 mb-8"
            data-aos="fade-in"
          >
            WHO ARE WE?
          </h2>

          {/* Section Paragraph */}
          <p
            className="text-lg md:text-xl text-gray-600 text-justify leading-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Badakar is your partner in transforming spaces, specializing in Commercial Interiors and Luxury Residential Interiors. From end-to-end interior services, including fit-outs, MEP, fire protection, and home automation, we bring to life spaces that reflect both function and style. Transforming any structure into a personalized, inspiring environment that exceeds client expectations.
            <br/><br/>
            We are specialised in artistic and thematic services for both Commercial Interiors & Luxury Residential Interiors End-to-End complete interior services including Interiors Fitouts, MEP services, Fire Protection, Electronic Surveillance Systems, Home Automation. A comprehensive range of modern designs and furnishing are available which outcompetes the peers globally. Any brick structure we can convert to the desire of the client into ones desires. we offer highly accomplished piece of art to the satisfaction of the client.
          </p>

          {/* Call-to-Action Button */}
          <div className='mt-[20px] text-right'
          data-aos="fade-up"
          data-aos-delay="200"
          >
            <a href='https://www.facebook.com/badakarindia' className='text-black' target = "_blank" rel = "noopener noreferrer">
              <FaFacebook className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://x.com/i/flow/login?redirect_after_login=%2FBadakarInterio1' className='text-black' target = "_blank" rel = "noopener noreferrer">
              <FaXTwitter className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://www.instagram.com/badakarinteriors/' className='text-black' target = "_blank" rel = "noopener noreferrer">
              <RiInstagramFill className='inline mr-2 text-[1.5rem]' />
            </a>
            <a href='https://www.linkedin.com/company/badakar/' className='text-black' target = "_blank" rel = "noopener noreferrer">
              <FaLinkedin className='inline mr-2 text-[1.5rem]' />
            </a>
          </div>

          </div>
        </div>
      </section>

      {/* Other Content */}
      {/* You can add more sections below as needed */}
      {/* NEW: WHY CHOOSE US? Section */}
<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    {/* <h2
      className="text-3xl md:text-4xl font-bold uppercase text-center text-gray-800 mb-12"
      data-aos="fade-in"
    >
      WHY CHOOSE US?
    </h2> */}

    {/* Grid Layout: 3 columns on desktop, 2 on tablet, 1 on mobile */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Column 1: WHY CHOOSE US? */}
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-semibold mb-4 uppercase text-gray-800">WHY CHOOSE US?</h3>
        <p className="text-gray-600 mb-6 text-justify">
          With expertise spanning multi-unit offices, residential and commercial complexes, and more, we ensure every project is completed within its timeline, reflecting our history of reliability and excellence. <br/><br/>
        </p>
        <ul className="list-disc list-inside space-y-2 text-justify">
          <li className="text-gray-600">
            <strong>Sophisticated &amp; Durable Designs:</strong> <br/>Our custom interiors blend aesthetic appeal with lasting quality.<br/>
          </li>
          <li className="text-gray-600">
            <strong>Distinctive Craftsmanship:</strong> <br/>Using premium materials, we create spaces that are both unique and timeless.<br/>
          </li>
          <li className="text-gray-600">
            <strong>Transparent Processes:</strong> <br/>Honesty and clarity from start to finish, with a commitment to delivering the best in design.<br/>
          </li>
        </ul>
      </div>

      {/* Column 2: VISION */}
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="text-xl font-semibold mb-4 uppercase text-gray-800">VISION</h3>
        <p className="text-gray-600 text-justify">
        The core of our company's business is to create a new design model that can satisfy people's desires. High standards of service quality and partnerships with recognized brands in the world of design allow us to guarantee every day the competence and experience necessary to implement the service to the end, with attention to every detail and exclusive style. <br/> <br/> Our vision is to be the trusted, durable and generally desired premium luxury furnishings company in the global market, offering cutting-edge innovative design and premium finishes. We will continue to use our years of professional experience to continuously provide exceptional design services that fully meet the needs of our partners and clients. This vision was the foundation of our history and the cultural value of design, which remains the main key to our perspectives.
        </p>
      </div>

      {/* Column 3: MISSION */}
      <div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h3 className="text-xl font-semibold mb-4 uppercase text-gray-800">MISSION</h3>
        <p className="text-gray-600 text-justify">
        Badakar represents the synthesis of professionalism, values ​​and technological innovation: through the experience of the new trends, it is possible, from the first moment, to move within the environments of the project and to be able to choose details, materials and elements, with the support of expert architects and designers. You can consult the designers to jointly define all furniture components, accessories, kitchen and bathroom furniture, selected from the best brands in the world of design and made in India. <br/><br/> Our mission is to create rewarding experience and value that combines functionality with high quality and innovation for our customers. We want every partner and customer experience to be the talk of life. Moreover, to define the most sophisticated and superior standard of quality in all exteriors and interiors.
        </p>
      </div>
    </div>
  </div>
</section>

{/* NEW: INNOVATION and OUR TEAM Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    {/* <h2
      className="text-3xl md:text-4xl font-bold uppercase text-center text-gray-800 mb-12"
      data-aos="fade-in"
    >
      OUR STRENGTHS
    </h2> */}

    {/* Grid Layout: 2 columns on desktop, 1 on mobile */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Column 1: INNOVATION */}
      <div
        className=" p-6 rounded-lg"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-semibold mb-4 uppercase text-gray-800">INNOVATION</h3>
        <p className="text-gray-600 text-justify leading-8">
          Innovation is the core of Badakar’s philosophy. Our team brings creativity to every project, offering a wide array of services, from interior fit-outs and MEP services to home automation and surveillance. Each design reflects our commitment to organized, value-driven living spaces that inspire.
        </p>
      </div>

      {/* Column 2: OUR TEAM */}
      <div
        className=" p-6 rounded-lg"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <h3 className="text-2xl font-semibold mb-4 uppercase text-gray-800">OUR TEAM</h3>
        <p className="text-gray-600 text-justify leading-8">
          Our skilled and dynamic team, equipped with advanced tools and over three years of experience, drives every project with creativity and precision. With specialists in every aspect of interior design from across the country, we ensure top-tier service following strict SOPs. We believe in building lasting relationships, extending our support long after project completion.
        </p>
        <div className='mt-5 text-right'>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="inline bi bi-briefcase-fill text-[40px] pr-0 mr-4 pl-5">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"></path>
          <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"></path>
          </svg>
          <span className='text[16px] inline'>Professionals</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="inline icon icon-tabler icon-tabler-certificate text-[40px] pr-0 mr-4 pl-5">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="15" cy="15" r="3"></circle>
            <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5"></path>
            <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73"></path>
            <line x1="6" y1="9" x2="18" y2="9"></line>
            <line x1="6" y1="12" x2="9" y2="12"></line>
            <line x1="6" y1="15" x2="8" y2="15"></line>
          </svg>
          <span className='text[16px] inline'>Quality Products & Services</span>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

export default About;
