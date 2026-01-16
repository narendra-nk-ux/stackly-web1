import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logoStyle = {
    color: '#fff', fontWeight: '900', fontSize: '1.5rem',
    textDecoration: 'none', borderBottom: '3px solid white',
    paddingBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px'
  };

  const linkStyle = { color: '#cbd5e1', textDecoration: 'none', fontWeight: '500' };
  
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar-container" style={{
      position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
      width: '90%', maxWidth: '1200px', backgroundColor: '#1e293b',
      borderRadius: '12px', padding: '1rem 2rem', display: 'flex',
      justifyContent: 'space-between', alignItems: 'center', zIndex: '1000',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
    }}>
      
      {/* BRAND LOGO - Link to Home */}
      <div className="nav-brand">
        <Link to="/" style={logoStyle}>
          <span style={{ fontSize: '1.5rem' }}>⚡</span>
          THE STACKLY
        </Link>
      </div>

     
      <ul style={{ display: isOpen ? 'flex' : 'flex', gap: '2rem', listStyle: 'none' }} className={isOpen ? "mobile-nav" : "desktop-nav"}>
        <li><Link to="/" style={linkStyle} onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/services" style={linkStyle} onClick={handleLinkClick}>Services</Link></li>
        <li><Link to="/projects" style={linkStyle} onClick={handleLinkClick}>Projects</Link></li>
        <li><Link to="/about" style={linkStyle} onClick={handleLinkClick}>About</Link></li>
      </ul>

      {/* CONTACT BUTTON */}
      <Link to="/contact" style={{
        backgroundColor: '#00b4d8', color: 'white', padding: '0.6rem 1.5rem',
        borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold'
      }} onClick={handleLinkClick}>
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;