// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/BadakarLogoFull.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.scrollY > 30) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }, 10); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[1000] top-0 transition-opacity duration-500 ease-in-out ${
        showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${isMobile ? 'bg-[#022c4b]' : 'bg-transparent'} md:bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-xl font-bold" onClick={closeMobileMenu}>
              <img
                className="h-16"
                src={logo}
                alt="Badakar Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                  }
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/integrated-solutions"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                  }
                  onClick={closeMobileMenu}
                >
                  INTEGRATED SOLUTIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                  }
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                  }
                  onClick={closeMobileMenu}
                >
                  PROJECT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                  }
                  onClick={closeMobileMenu}
                >
                  CAREER
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold border-solid hover:text-yellow-500 border-yellow-500 border-4'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold border-solid border-yellow-500 border-4'
                  }
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none hover:outline-yellow hover:border-yellow-500 focus:text-white bg-transparent"
              aria-label="Toggle menu"
              aria-expanded={isMobile}
              aria-controls="mobile-menu"
            >
              {isMobile ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div id="mobile-menu" className="relative md:hidden bg-[#022c4b] h-[100hv] transition duration-300 ease-in-out text-center z-[1000]">
          <ul className="px-12 pt-2 pb-3 space-y-1 sm:px-20 z-[1000]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/integrated-solutions"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Integrated Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-bold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-bold border-solid border-yellow-500 border-2'
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className='w-screen h-screen bg-[#022c4b] z-0'></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
