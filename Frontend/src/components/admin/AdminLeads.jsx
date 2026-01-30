import React, { useState } from 'react';
import '../../styles/admin/AdminLeads.css';

const AdminLeads = () => {
  const [leads] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@company.com',
      phone: '+1 234 567 8900',
      company: 'Tech Solutions Inc',
      source: 'Website',
      status: 'New',
      date: '2026-01-29'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@business.com',
      phone: '+1 234 567 8901',
      company: 'Business Corp',
      source: 'Referral',
      status: 'Contacted',
      date: '2026-01-28'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'mbrown@startup.io',
      phone: '+1 234 567 8902',
      company: 'Startup Innovations',
      source: 'Social Media',
      status: 'Qualified',
      date: '2026-01-27'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@enterprise.com',
      phone: '+1 234 567 8903',
      company: 'Enterprise Systems',
      source: 'Website',
      status: 'Contacted',
      date: '2026-01-26'
    },
    {
      id: 5,
      name: 'Robert Wilson',
      email: 'rwilson@agency.com',
      phone: '+1 234 567 8904',
      company: 'Creative Agency',
      source: 'Email Campaign',
      status: 'New',
      date: '2026-01-25'
    }
  ]);

  const [filter, setFilter] = useState('All');

  const getStatusClass = (status) => {
    switch(status) {
      case 'New': return 'lead-status-new';
      case 'Contacted': return 'lead-status-contacted';
      case 'Qualified': return 'lead-status-qualified';
      default: return '';
    }
  };

  const filteredLeads = filter === 'All' 
    ? leads 
    : leads.filter(lead => lead.status === filter);

  return (
    <section className="admin-leads" id="leads">
      <div className="container">
        <div className="section-header">
          <h2>Lead Management</h2>
          <p>Track and manage all your business leads</p>
        </div>

        <div className="leads-controls">
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              All Leads
            </button>
            <button 
              className={`filter-btn ${filter === 'New' ? 'active' : ''}`}
              onClick={() => setFilter('New')}
            >
              New
            </button>
            <button 
              className={`filter-btn ${filter === 'Contacted' ? 'active' : ''}`}
              onClick={() => setFilter('Contacted')}
            >
              Contacted
            </button>
            <button 
              className={`filter-btn ${filter === 'Qualified' ? 'active' : ''}`}
              onClick={() => setFilter('Qualified')}
            >
              Qualified
            </button>
          </div>
          <button className="btn-add-lead">+ Add New Lead</button>
        </div>

        <div className="leads-grid">
          {filteredLeads.map((lead) => (
            <div key={lead.id} className="lead-card">
              <div className="lead-header">
                <div className="lead-avatar">
                  {lead.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="lead-info">
                  <h3>{lead.name}</h3>
                  <p className="lead-company">{lead.company}</p>
                </div>
                <span className={`lead-status ${getStatusClass(lead.status)}`}>
                  {lead.status}
                </span>
              </div>
              
              <div className="lead-details">
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <span className="detail-text">{lead.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📞</span>
                  <span className="detail-text">{lead.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🔗</span>
                  <span className="detail-text">Source: {lead.source}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span className="detail-text">{new Date(lead.date).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="lead-actions">
                <button className="btn-action-sm btn-contact">Contact</button>
                <button className="btn-action-sm btn-qualify">Qualify</button>
                <button className="btn-action-sm btn-details">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminLeads;
