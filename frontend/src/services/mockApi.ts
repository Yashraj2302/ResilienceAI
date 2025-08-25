// Mock API service for testing frontend without backend
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
const mockUsers = new Map();
let userIdCounter = 1;

// Mock data
const mockEmergencies = [
  {
    id: '1',
    title: 'Flood Alert - Downtown Area',
    description: 'Heavy rainfall causing flooding in downtown district',
    severity: 'high',
    location: { lat: 40.7128, lng: -74.0060 },
    status: 'active',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Power Outage - North Side',
    description: 'Electrical grid failure affecting 5000+ residents',
    severity: 'medium',
    location: { lat: 40.7589, lng: -73.9851 },
    status: 'active',
    createdAt: new Date().toISOString()
  }
];

const mockResources = [
  {
    id: '1',
    name: 'Emergency Shelter',
    type: 'shelter',
    available: 150,
    total: 200,
    location: 'Community Center A'
  },
  {
    id: '2',
    name: 'Medical Supplies',
    type: 'medical',
    available: 85,
    total: 100,
    location: 'Hospital District'
  }
];

export const mockApi = {
  // Auth API
  login: async (email: string, password: string) => {
    await delay(1000);
    
    const user = Array.from(mockUsers.values()).find((u: any) => u.email === email);
    if (!user) {
      throw new Error('User not found');
    }
    
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
    
    const token = `mock-token-${Date.now()}`;
    const { password: _, ...userWithoutPassword } = user;
    
    return {
      token,
      user: userWithoutPassword
    };
  },

  register: async (userData: any) => {
    await delay(1000);
    
    // Check if user already exists
    const existingUser = Array.from(mockUsers.values()).find((u: any) => u.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    
    const newUser = {
      id: userIdCounter++,
      email: userData.email,
      name: userData.name,
      password: userData.password,
      role: 'user',
      communityId: 'community-1',
      createdAt: new Date().toISOString()
    };
    
    mockUsers.set(newUser.id, newUser);
    
    const token = `mock-token-${Date.now()}`;
    const { password: _, ...userWithoutPassword } = newUser;
    
    return {
      token,
      user: userWithoutPassword
    };
  },

  // Emergency API
  fetchEmergencies: async () => {
    await delay(500);
    return mockEmergencies;
  },

  createEmergency: async (emergencyData: any) => {
    await delay(500);
    const newEmergency = {
      id: Date.now().toString(),
      ...emergencyData,
      status: 'active',
      createdAt: new Date().toISOString()
    };
    mockEmergencies.push(newEmergency);
    return newEmergency;
  },

  updateEmergency: async (id: string, updates: any) => {
    await delay(500);
    const index = mockEmergencies.findIndex(e => e.id === id);
    if (index !== -1) {
      mockEmergencies[index] = { ...mockEmergencies[index], ...updates };
      return mockEmergencies[index];
    }
    throw new Error('Emergency not found');
  },

  // Resources API
  fetchResources: async () => {
    await delay(500);
    return mockResources;
  },

  allocateResource: async (resourceId: string, emergencyId: string, quantity: number) => {
    await delay(500);
    const resource = mockResources.find(r => r.id === resourceId);
    if (resource && resource.available >= quantity) {
      resource.available -= quantity;
      return { 
        success: true, 
        message: `Resource allocated successfully to emergency ${emergencyId}`,
        resourceId,
        quantity
      };
    }
    throw new Error('Insufficient resources available');
  },

  // Community API
  fetchCommunityStats: async () => {
    await delay(500);
    return {
      totalVolunteers: 245,
      activeVolunteers: 89,
      totalEmergencies: mockEmergencies.length,
      resolvedEmergencies: 12,
      resourcesAllocated: 156
    };
  },

  fetchVolunteers: async () => {
    await delay(500);
    return [
      {
        id: '1',
        name: 'John Smith',
        skills: ['First Aid', 'Search & Rescue'],
        availability: 'available',
        location: 'Downtown'
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        skills: ['Medical', 'Communication'],
        availability: 'busy',
        location: 'North Side'
      }
    ];
  },

  updateAvailability: async (status: string) => {
    await delay(500);
    return { success: true, status };
  }
};