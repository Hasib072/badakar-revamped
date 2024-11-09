// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-black text-xl font-bold" onClick={closeMobileMenu}>
              MyLogo
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
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  INTIGRATED SOLUTIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  PROJECT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  onClick={closeMobileMenu}
                >
                  CAREEAR
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
                      : "text-black hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-medium"
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
              className="text-gray-300 hover:text-black focus:outline-none focus:text-black"
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
                    ? "block text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                    : "block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
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
                    ? "block text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                    : "block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "block text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                    : "block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                }
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
                    : "block text-black hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
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
