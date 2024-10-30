import React from 'react';

const MissionVision = () => {
  return (
    <div id="mission-vision" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flip-card h-64">
            <div className="flip-card-inner relative w-full h-full">
              <div className="flip-card-front absolute w-full h-full bg-gray-900 p-8 rounded-lg text-white flex items-center justify-center">
                <h3 className="text-3xl font-bold">Mission</h3>
              </div>
              <div className="flip-card-back absolute w-full h-full bg-gray-800 p-8 rounded-lg text-white flex items-center justify-center">
                <p className="text-center">
                To provide fast and effective software solutions tailored to companies with an online presence, driving their growth through scalable projects that address their digital needs. With a vision focused on business projection, I strive not only to solve current problems but also to build solutions that contribute to long-term success. Through my skills and dedication, I work to fulfill my dreams while positively impacting each project I undertake.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flip-card h-64">
            <div className="flip-card-inner relative w-full h-full">
              <div className="flip-card-front absolute w-full h-full bg-gray-900 p-8 rounded-lg text-white flex items-center justify-center">
                <h3 className="text-3xl font-bold">Vision</h3>
              </div>
              <div className="flip-card-back absolute w-full h-full bg-gray-800 p-8 rounded-lg text-white flex items-center justify-center">
                <p className="text-center">
                Develop my skills to the fullest, grow in the professional world, and establish my company through discipline and hard work. I focus on implementing best programming practices, contributing to technical improvement in Colombia. My goal is to lead teams and manage large projects, working both for my personal growth and the well-being of my loved ones, while adapting to the diversity of clients the business and technology world offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;