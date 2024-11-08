import React, { useState } from 'react';

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
    <div>
      {submitted ? (
        <div>Thank you for your message!</div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Hidden input for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot Field */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
