import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  const tabs = ['Skills', 'Experience', 'Education', 'Certificates'];

  const tabContent = {
    Skills: [
      'UI Visual Design',
      'UX Research',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Usability Testing'
    ],
    Experience: [
      <>1 Year experience as Ui/Ux designer at <span style={{ color: 'var(--primary-color)' }}>"GKS Infotech, Ernakulam"</span></>,
      <>3 Months Ui/Ux Course at <span style={{ color: 'var(--primary-color)' }}>"Techmindz, Carnival Infopark, Kochi"</span></>
    ],
    Education: [
      <><span style={{ color: 'var(--primary-color)' }}>B.Tech in Computer Engineering</span> - Eranad Knowledge City Technical Campus, Manjeri.</>,
      <><span style={{ color: 'var(--primary-color)' }}>Diploma In Computer Engineering</span> - AKNM GPTC Tirurangadi, Malappuram</>
    ],
    Certificates: [
      'Ui/Ux Course Certificate by Techmindz, Ernakulam',
      'Ui/Ux Designing using Figma Course Certificate by Udemy'
    ]
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        
        <motion.p 
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I'm Amaljith, UI/UX Designer with 1 year of experience. Focused on creating clean, user-friendly digital experiences and simplifying complex workflows and for web and mobile applications.
        </motion.p>
        
        <div className="about-tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <AnimatePresence mode="wait">
              <motion.ul
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="skills-list"
              >
                {tabContent[activeTab].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Leaf size={16} color="var(--primary-color)" className="list-icon" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
