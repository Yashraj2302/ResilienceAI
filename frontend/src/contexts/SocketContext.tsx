import React, { createContext, useContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useAuth } from './AuthContext';

interface SocketContextType {
  socket: Socket | null;
  connected: boolean;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const newSocket = io(import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000');
      
      newSocket.on('connect', () => {
        console.log('Connected to server');
        setConnected(true);
        
        // Join user's community room
        if (user.communityId) {
          newSocket.emit('join-community', user.communityId);
        }
      });

      newSocket.on('disconnect', () => {
        console.log('Disconnected from server');
        setConnected(false);
      });

      // Listen for emergency updates
      newSocket.on('new-emergency', (emergency) => {
        console.log('New emergency:', emergency);
        // You can add toast notifications here
      });

      newSocket.on('emergency-updated', (emergency) => {
        console.log('Emergency updated:', emergency);
      });

      newSocket.on('risk-update', (update) => {
        console.log('Risk update:', update);
      });

      newSocket.on('weather-alert', (alert) => {
        console.log('Weather alert:', alert);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [user]);

  const value = {
    socket,
    connected
  };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};