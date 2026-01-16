import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <span className="subtitle">TESTIMONIALS</span>
        <h2 className="section-heading">What People <span className="text-outline">Say?</span></h2>

        <div className="testimonial-wrapper">
          <div className="quote-icon">“</div>
          
          <div className="testimonial-card">
            <p className="quote-text">
              "I have been hiring people in this space for several years and have never seen 
              this level of professionalism. It feels like you are working with a team 
              that can get the job done right the first time."
            </p>
            
            <hr className="divider"/>

            <div className="user-profile">
              <div className="avatar-circle">JD</div> 
              <div className="user-info">
                <h4>Joe Davis</h4>
                <span>CEO, TechGlobal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;