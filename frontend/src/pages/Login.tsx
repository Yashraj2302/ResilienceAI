import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Shield } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background with 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl floating-slow"></div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 floating-animation">🛡️</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 floating-delayed">⚡</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-20 floating-slow">🌟</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-20 floating-animation">🚀</div>
      
      <div className="max-w-lg w-full space-y-8 relative z-10">
        <div className="card-3d p-10 glass-effect-dark backdrop-blur-xl slide-in-up tilt-3d relative overflow-hidden">
          {/* Shimmer Effect */}
          <div className="shimmer absolute inset-0"></div>
          
          <div className="text-center mb-10 relative z-10">
            {/* Enhanced Shield Icon */}
            <div className="relative inline-block mb-6">
              <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl floating-animation bounce-3d">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 mx-auto h-20 w-20 bg-blue-500/30 rounded-full blur-xl pulse-glow"></div>
            </div>
            
            {/* Enhanced Title */}
            <h2 className="text-5xl font-black mb-4">
              <span className="holographic">ResilienceAI</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 neon-glow">
              Crisis response platform for communities
            </p>
          </div>
        
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="card-3d bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn-3d-primary w-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>

            <div className="text-center space-y-3">
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3">
                <p className="text-sm text-blue-300">
                  🚀 <strong>Demo Mode:</strong> Use any email/password or create new account
                </p>
              </div>
              <span className="text-gray-300">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;