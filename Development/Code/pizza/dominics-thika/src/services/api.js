import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Menu API
export const menuAPI = {
  // Get all menu items
  getAll: (params = {}) => api.get('/menu', { params }),
  
  // Get menu item by ID
  getById: (id) => api.get(`/menu/${id}`),
  
  // Get menu categories
  getCategories: () => api.get('/menu/categories/list'),
  
  // Get popular items
  getPopular: () => api.get('/menu', { params: { popular: true } }),
  
  // Get items by category
  getByCategory: (category) => api.get('/menu', { params: { category } }),
};

// Orders API
export const ordersAPI = {
  // Place a new order
  create: (orderData) => api.post('/orders', orderData),
  
  // Get all orders (admin)
  getAll: (params = {}) => api.get('/orders', { params }),
  
  // Get order by ID
  getById: (id) => api.get(`/orders/${id}`),
  
  // Update order status
  updateStatus: (id, status) => api.patch(`/orders/${id}/status`, { status }),
  
  // Get orders by phone number
  getByPhone: (phone) => api.get(`/orders/status/${phone}`),
};

// Authentication API
export const authAPI = {
  // Admin login
  login: (credentials) => api.post('/auth/login', credentials),
  
  // Get user profile
  getProfile: () => api.get('/auth/profile'),
  
  // Logout
  logout: () => api.post('/auth/logout'),
};

// Health check
export const healthAPI = {
  check: () => api.get('/health'),
};

// Utility functions
export const apiUtils = {
  // Handle API errors
  handleError: (error) => {
    if (error.response) {
      // Server responded with error status
      return {
        message: error.response.data?.error || 'An error occurred',
        status: error.response.status,
      };
    } else if (error.request) {
      // Network error
      return {
        message: 'Network error. Please check your connection.',
        status: 0,
      };
    } else {
      // Other error
      return {
        message: error.message || 'An unexpected error occurred',
        status: 0,
      };
    }
  },

  // Format currency
  formatCurrency: (amount) => {
    return `KSh ${amount.toLocaleString()}`;
  },

  // Validate phone number (Kenyan format)
  validatePhone: (phone) => {
    const phoneRegex = /^(\+254|0)?[17]\d{8}$/;
    return phoneRegex.test(phone);
  },

  // Format phone number
  formatPhone: (phone) => {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');
    
    // If it starts with 0, replace with +254
    if (digits.startsWith('0')) {
      return '+254' + digits.substring(1);
    }
    
    // If it starts with 254, add +
    if (digits.startsWith('254')) {
      return '+' + digits;
    }
    
    // If it's 9 digits, assume it's a Kenyan number
    if (digits.length === 9) {
      return '+254' + digits;
    }
    
    return phone;
  },
};

export default api; 