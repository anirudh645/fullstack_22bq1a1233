import React, { createContext, useState, useContext, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Validate token with backend on mount
    const validateToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await authAPI.validateToken();
          if (response.token) {
            // Token is valid
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');
            setUser({ username, role, token });
          } else {
            // Token is invalid
            authAPI.logout();
            setUser(null);
          }
        } catch (error) {
          console.error('Token validation failed:', error);
          authAPI.logout();
          setUser(null);
        }
      }
      setLoading(false);
    };

    validateToken();
  }, []);

  const login = (userData) => {
    // Store in localStorage
    localStorage.setItem('token', userData.token);
    localStorage.setItem('username', userData.username);
    localStorage.setItem('role', userData.role);
    // Update state
    setUser(userData);
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
