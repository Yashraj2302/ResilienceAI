import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Register:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="card-3d p-8 glass-effect backdrop-blur-lg slide-in-up">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 floating-animation">🚀</div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Join ResilienceAI
            </h2>
            <p className="text-gray-300 mb-4">
              Create your crisis response account
            </p>
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                className="btn-3d-primary w-full text-lg font-semibold"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}