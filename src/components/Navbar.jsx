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
      }, 50); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-opacity duration-500 ease-in-out ${
        showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-transparent`}
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
                      ? 'text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
                      : 'text-white hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold'
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
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
        <div id="mobile-menu" className="md:hidden bg-gray-800 transition duration-300 ease-in-out">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                    ? 'block text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                    : 'block text-white hover:text-yellow-500 px-3 py-2 rounded-md text-base font-semibold'
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
