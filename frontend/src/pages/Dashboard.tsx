import React from 'react';
import { useQuery } from 'react-query';
import { AlertTriangle, Users, MapPin, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchEmergencies, fetchCommunityStats } from '../services/api';

const Dashboard: React.FC = () => {
  const { data: emergencies } = useQuery('emergencies', fetchEmergencies);
  const { data: stats } = useQuery('community-stats', fetchCommunityStats);

  const activeEmergencies = emergencies?.filter((e: any) => e.status === 'active') || [];
  const criticalEmergencies = activeEmergencies.filter((e: any) => e.severity === 'critical');

  // Mock data for charts
  const riskTrendData = [
    { name: 'Mon', risk: 30 },
    { name: 'Tue', risk: 45 },
    { name: 'Wed', risk: 35 },
    { name: 'Thu', risk: 60 },
    { name: 'Fri', risk: 75 },
    { name: 'Sat', risk: 40 },
    { name: 'Sun', risk: 25 }
  ];

  return (
    <div className="space-y-8 p-6 min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full blur-3xl floating-delayed"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center slide-in-up">
          <div>
            <h1 className="text-5xl font-black mb-3">
              <span className="holographic">Crisis Response</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-600 neon-glow">Real-time monitoring and emergency response coordination</p>
          </div>
          <div className="flex items-center space-x-4 card-3d p-6 glass-effect tilt-3d">
            <div className="w-5 h-5 bg-green-500 rounded-full pulse-glow floating-animation"></div>
            <span className="text-lg font-bold text-gray-700">System Active</span>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      {criticalEmergencies.length > 0 && (
        <div className="card-3d bg-gradient-to-r from-red-500 to-red-600 text-white p-6 floating-animation">
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-white animate-bounce mr-4" />
            <div>
              <p className="text-lg font-semibold">
                Critical Alert: {criticalEmergencies.length} critical emergencies require immediate attention.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card-3d p-6 hover:scale-105 group">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl shadow-lg group-hover:shadow-xl">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Active Emergencies</p>
              <p className="text-3xl font-bold text-gray-900">{activeEmergencies.length}</p>
            </div>
          </div>
        </div>

        <div className="card-3d p-6 hover:scale-105 group">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg group-hover:shadow-xl">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Available Volunteers</p>
              <p className="text-3xl font-bold text-gray-900">{(stats as any)?.availableVolunteers || 24}</p>
            </div>
          </div>
        </div>

        <div className="card-3d p-6 hover:scale-105 group">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl shadow-lg group-hover:shadow-xl">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Resources Deployed</p>
              <p className="text-3xl font-bold text-gray-900">{(stats as any)?.deployedResources || 12}</p>
            </div>
          </div>
        </div>

        <div className="card-3d p-6 hover:scale-105 group">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl">
              <Activity className="h-8 w-8 text-white" />
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Risk Level</p>
              <p className="text-3xl font-bold text-gray-900">{(stats as any)?.riskLevel || 'Moderate'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Trend Chart */}
        <div className="card-3d p-8 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Community Risk Trend
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="name" stroke="#6366f1" />
                <YAxis stroke="#6366f1" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="risk" 
                  stroke="url(#gradient)" 
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: '#6366f1', strokeWidth: 2 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Emergencies */}
        <div className="card-3d p-8 hover:scale-[1.02]">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
            Recent Emergencies
          </h3>
          <div className="space-y-4">
            {activeEmergencies.length > 0 ? activeEmergencies.slice(0, 5).map((emergency: any) => (
              <div key={emergency._id} className="card-3d p-4 hover:scale-105 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full pulse-glow ${
                      emergency.severity === 'critical' ? 'bg-red-500' :
                      emergency.severity === 'high' ? 'bg-orange-500' :
                      emergency.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600">{emergency.title}</p>
                      <p className="text-sm text-gray-500">{emergency.location.address}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold transform group-hover:scale-110 ${
                    emergency.severity === 'critical' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white' :
                    emergency.severity === 'high' ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white' :
                    emergency.severity === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white' : 
                    'bg-gradient-to-r from-green-500 to-green-600 text-white'
                  }`}>
                    {emergency.severity}
                  </span>
                </div>
              </div>
            )) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">All Clear!</h4>
                <p className="text-gray-500">No active emergencies at this time</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;