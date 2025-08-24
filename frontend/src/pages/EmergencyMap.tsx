import { useState, useEffect } from 'react';

export default function EmergencyMap() {
  const [, setEmergencies] = useState([]);

  useEffect(() => {
    // TODO: Fetch emergency data
    setEmergencies([]);
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Emergency Map</h1>
        <p className="text-gray-600">Real-time emergency incidents and response locations</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl text-gray-400 mb-4">🗺️</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Interactive Map</h3>
            <p className="text-gray-500">Emergency locations and response units will be displayed here</p>
            <p className="text-sm text-gray-400 mt-2">Map integration coming soon</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Active Emergencies</h3>
          <p className="text-2xl font-bold text-red-600">0</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Response Units</h3>
          <p className="text-2xl font-bold text-yellow-600">0</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Safe Zones</h3>
          <p className="text-2xl font-bold text-green-600">0</p>
        </div>
      </div>
    </div>
  );
}