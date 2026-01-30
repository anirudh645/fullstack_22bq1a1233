import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        fontSize: '18px',
        color: '#667eea'
      }}>
        <div>
          <div style={{ marginBottom: '10px' }}>🔐 Verifying authentication...</div>
          <div style={{ fontSize: '14px', color: '#666' }}>Please wait</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
