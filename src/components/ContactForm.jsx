// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Contact Form Section */}
      <section className="bg-white shadow-md rounded-md p-8">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Informational Text */}
          <div className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-4 text-gray-700">
              You are one step closer to building your perfect project.
            </p>
            <h2 className="my-4 text-1xl md:text-2xl font-semibold">
            What will be next step?
            </h2>
            <p className="mb-4 text-gray-700">
              Required scope, timeline, and approximate price will be included if you provide us with detailed information about your project.
            </p>
            <h2 className="my-4 text-1xl md:text-2xl font-semibold">
            Together, we discuss the project.
            </h2>
            <p className="mb-4 text-gray-700">
              Let's get acquainted and explore all possible variants and options.
            </p>
            <p className="mb-4 text-gray-700">
              Let's start building!
            </p>

          </div>
          

          {/* Right Column: Contact Form */}
          <div className="lg:w-3/5">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Write us a few words about your project and we'll prepare a proposal for you within 24 hours.
            </h3>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden input for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot Field */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                </label>
              </p>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="hidden text-sm font-medium text-gray-700">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="hidden text-sm font-medium text-gray-700">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2"
                  placeholder="e.g., (123) 456-7890"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="hidden text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="hidden text-sm font-medium text-gray-700">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="hidden text-sm font-medium text-gray-700">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="mt-1 block w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Map */}
            <div className="lg:w-1/4 mb-8 lg:mb-0 lg:pr-8">
              <h2 className="text-3xl font-bold mb-6">Find Us At</h2>
              <a
                href="https://www.google.com/maps/place/Your+Address+Here"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-md shadow-md"
                ></iframe>
              </a>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:w-3/4">
              <h3 className="text-xl font-semibold mb-4 uppercase text-gray-800">Contact</h3>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-indigo-600 mr-3" />
                <span className="text-gray-700">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-indigo-600 mr-3" />
                <span className="text-gray-700">info@badakar.com</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-indigo-600 mr-3" />
                <span className="text-gray-700">
                  1234 Design Street, Suite 100,<br />
                  City, State, ZIP Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message Modal (Optional) */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Thank you for your message!
            </h2>
            <p className="text-gray-700 mb-6">
              We'll get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
