import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminStats from '../../components/admin/AdminStats';
import AdminProjects from '../../components/admin/AdminProjects';
import AdminLeads from '../../components/admin/AdminLeads';
import AdminContacts from '../../components/admin/AdminContacts';
import '../../styles/admin/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <div className="admin-content">
        <div className="admin-hero" id="dashboard">
          <div className="container">
            <h1>Admin Dashboard</h1>
            <p>Manage your leads, projects, and customer inquiries</p>
          </div>
        </div>
        <AdminStats />
        <AdminProjects />
        <AdminLeads />
        <AdminContacts />
      </div>
    </div>
  );
};

export default AdminDashboard;
