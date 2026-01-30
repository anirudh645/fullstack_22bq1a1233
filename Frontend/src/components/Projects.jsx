import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg',
      title: 'Real Estate Campaign',
      category: 'Lead Generation',
      description: 'Generated 2,500+ qualified leads for a premium real estate developer.'
    },
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-1.svg',
      title: 'Tech Startup Growth',
      category: 'B2B Marketing',
      description: 'Helped a tech startup achieve 300% growth in customer acquisition.'
    },
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-2.svg',
      title: 'E-commerce Success',
      category: 'Digital Marketing',
      description: 'Increased online sales by 250% through targeted lead generation.'
    },
    {
      image: '/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232-3.svg',
      title: 'Financial Services',
      category: 'Lead Nurturing',
      description: 'Implemented automated lead nurturing system with 85% conversion rate.'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our Success Stories</h2>
          <p>Take a look at some of our recent projects</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" className="project-link">View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
