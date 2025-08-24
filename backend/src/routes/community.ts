import express from 'express';
import User from '../models/User';

const router = express.Router();

// Get community stats
router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const availableVolunteers = await User.countDocuments({ 
      role: { $in: ['volunteer', 'coordinator'] },
      'availability.status': 'available'
    });
    
    res.json({
      totalUsers,
      availableVolunteers,
      deployedResources: 25, // Mock data
      riskLevel: 'Moderate'
    });
  } catch (error) {
    console.error('Error fetching community stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get volunteers
router.get('/volunteers', async (req, res) => {
  try {
    const volunteers = await User.find({ 
      role: { $in: ['volunteer', 'coordinator'] }
    }).select('-password');
    
    res.json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update availability
router.put('/availability', async (req, res) => {
  try {
    const { status } = req.body;
    // In a real app, you'd get userId from JWT token
    const userId = req.headers.userId; // Mock
    
    const user = await User.findByIdAndUpdate(
      userId,
      { 
        'availability.status': status,
        'availability.lastUpdated': new Date()
      },
      { new: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    console.error('Error updating availability:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;