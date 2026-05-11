import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import moneyratnaImg from '../assets/moneyratna-new.png';
import connectzitrImg from '../assets/Connectzitr new.png';
import coffeeImg from '../assets/coffee-new.png';
import nestFoodImg from '../assets/nest-food.png';

const projectsData = [
  {
    id: 1,
    title: 'Moneyratna Group',
    subtitle: 'NBFC - Web Application',
    image: moneyratnaImg,
  },
  {
    id: 2,
    title: 'ConnectZitr Website',
    subtitle: 'Alumni-Website Landing Page',
    image: connectzitrImg,
  },
  {
    id: 3,
    title: 'Coffee Website',
    subtitle: 'Coffee shop website',
    image: coffeeImg,
  },
  {
    id: 4,
    title: 'Nest food App',
    subtitle: 'UI/UX Design',
    image: nestFoodImg,
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="see-more-container">
          <a 
            href="#projects" 
            className="see-more"
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
            }}
          >
            {showAll ? 'See Less...' : 'See More...'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
