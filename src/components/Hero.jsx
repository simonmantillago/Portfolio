import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import cvPDF from '../content/Simon_Mantilla_2024-10-04_CVI.pdf';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="h-screen flex items-center justify-center bg-gray-900 text-white p-4 relative">
      <div className="text-center animate-fadeIn">
        <div className="mb-8">
          <img 
            src="/simon.jpg"
            alt="Simon Mantilla" 
            className="w-70 h-60 rounded-full mx-auto mb-6 border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4 hover:text-gray-300 transition-colors">Simon Mantilla</h1>
        <h2 className="text-3xl text-gray-400 mb-8">Software Developer</h2>
        <a 
          href={cvPDF} 
          target="_blank" 
          className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-block"
        >
          CV
        </a>
      </div>
      <div 
        className="absolute bottom-8 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <FaChevronDown className="text-4xl text-white hover:text-gray-300 transition-colors" />
      </div>
    </div>
  );
};

export default Hero;