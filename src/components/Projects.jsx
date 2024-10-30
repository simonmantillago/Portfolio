import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Pepitas Confections",
      description: "Application that accurately calculates production costs for various product lines.",
      tech: "Js, Lit",
      image: "/pepitas.png",
      link: "http://github.com/simonmantillago/pepita-confections-project" 
    },
    {
      title: "ElectroStore",
      description: "Application focused on inventory management, orders, and sales.",
      tech: "Java, MySQL",
      image: "/electro.png",
      link: "https://github.com/simonmantillago/electrostoresystem" 
    },
    {
      title: "JSA Services",
      description: "Fullstack application for managing service sales for multiple companies, focusing on API integration, user management",
      tech: "Java, SpringBoot, React, TypeScript, Tailwind CSS",
      image: "/jsa.png",
      link: "https://github.com/simonmantillago/JSA-EnterpriseManager" 

    }
  ];

  return (
    <div id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                />
              <div className="p-6">
                <a 
                  href={project.link}   
                  target="_blank" 
                  rel="noopener noreferrer"  
                  className="text-xl font-bold mb-3 text-blue-500 hover:underline"
                >
                  {project.title}
                </a>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500">Technologies: {project.tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };
  
  export default Projects;