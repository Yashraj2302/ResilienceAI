import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/AuthContext';
import { SocketProvider } from './contexts/SocketContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Demo from './pages/Demo';
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
                {/* Public Routes */}
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/features" element={<Features />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Dashboard Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }>
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