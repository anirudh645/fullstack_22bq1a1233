import React, { useState } from 'react';
import '../../styles/admin/AdminProjects.css';

const AdminProjects = () => {
  const [projects] = useState([
    {
      id: 1,
      name: 'Website Redesign',
      client: 'Tech Corp',
      status: 'In Progress',
      progress: 75,
      dueDate: '2026-02-15',
      team: 5
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'StartUp Inc',
      status: 'In Progress',
      progress: 45,
      dueDate: '2026-03-20',
      team: 8
    },
    {
      id: 3,
      name: 'SEO Optimization',
      client: 'E-Commerce Ltd',
      status: 'Completed',
      progress: 100,
      dueDate: '2026-01-25',
      team: 3
    },
    {
      id: 4,
      name: 'Brand Identity',
      client: 'Fashion Brand',
      status: 'Planning',
      progress: 15,
      dueDate: '2026-04-10',
      team: 4
    },
    {
      id: 5,
      name: 'Marketing Campaign',
      client: 'Retail Chain',
      status: 'In Progress',
      progress: 60,
      dueDate: '2026-02-28',
      team: 6
    },
    {
      id: 6,
      name: 'Cloud Migration',
      client: 'Enterprise Co',
      status: 'Planning',
      progress: 20,
      dueDate: '2026-05-15',
      team: 10
    }
  ]);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Completed': return 'status-completed';
      case 'In Progress': return 'status-progress';
      case 'Planning': return 'status-planning';
      default: return '';
    }
  };

  return (
    <section className="admin-projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Project Management</h2>
          <p>Monitor and manage all active projects</p>
        </div>

        <div className="projects-table-container">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Client</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Due Date</th>
                <th>Team Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="project-name">{project.name}</td>
                  <td>{project.client}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(project.status)}`}>
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{project.progress}%</span>
                    </div>
                  </td>
                  <td>{new Date(project.dueDate).toLocaleDateString()}</td>
                  <td>{project.team} members</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-action btn-view">View</button>
                      <button className="btn-action btn-edit">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AdminProjects;
