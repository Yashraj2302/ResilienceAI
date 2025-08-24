import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (userData: any) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Emergency API
export const fetchEmergencies = async () => {
  const response = await api.get('/emergency');
  return response.data;
};

export const createEmergency = async (emergencyData: any) => {
  const response = await api.post('/emergency', emergencyData);
  return response.data;
};

export const updateEmergency = async (id: string, updates: any) => {
  const response = await api.put(`/emergency/${id}`, updates);
  return response.data;
};

// Resources API
export const fetchResources = async () => {
  const response = await api.get('/resources');
  return response.data;
};

export const allocateResource = async (resourceId: string, emergencyId: string, quantity: number) => {
  const response = await api.post('/resources/allocate', {
    resourceId,
    emergencyId,
    quantity
  });
  return response.data;
};

// Community API
export const fetchCommunityStats = async () => {
  const response = await api.get('/community/stats');
  return response.data;
};

export const fetchVolunteers = async () => {
  const response = await api.get('/community/volunteers');
  return response.data;
};

export const updateAvailability = async (status: string) => {
  const response = await api.put('/community/availability', { status });
  return response.data;
};

export default api;