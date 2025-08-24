import express from 'express';
import Emergency from '../models/Emergency';
import { predictRisk } from '../services/aiService';
import { io } from '../server';

const router = express.Router();

// Get all emergencies
router.get('/', async (req, res) => {
  try {
    const emergencies = await Emergency.find().sort({ createdAt: -1 });
    res.json(emergencies);
  } catch (error) {
    console.error('Error fetching emergencies:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create emergency
router.post('/', async (req, res) => {
  try {
    const { title, description, type, severity, location, communityId, reportedBy } = req.body;

    // Get AI predictions
    const aiPredictions = await predictRisk(type, location, severity);

    const emergency = new Emergency({
      title,
      description,
      type,
      severity,
      location,
      communityId,
      reportedBy,
      aiPredictions,
      timeline: [{
        timestamp: new Date(),
        action: 'Emergency reported',
        userId: reportedBy,
        details: 'Initial emergency report created'
      }]
    });

    await emergency.save();

    // Broadcast to community
    io.to(`community-${communityId}`).emit('new-emergency', emergency);

    res.status(201).json(emergency);
  } catch (error) {
    console.error('Error creating emergency:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update emergency
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const emergency = await Emergency.findByIdAndUpdate(
      id,
      { 
        ...updates,
        $push: {
          timeline: {
            timestamp: new Date(),
            action: 'Emergency updated',
            userId: updates.updatedBy || 'system',
            details: 'Emergency status or details updated'
          }
        }
      },
      { new: true }
    );

    if (!emergency) {
      return res.status(404).json({ message: 'Emergency not found' });
    }

    // Broadcast update
    io.to(`community-${emergency.communityId}`).emit('emergency-updated', emergency);

    res.json(emergency);
  } catch (error) {
    console.error('Error updating emergency:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;