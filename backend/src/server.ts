import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import authRoutes from './routes/auth';
import emergencyRoutes from './routes/emergency';
import resourceRoutes from './routes/resources';
import communityRoutes from './routes/community';
import { initializeAI } from './services/aiService';
import { startRiskMonitoring } from './services/riskMonitoring';

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/community', communityRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('join-community', (communityId) => {
    socket.join(`community-${communityId}`);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Global socket instance
export { io };

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/resilience-ai');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await initializeAI();
  startRiskMonitoring();
  
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch(console.error);