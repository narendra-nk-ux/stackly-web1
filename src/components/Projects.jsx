import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Projects.css';
import defaultProjectImg from '../assets/team-collaboration.png'; 

const Projects = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleKnowMore = () => {
    setShowModal(true); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  
  const projectData = [
    {
      title: "Boomerangs",
      category: "Retail & Branding",
      description: "A complete digital transformation including brand identity and customer loyalty systems.",
      link: "https://www.boomerangs-example.com", 
      color: "#2c3e50"
    },
    
    {
      title: "Landscape Realty",
      category: "Real Estate",
      description: "Interactive property listing platform with virtual tour integrations and CRM management.",
      link: "https://www.landscaperealty-example.com",
      color: "#27ae60"
    },
    {
      title: "Zevation",
      category: "Industrial Services",
      description: "Tank cleaning and industrial maintenance scheduling system with automated reporting.",
      link: "https://www.zevation-example.com",
      color: "#e67e22"
    },
    {
      title: "MoneyTech Fincorp",
      category: "FinTech Solution",
      description: "Secure financial dashboard for loan processing, analytics, and customer wealth management.",
      link: "https://www.moneytech-example.com",
      color: "#2980b9"
    },
    {
      title: "Inspiration Box",
      category: "Education & EdTech",
      description: "Inspire to Aspire: An educational platform connecting mentors with students globally.",
      link: "https://www.inspirationbox-example.com",
      color: "#8e44ad"
    },
    {
      title: "XLSquare Research",
      category: "Data Analytics",
      description: "Complex data research services platform with real-time visualization and reporting tools.",
      link: "https://www.xlsquare-example.com",
      color: "#c0392b"
    },
    {
      title: "Dream & Magic Media",
      category: "Media & Entertainment",
      description: "High-performance portfolio website and content management system for a creative agency.",
      link: "https://www.dnmmedia-example.com",
      color: "#34495e"
    }
  ];

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        
        {/* Header */}
        <div className="projects-header">
          <span className="subtitle-neon">OUR WORK</span>
          <h2 className="section-heading-light">Featured <span className="text-outline">Projects</span></h2>
          <p className="projects-intro">
            We have delivered excellence for diverse industries. Here are some of our esteemed partners.
          </p>
        </div>
        
        {/* Grid of Projects */}
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="project-image-wrapper" style={{ backgroundColor: project.color }}>
                <span className="placeholder-logo-text">{project.title.charAt(0)}</span>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  Visit Website 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* "Know More Projects" Button Area */}
        <div className="projects-footer">
          <button onClick={handleKnowMore} className="know-more-btn">
            <span>Know More Projects</span>
            <div className="btn-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-8 rounded-xl max-w-md mx-4 shadow-2xl animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Coming Soon</h3>
              <p className="text-gray-600 mb-6">Exciting project content updates will be available professionally soon. Stay tuned!</p>
              <button
                onClick={closeModal}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-medium w-full"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
