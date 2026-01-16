import React from 'react';
import './About.css';

import teamImage from '../assets/team-collaboration.png';

const ourSkills = teamImage; 

// 3. Assign placeholders for other sections
const officeImage = teamImage;
const missionImage = teamImage;
const futureImage = teamImage;
const whoWeAreImg = teamImage;

const About = () => {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="content-wrapper">
          <h4 className="subtitle">Who We Are</h4>
          <h1 className="title">Empowering Your Digital Success</h1>
          <p className="hero-text">
            Stackly is more than just a platform; we are the engine behind your workflow efficiency. 
            Since 2015, we've been helping businesses streamline operations and drive growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="grid-two-col">
          <div className="image-wrapper">
            <img src={teamImage} alt="Stackly Team Discussion" className="image" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="label">Years of<br/>Innovation</span>
            </div>
          </div>
          <div className="text-content">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded in 2015, Stackly has grown into one of the leading and most innovative IT companies in the industry. 
              With a team of over 120 talented professionals, we specialize in delivering cutting-edge technology solutions 
              that drive business success.
            </p>
            <p>
              Our commitment to innovation, excellence, and customer satisfaction has positioned us as a trusted partner 
              for businesses seeking to leverage technology for growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="grid-two-col reverse-mobile">
          <div className="text-content">
            <div className="card mission-card">
              <h3>01. Our Mission</h3>
              <p>
                Our mission is simple—create tools that solve real problems. With a strong focus on innovation, 
                reliability, and user satisfaction, we aim to enhance your experience, whether you're an individual 
                or part of a growing business.
              </p>
            </div>
            <div className="card vision-card">
              <h3>02. Our Vision</h3>
              <p>
                We envision a future where technology serves as an enabler for creativity and productivity. 
                Stackly strives to be a leader in providing smart, scalable, and user-friendly tools that cater 
                to the diverse needs of our users.
              </p>
            </div>
          </div>
          <div className="image-wrapper">
            <img src={whoWeAreImg} alt="Strategic Planning" className="image" />
          </div>
        </div>
      </section>

      {/* Why Us / Core Values */}
      <section className="about-values">
        <div className="content-wrapper">
          <h2 className="section-title center">Why Choose Stackly?</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="icon">🚀</div>
              <h4>Innovation First</h4>
              <p>We don't just follow trends; we set them. Our R&D team works tirelessly to bring you the next big thing.</p>
            </div>
            <div className="value-item">
              <div className="icon">🤝</div>
              <h4>User-Centric</h4>
              <p>Every feature we build starts with a user need. Your feedback fuels our engine.</p>
            </div>
            <div className="value-item">
              <div className="icon">🛡️</div>
              <h4>Unmatched Security</h4>
              <p>Your data is our top priority. We employ enterprise-grade security protocols to keep your information safe.</p>
            </div>
            <div className="value-item">
              <div className="icon">🌍</div>
              <h4>Global Scale</h4>
              <p>Built to handle traffic from anywhere, anytime. Scalability is in our DNA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="about-future">
        <div className="grid-two-col">
          <div className="image-wrapper">
            {/* Using ourSkills (which is currently teamImage) to prevent crash */}
            <img src={ourSkills} alt="Future Technology Abstract" className="image" />
          </div>
          <div className="text-content">
            <h2 className="section-title">The Future of Stackly</h2>
            <p>
              We are looking ahead to 2030 with bold ambitions. Our roadmap includes integrating 
              <strong> advanced AI-driven analytics</strong> to predict workflow bottlenecks before they happen.
            </p>
            <ul className="future-list">
              <li><strong>AI Integration:</strong> Smart assistants to automate 40% of manual tasks.</li>
              <li><strong>Eco-Friendly Hosting:</strong> Transitioning to 100% renewable energy servers by 2027.</li>
              <li><strong>Cross-Platform Unity:</strong> A seamless ecosystem across Mobile, Web, and VR interfaces.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;