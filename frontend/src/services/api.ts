import axios from 'axios';
import { mockApi } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true' || !import.meta.env.VITE_API_URL;

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

// Helper function to handle API calls with fallback to mock
const apiCall = async (realApiCall: () => Promise<any>, mockApiCall: () => Promise<any>) => {
  if (USE_MOCK_API) {
    return await mockApiCall();
  }
  
  try {
    const response = await realApiCall();
    return response.data;
  } catch (error: any) {
    // If backend is not available, fallback to mock API
    if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
      console.warn('Backend not available, using mock API');
      return await mockApiCall();
    }
    throw error;
  }
};

// Auth API
export const login = async (email: string, password: string) => {
  return await apiCall(
    () => api.post('/auth/login', { email, password }),
    () => mockApi.login(email, password)
  );
};

export const register = async (userData: any) => {
  return await apiCall(
    () => api.post('/auth/register', userData),
    () => mockApi.register(userData)
  );
};

// Emergency API
export const fetchEmergencies = async () => {
  return await apiCall(
    () => api.get('/emergency'),
    () => mockApi.fetchEmergencies()
  );
};

export const createEmergency = async (emergencyData: any) => {
  return await apiCall(
    () => api.post('/emergency', emergencyData),
    () => mockApi.createEmergency(emergencyData)
  );
};

export const updateEmergency = async (id: string, updates: any) => {
  return await apiCall(
    () => api.put(`/emergency/${id}`, updates),
    () => mockApi.updateEmergency(id, updates)
  );
};

// Resources API
export const fetchResources = async () => {
  return await apiCall(
    () => api.get('/resources'),
    () => mockApi.fetchResources()
  );
};

export const allocateResource = async (resourceId: string, emergencyId: string, quantity: number) => {
  return await apiCall(
    () => api.post('/resources/allocate', { resourceId, emergencyId, quantity }),
    () => mockApi.allocateResource(resourceId, emergencyId, quantity)
  );
};

// Community API
export const fetchCommunityStats = async () => {
  return await apiCall(
    () => api.get('/community/stats'),
    () => mockApi.fetchCommunityStats()
  );
};

export const fetchVolunteers = async () => {
  return await apiCall(
    () => api.get('/community/volunteers'),
    () => mockApi.fetchVolunteers()
  );
};

export const updateAvailability = async (status: string) => {
  return await apiCall(
    () => api.put('/community/availability', { status }),
    () => mockApi.updateAvailability(status)
  );
};

export default api;