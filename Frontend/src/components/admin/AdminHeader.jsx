import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../styles/admin/AdminHeader.css';

const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="admin-header">
      <div className="container">
        <div className="admin-header-content">
          <div className="logo">
            <img src="/4th year full stack Assets/4th year full stack Assets/Lead Generation Landing page (Images)/logo.svg" alt="Logo" />
            <span className="admin-badge">Admin</span>
          </div>
          
          <nav className={`admin-nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#dashboard">Dashboard</a>
            <a href="#stats">Statistics</a>
            <a href="#projects">Projects</a>
            <a href="#leads">Leads</a>
            <a href="#contacts">Contacts</a>
            <a href="/" className="back-to-site">Back to Site</a>
          </nav>

          <div className="admin-user">
            <div className="user-avatar">
              <span>{user?.username?.charAt(0).toUpperCase() || 'A'}</span>
            </div>
            <span className="user-name">{user?.username || 'Admin'}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
