import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from './servicesData'; 
import './Services.css'; 

const Services = () => {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <span className="subtitle">OUR EXPERTISE</span>
        <h2 className="section-heading">Services We <span className="text-outline">Offer</span></h2>
        
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <Link to={`/services/${service.slug}`} className="read-more-btn">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;