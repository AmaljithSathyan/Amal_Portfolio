import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm Amaljith
          </motion.h3>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="highlight">Ui/Ux Designer</span> Crafting<br />
            User Friendly Digital Experiences.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            design intuitive web and mobile products with strong UX flows,<br />
            clean UI and scalable design systems.
          </motion.p>
          
          <motion.button 
            className="resume-btn"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Amaljith - UI/UX Designer" className="hero-image" />
        </motion.div>
      </div>

      <div className="hero-contact-bar">
        <div className="contact-item">
          <Mail size={16} color="var(--primary-color)" />
          <span>amaljithp07@gmail.com</span>
        </div>
        <div className="contact-item">
          <Phone size={16} color="var(--primary-color)" />
          <span>7306275148</span>
        </div>
        <div className="contact-item">
          <MessageCircle size={16} color="var(--primary-color)" />
          <span>7306275148</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
