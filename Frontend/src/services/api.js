const API_BASE_URL = 'http://localhost:8080/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Auth API
export const authAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  validateToken: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/validate`, {
        headers: getAuthHeaders()
      });
      if (!response.ok) {
        throw new Error('Token validation failed');
      }
      return response.json();
    } catch (error) {
      console.error('Token validation error:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }
};

// Projects API
export const projectsAPI = {
  // Public endpoints
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/public/projects`);
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/public/projects/${id}`);
    return response.json();
  },

  // Admin endpoints
  create: async (projectData) => {
    const response = await fetch(`${API_BASE_URL}/admin/projects`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(projectData)
    });
    return response.json();
  },

  update: async (id, projectData) => {
    const response = await fetch(`${API_BASE_URL}/admin/projects/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(projectData)
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/projects/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.ok;
  },

  uploadImage: async (id, file) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/admin/projects/${id}/image`, {
      method: 'POST',
      headers: {
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: formData
    });
    return response.json();
  }
};

// Clients/Leads API
export const clientsAPI = {
  // Public endpoint
  submit: async (clientData) => {
    const response = await fetch(`${API_BASE_URL}/public/clients`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(clientData)
    });
    return response.json();
  },

  // Admin endpoints
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/clients`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/clients/${id}`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  updateStatus: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/admin/clients/${id}/status`, {
      method: 'PATCH',
      headers: getAuthHeaders(),
      body: JSON.stringify({ status })
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/clients/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.ok;
  }
};

// Contact API
export const contactAPI = {
  submit: async (contactData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    });
    return response.json();
  },

  // Admin endpoint
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/contacts`, {
      headers: getAuthHeaders()
    });
    return response.json();
  },

  markAsRead: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/contacts/${id}/read`, {
      method: 'PATCH',
      headers: getAuthHeaders()
    });
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admin/contacts/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    return response.ok;
  }
};

// Newsletter API
export const newsletterAPI = {
  subscribe: async (email) => {
    const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return response.json();
  },

  // Admin endpoint
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admin/subscribers`, {
      headers: getAuthHeaders()
    });
    return response.json();
  }
};

export default {
  authAPI,
  projectsAPI,
  clientsAPI,
  contactAPI,
  newsletterAPI
};
