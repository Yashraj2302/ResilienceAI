import cron from 'node-cron';
import { predictRisk } from './aiService';
import Emergency from '../models/Emergency';
import { io } from '../server';

export const startRiskMonitoring = () => {
  console.log('🔍 Starting risk monitoring system...');
  
  // Run risk assessment every 15 minutes
  cron.schedule('*/15 * * * *', async () => {
    try {
      await performRiskAssessment();
    } catch (error) {
      console.error('Risk assessment failed:', error);
    }
  });
  
  // Run weather monitoring every hour
  cron.schedule('0 * * * *', async () => {
    try {
      await monitorWeatherConditions();
    } catch (error) {
      console.error('Weather monitoring failed:', error);
    }
  });
};

const performRiskAssessment = async () => {
  console.log('🔍 Performing automated risk assessment...');
  
  // Get active emergencies
  const activeEmergencies = await Emergency.find({ status: 'active' });
  
  for (const emergency of activeEmergencies) {
    try {
      // Re-evaluate risk with current conditions
      const updatedPrediction = await predictRisk(
        emergency.type,
        emergency.location,
        emergency.severity
      );
      
      // Check if risk has significantly changed
      const riskChange = Math.abs(
        updatedPrediction.riskScore - emergency.aiPredictions.riskScore
      );
      
      if (riskChange > 20) {
        // Update emergency with new predictions
        emergency.aiPredictions = updatedPrediction;
        emergency.timeline.push({
          timestamp: new Date(),
          action: 'Risk assessment updated',
          userId: 'system',
          details: `Risk score changed from ${emergency.aiPredictions.riskScore} to ${updatedPrediction.riskScore}`
        });
        
        await emergency.save();
        
        // Broadcast update
        io.to(`community-${emergency.communityId}`).emit('risk-update', {
          emergencyId: emergency._id,
          newRiskScore: updatedPrediction.riskScore,
          change: riskChange > 0 ? 'increased' : 'decreased'
        });
        
        console.log(`📊 Risk updated for emergency ${emergency._id}: ${updatedPrediction.riskScore}`);
      }
    } catch (error) {
      console.error(`Failed to update risk for emergency ${emergency._id}:`, error);
    }
  }
};

const monitorWeatherConditions = async () => {
  console.log('🌤️ Monitoring weather conditions...');
  
  // Mock weather monitoring - in real app, this would check multiple locations
  const criticalWeatherConditions = [
    { location: { latitude: 40.7128, longitude: -74.0060 }, condition: 'severe_storm' },
    // Add more locations as needed
  ];
  
  for (const weather of criticalWeatherConditions) {
    // Check if there are any weather-related risks
    const riskPrediction = await predictRisk(
      'natural_disaster',
      weather.location,
      'high'
    );
    
    if (riskPrediction.riskScore > 70) {
      console.log(`⚠️ High weather risk detected at ${weather.location.latitude}, ${weather.location.longitude}`);
      
      // In a real app, this might create a new emergency or alert
      io.emit('weather-alert', {
        location: weather.location,
        riskScore: riskPrediction.riskScore,
        condition: weather.condition,
        timestamp: new Date()
      });
    }
  }
};