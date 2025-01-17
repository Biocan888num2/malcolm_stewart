"use client";

import { useState } from 'react';
import './Dropdown.css'; // Import the CSS file

const ProjectDropdown = ({ projects, onProjectSelect, activeSwiper, fontClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProjectSelect = (project) => {
    onProjectSelect(project.index);
    setIsOpen(false);
  };

  const selectedProject = projects.find(project => project.index === activeSwiper);

  return (
    <div className={`relative ${fontClass}`}> 
      <button 
        className={`dropdown-button ${fontClass}`}  
        onClick={toggleDropdown}
        aria-label="Select Project"
      >
        {isOpen ? '▼' : '►'} {selectedProject?.label}
      </button>
      {isOpen && (
        <div className={`dropdown-menu ${fontClass}`}>
          {projects.map((project) => (
            <button 
              key={project.index} 
              className={`dropdown-item ${activeSwiper === project.index ? 'active' : ''} ${fontClass}`} 
              onClick={() => handleProjectSelect(project)}
            >
              {project.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDropdown;
