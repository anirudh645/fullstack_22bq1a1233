import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Business with Our Lead Generation Solutions</h1>
            <p>We help businesses grow by generating high-quality leads that convert into loyal customers.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg" alt="Hero" />
            <div className="hero-shapes">
              <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (shapes)/Ellipse 7.svg" alt="shape" className="shape shape-1" />
              <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (shapes)/Ellipse 8.svg" alt="shape" className="shape shape-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
