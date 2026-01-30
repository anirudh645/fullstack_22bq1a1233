import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Leading the way in innovative lead generation solutions for businesses worldwide.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Lead Generation</a></li>
              <li><a href="#">Digital Marketing</a></li>
              <li><a href="#">SEO Optimization</a></li>
              <li><a href="#">Social Media</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Lead Generation Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
