import React from 'react';
import '../../styles/admin/AdminStats.css';

const AdminStats = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Leads',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: '👥'
    },
    {
      id: 2,
      title: 'Active Projects',
      value: '47',
      change: '+8.2%',
      trend: 'up',
      icon: '📊'
    },
    {
      id: 3,
      title: 'Conversions',
      value: '892',
      change: '+15.3%',
      trend: 'up',
      icon: '✅'
    },
    {
      id: 4,
      title: 'Pending Contacts',
      value: '156',
      change: '-3.1%',
      trend: 'down',
      icon: '📧'
    }
  ];

  return (
    <section className="admin-stats" id="stats">
      <div className="container">
        <div className="section-header">
          <h2>Statistics Overview</h2>
          <p>Track your business performance at a glance</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-details">
                <h3>{stat.title}</h3>
                <div className="stat-value">{stat.value}</div>
                <div className={`stat-change ${stat.trend}`}>
                  <span>{stat.change}</span>
                  <span className="change-label">vs last month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminStats;
