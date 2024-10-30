import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white transition-colors"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white transition-colors"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>
        
        <div className="flex justify-center space-x-8 mt-12">
          <a href="https://github.com/simonmantillago" target="_blank" rel="noopener noreferrer" 
             className="text-4xl hover:text-gray-400 transition-colors transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/simonmantillago" target="_blank" rel="noopener noreferrer"
             className="text-4xl hover:text-gray-400 transition-colors transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/simonmantillag" target="_blank" rel="noopener noreferrer"
             className="text-4xl hover:text-gray-400 transition-colors transform hover:scale-110">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;