import React, { useState } from 'react';
import '../../styles/admin/AdminContacts.css';

const AdminContacts = () => {
  const [contacts] = useState([
    {
      id: 1,
      name: 'Alice Thompson',
      email: 'alice.thompson@email.com',
      subject: 'Partnership Inquiry',
      message: 'I would like to discuss a potential partnership opportunity...',
      date: '2026-01-30',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 2,
      name: 'David Martinez',
      email: 'david.m@company.com',
      subject: 'Service Information',
      message: 'Could you provide more information about your services?',
      date: '2026-01-29',
      status: 'Responded',
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'Jessica Lee',
      email: 'jessica.lee@business.io',
      subject: 'Quote Request',
      message: 'We need a quote for a complete website redesign project...',
      date: '2026-01-29',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 4,
      name: 'Christopher Wang',
      email: 'chris.wang@startup.com',
      subject: 'Technical Support',
      message: 'Having some issues with the implementation...',
      date: '2026-01-28',
      status: 'In Progress',
      priority: 'Medium'
    },
    {
      id: 5,
      name: 'Amanda Garcia',
      email: 'agarcia@enterprise.com',
      subject: 'General Inquiry',
      message: 'I came across your website and wanted to learn more...',
      date: '2026-01-27',
      status: 'Responded',
      priority: 'Low'
    },
    {
      id: 6,
      name: 'James Anderson',
      email: 'j.anderson@agency.com',
      subject: 'Collaboration Proposal',
      message: 'We have an exciting collaboration opportunity to discuss...',
      date: '2026-01-26',
      status: 'Pending',
      priority: 'High'
    }
  ]);

  const getStatusClass = (status) => {
    switch(status) {
      case 'Pending': return 'contact-status-pending';
      case 'In Progress': return 'contact-status-progress';
      case 'Responded': return 'contact-status-responded';
      default: return '';
    }
  };

  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <section className="admin-contacts" id="contacts">
      <div className="container">
        <div className="section-header">
          <h2>Contact Inquiries</h2>
          <p>Manage customer inquiries and support requests</p>
        </div>

        <div className="contacts-list">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-main">
                <div className="contact-avatar">
                  {contact.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="contact-info">
                  <div className="contact-header-row">
                    <h3>{contact.name}</h3>
                    <div className="contact-badges">
                      <span className={`priority-badge ${getPriorityClass(contact.priority)}`}>
                        {contact.priority}
                      </span>
                      <span className={`status-badge ${getStatusClass(contact.status)}`}>
                        {contact.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="contact-email">{contact.email}</p>
                  <h4 className="contact-subject">{contact.subject}</h4>
                  <p className="contact-message">{contact.message}</p>
                  
                  <div className="contact-meta">
                    <span className="contact-date">
                      📅 {new Date(contact.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="contact-actions">
                <button className="btn-action-contact btn-reply">Reply</button>
                <button className="btn-action-contact btn-mark">Mark as Done</button>
                <button className="btn-action-contact btn-delete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminContacts;
