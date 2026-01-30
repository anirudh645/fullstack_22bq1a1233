import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Icons)/home.svg',
      title: 'Real Estate Solutions',
      description: 'Comprehensive lead generation for real estate professionals looking to expand their client base.'
    },
    {
      icon: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Icons)/paintbrush-2.svg',
      title: 'Creative Marketing',
      description: 'Innovative marketing strategies designed to capture attention and drive engagement.'
    },
    {
      icon: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Icons)/circle-dollar-sign.svg',
      title: 'Revenue Growth',
      description: 'Data-driven approaches to maximize your ROI and accelerate business growth.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
