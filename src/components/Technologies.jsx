import React from 'react';
import { FaJava, FaDatabase, FaJs, FaReact, FaGitAlt, FaPython, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss } from 'react-icons/si';

const Technologies = () => {
  const techs = [
    { name: "Java", icon: FaJava },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "MySQL", icon: FaDatabase },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Git", icon: FaGitAlt },
    { name: "Python", icon: FaPython },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss }
  ];

  return (
    <div id="technologies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              <tech.icon className="text-5xl mb-2 text-gray-700" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;