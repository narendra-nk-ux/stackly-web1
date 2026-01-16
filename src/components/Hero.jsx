import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import teamImage from '../assets/team-collaboration.png';
import ourSkills from '../assets/our-skills.jpg';
import contactUs from '../assets/contact us.jpg';
import './Hero.css';

const whoWeAreImg = teamImage;

const Hero = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/services');
  };

  const services = [
    {
      id: "01.",
      title: "UI/UX Design",
      description: "Mobile applications can be built for specific operating systems, such as iOS or Android, or as cross-platform apps that work on multiple platforms.",
      icon: <IconTriangle />
    },
    {
      id: "02.",
      title: "Digital Marketing",
      description: "Digital marketing branding design focuses on creating a cohesive brand identity. It combines visual elements, messaging, and strategy to enhance recognition.",
      icon: <IconSquare />
    },
    {
      id: "03.",
      title: "Web Developments",
      description: "Developers can deploy hybrid apps across multiple platforms like iOS and Android, saving time and cost compared to building separate native apps.",
      icon: <IconCube />
    },
    {
      id: "04.",
      title: "AI and Automation",
      description: "AI enables systems to perform tasks that typically require human cognitive abilities such as learning, problem-solving, and decision-making.",
      icon: <IconPrism />
    }
  ];

  return (
    <div className="main-wrapper">
      {/* 1. ABOUT SECTION */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="subtitle">ABOUT THE STACKLY</span>
              <h2 className="main-heading">Architecting the Future: <br/>Where Vision Meets Velocity.</h2>
              <p className="description">
                We are a forward-thinking IT collective specializing in the high-stakes 
                world of digital transformation. Beyond simple software development, 
                we act as your strategic partners to establish a <strong>single source of truth</strong> 
                for your business data.
              </p>
              <div className="slogan-box">
                <h3 className="slogan-text">"Precision in every layer. Power in every outcome."</h3>
              </div>
            </div>
            <div className="about-image-wrapper">
              <div className="accent-shape"></div>
              <img src={teamImage} alt="Team collaborating" className="about-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="section who-we-are-section">
        <div className="container">
          <div className="who-grid">
            <div className="who-image-wrapper">
              <img src={whoWeAreImg} alt="Stackly professional working" className="who-image" />
              <div className="play-button-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="who-content">
              <span className="subtitle-green">WHO WE ARE</span>
              <h2 className="who-heading">
                With vast experience in project management, our team delivers practical expertise.
              </h2>
              <div className="who-text-block">
                <span className="small-label">ABOUT US</span>
                <p className="who-desc">
                  Founded in 2015, Stackly has grown into one of the leading and most innovative IT 
                  companies in the industry. With a team of over 120 talented professionals, we 
                  specialize in delivering cutting-edge technology solutions that drive business 
                  success.
                </p>
                <p className="who-desc">
                  Our commitment to innovation, excellence, and customer satisfaction has 
                  positioned us as a trusted partner for businesses seeking to leverage technology 
                  for growth and efficiency.
                </p>
              </div>
              <h3 className="who-footer-text">Innovating today for a smarter tomorrow.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS SECTION */}
      <section className="skills-section">
        <div className="container">
          <div className="skills-wrapper">
            <div className="skills-image-wrapper">
              <img src={ourSkills} alt="Our Skills" className="skills-image" />
            </div>
            <div className="skills-content">
              <span className="skills-subtitle">OUR SKILLS</span>
              <h2 className="skills-heading">
                The ultimate guide to <span className="skills-highlight">marketing success</span>.
              </h2>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-label">Web application</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Mobile application</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Digital marketing</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-label">Artificial Intelligence</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="services-header">
            <span className="subtitle">OUR SPECIALIZE</span>
            <h2 className="section-heading">WHAT WE <span className="highlight">OFFER</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="card-content">
                  <span className="service-number">{service.id}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrapper">
            <button onClick={handleViewAll} className="view-all-btn">
              View all 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-image-wrapper">
              <div className="phone-float">
                <div className="phone-screen-glow"></div>
                <div className="phone-body"></div>
                <div className="phone-message-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="phone-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
              <div className="man-image">
                <img src={contactUs} alt="Contact us" className="man-photo" />
              </div>
            </div>
            <div className="contact-form-wrapper">
              <div className="contact-content">
                <span className="contact-subtitle">GET IN TOUCH</span>
                <h2 className="contact-heading">Send us message</h2>
                <form className="contact-form">
                  <div className="input-group">
                    <input type="text" placeholder="Name *" className="contact-input" required />
                  </div>
                  <div className="name-row">
                    <input type="text" placeholder="First" className="contact-input small" />
                    <input type="text" placeholder="Last" className="contact-input small" />
                  </div>
                  <div className="input-group">
                    <input type="email" placeholder="Email *" className="contact-input" required />
                  </div>
                  <div className="input-group">
                    <textarea 
                      placeholder="Type your message here *" 
                      className="contact-textarea"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Icons
const IconTriangle = () => (
  <svg className="geo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 6l-4.5 9h9L12 6z" />
  </svg>
);

const IconSquare = () => (
  <svg className="geo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M12 3l10 6-10 6-10-6 10-6z" />
    <path d="M2 9l10 6 10-6" />
    <path d="M12 21V9" />
  </svg>
);

const IconCube = () => (
  <svg className="geo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconPrism = () => (
  <svg className="geo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M12 2l10 6-10 6-10-6 10-6z" />
    <path d="M2 14l10 6 10-6" />
    <path d="M22 8v6" />
    <path d="M2 8v6" />
  </svg>
);

export default Hero;
