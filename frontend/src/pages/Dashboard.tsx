import React from 'react';
import { useQuery } from 'react-query';
import { AlertTriangle, Users, MapPin, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchEmergencies, fetchCommunityStats } from '../services/api';

const Dashboard: React.FC = () => {
  const { data: emergencies } = useQuery('emergencies', fetchEmergencies);
  const { data: stats } = useQuery('community-stats', fetchCommunityStats);

  const activeEmergencies = emergencies?.filter(e => e.status === 'active') || [];
  const criticalEmergencies = activeEmergencies.filter(e => e.severity === 'critical');

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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Crisis Response Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">System Active</span>
        </div>
      </div>

      {/* Alert Banner */}
      {criticalEmergencies.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <div className="ml-3">
              <p className="text-sm text-red-700">
                <strong>Critical Alert:</strong> {criticalEmergencies.length} critical emergencies require immediate attention.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Emergencies</dt>
                  <dd className="text-lg font-medium text-gray-900">{activeEmergencies.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Available Volunteers</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats?.availableVolunteers || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Resources Deployed</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats?.deployedResources || 0}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Activity className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Risk Level</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {stats?.riskLevel || 'Moderate'}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Trend Chart */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Community Risk Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="risk" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Emergencies */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Recent Emergencies
            </h3>
            <div className="space-y-3">
              {activeEmergencies.slice(0, 5).map((emergency) => (
                <div key={emergency._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      emergency.severity === 'critical' ? 'bg-red-500' :
                      emergency.severity === 'high' ? 'bg-orange-500' :
                      emergency.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{emergency.title}</p>
                      <p className="text-xs text-gray-500">{emergency.location.address}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    emergency.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    emergency.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    emergency.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {emergency.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;