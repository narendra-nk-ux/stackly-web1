import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Let's Talk</h2>
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p><strong>Email:</strong><br />info@thestackly.com</p>
          <p><strong>Address:</strong><br /> MMR Complex, Periyakollappatty,<br />Chinna Thirupathi, Salem,<br /> Tamil Nadu 636008</p>
          <p><strong>Phone:</strong><br />+91  7010792745</p>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form>
            <div className="form-row">
              <div className="form-group" style={{flex: 1}}>
                <label>First name *</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Last name *</label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <div className="form-group">
              <label>Work email address *</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="form-group">
              <label>How can we help you? *</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>

            <button type="submit" className="btn-submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;