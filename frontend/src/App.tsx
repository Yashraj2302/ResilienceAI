import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';
import { SocketProvider } from './contexts/SocketContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EmergencyMap from './pages/EmergencyMap';
import Resources from './pages/Resources';
import Community from './pages/Community';
import Login from './pages/Login';
import Register from './pages/Register';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketProvider>
          <Router>
            <div className="App">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="map" element={<EmergencyMap />} />
                  <Route path="resources" element={<Resources />} />
                  <Route path="community" element={<Community />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;