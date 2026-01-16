import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from './servicesData'; 

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', color: 'white' }}>
        <h2>Service not found</h2>
        <Link to="/" style={{ color: '#00d084' }}>Return Home</Link>
      </div>
    );
  }

  const handleQuoteClick = () => {
    navigate('/contact', { state: { serviceName: service.title } });
  };

  return (
    <div className="detail-page-wrapper">
      <div className="detail-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        
        <div className="detail-header">
          <div className="detail-icon">{service.icon}</div>
          <h1>{service.title}</h1>
        </div>

        <div className="detail-content">
          <p className="intro-text">{service.description}</p>
          <hr />
          
          <div className="content-grid">
            <div className="text-section">
               <h3>Overview</h3>
               <p className="main-text">{service.details}</p>
            </div>

            <div className="steps-section">
               <h3>Our Process</h3>
               <ul className="steps-list">
                 {service.steps && service.steps.map((step, index) => (
                   <li key={index}>
                     <span className="step-number">{index + 1}</span>
                     {step}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
          
          <div className="action-area">
             <button className="contact-btn" onClick={handleQuoteClick}>
               Get a Quote for {service.title}
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;