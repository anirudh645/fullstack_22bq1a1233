import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-fauxels-3182834.svg" alt="About Us" />
            <div className="about-shapes">
              <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (shapes)/Ellipse 17.svg" alt="shape" className="shape shape-1" />
              <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (shapes)/Ellipse 18.svg" alt="shape" className="shape shape-2" />
            </div>
          </div>
          <div className="about-text">
            <h2>About Our Company</h2>
            <p>We are a team of dedicated professionals committed to helping businesses achieve their growth objectives through innovative lead generation strategies.</p>
            <p>With years of experience in the industry, we understand what it takes to attract, engage, and convert high-quality leads into valuable customers.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>10K+</h3>
                <p>Leads Generated</p>
              </div>
              <div className="stat-item">
                <h3>98%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
