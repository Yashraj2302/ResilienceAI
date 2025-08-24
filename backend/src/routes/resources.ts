import express from 'express';

const router = express.Router();

// Mock resources data
const mockResources = [
  { id: '1', name: 'Medical Supplies', type: 'medical', available: 50, location: 'Hospital A' },
  { id: '2', name: 'Emergency Vehicles', type: 'transport', available: 12, location: 'Fire Station' },
  { id: '3', name: 'Food Supplies', type: 'supplies', available: 200, location: 'Community Center' },
  { id: '4', name: 'Shelter Beds', type: 'shelter', available: 75, location: 'School Gym' }
];

// Get all resources
router.get('/', async (req, res) => {
  try {
    res.json(mockResources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Allocate resource
router.post('/allocate', async (req, res) => {
  try {
    const { resourceId, emergencyId, quantity } = req.body;
    
    // In a real app, this would update the database
    const resource = mockResources.find(r => r.id === resourceId);
    if (resource && resource.available >= quantity) {
      resource.available -= quantity;
      
      res.json({
        message: 'Resource allocated successfully',
        resource,
        allocation: { resourceId, emergencyId, quantity, timestamp: new Date() }
      });
    } else {
      res.status(400).json({ message: 'Insufficient resources available' });
    }
  } catch (error) {
    console.error('Error allocating resource:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;