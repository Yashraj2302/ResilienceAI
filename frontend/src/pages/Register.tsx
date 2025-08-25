import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      // Redirect to dashboard after successful registration
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Registration error:', err);
      const errorMessage = err.response?.data?.message || 
                          err.message || 
                          'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background with 3D Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl floating-slow"></div>
      </div>
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 floating-animation">✨</div>
      <div className="absolute top-20 right-20 text-5xl opacity-20 floating-delayed">🛡️</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-20 floating-slow">⚡</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-20 floating-animation">🌟</div>
      
      <div className="max-w-lg w-full space-y-8 relative z-10">
        <div className="card-3d p-10 glass-effect-dark backdrop-blur-xl slide-in-up tilt-3d relative overflow-hidden">
          {/* Shimmer Effect */}
          <div className="shimmer absolute inset-0"></div>
          
          <div className="text-center mb-10 relative z-10">
            {/* Enhanced Floating Icon */}
            <div className="relative inline-block mb-6">
              <div className="text-8xl floating-animation bounce-3d">🚀</div>
              <div className="absolute inset-0 text-8xl blur-xl opacity-50 floating-animation">🚀</div>
            </div>
            
            {/* Enhanced Title */}
            <h2 className="text-5xl font-black mb-4">
              <span className="holographic">Join ResilienceAI</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 neon-glow">
              Create your crisis response account
            </p>
            
            {/* Enhanced Demo Mode Banner */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-4 mb-6 glass-effect shimmer">
              <p className="text-sm text-blue-300 font-semibold">
                🚀 <span className="holographic text-base">Demo Mode:</span> Registration works with mock data while backend deploys
              </p>
            </div>
            
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors neon-glow">
                Sign in here
              </Link>
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
                <input
                  name="name"
                  type="text"
                  required
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  required
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  className="input-3d w-full text-gray-900 placeholder-gray-500"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn-3d-primary w-full text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}