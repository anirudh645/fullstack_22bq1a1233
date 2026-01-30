import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 11.svg',
      name: 'John Anderson',
      position: 'CEO, Tech Solutions',
      text: 'The lead generation services provided by this team have been exceptional. Our business has seen tremendous growth thanks to their expertise.'
    },
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 12.svg',
      name: 'Sarah Mitchell',
      position: 'Marketing Director',
      text: 'Working with this team has been a game-changer for our marketing efforts. The quality of leads we receive is outstanding.'
    },
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/Ellipse 13.svg',
      name: 'Michael Chen',
      position: 'Business Owner',
      text: 'I highly recommend their services. They truly understand what it takes to generate quality leads that convert into customers.'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from businesses we've helped grow</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
