import { useState, useEffect } from 'react';

export default function EmergencyMap() {
  const [, setEmergencies] = useState([]);

  useEffect(() => {
    // TODO: Fetch emergency data
    setEmergencies([]);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="mb-8 slide-in-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
          Emergency Map
        </h1>
        <p className="text-gray-600 text-lg">Real-time emergency incidents and response locations</p>
      </div>

      <div className="card-3d p-8 mb-8 hover:scale-[1.01]">
        <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"></div>
          <div className="text-center z-10">
            <div className="text-8xl mb-6 floating-animation">🗺️</div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              Interactive Crisis Map
            </h3>
            <p className="text-gray-600 text-lg mb-2">Emergency locations and response units will be displayed here</p>
            <p className="text-sm text-gray-500 bg-white/80 px-4 py-2 rounded-full inline-block">
              🚧 Advanced mapping integration coming soon
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-3d p-6 hover:scale-105 group bg-gradient-to-br from-red-50 to-red-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-red-800 mb-2">Active Emergencies</h3>
              <p className="text-4xl font-bold text-red-600">3</p>
            </div>
            <div className="text-4xl group-hover:scale-110 transition-transform">🚨</div>
          </div>
          <div className="mt-4 h-2 bg-red-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-500 to-red-600 w-3/4 rounded-full"></div>
          </div>
        </div>
        
        <div className="card-3d p-6 hover:scale-105 group bg-gradient-to-br from-yellow-50 to-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Response Units</h3>
              <p className="text-4xl font-bold text-yellow-600">12</p>
            </div>
            <div className="text-4xl group-hover:scale-110 transition-transform">🚑</div>
          </div>
          <div className="mt-4 h-2 bg-yellow-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 w-4/5 rounded-full"></div>
          </div>
        </div>
        
        <div className="card-3d p-6 hover:scale-105 group bg-gradient-to-br from-green-50 to-green-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Safe Zones</h3>
              <p className="text-4xl font-bold text-green-600">8</p>
            </div>
            <div className="text-4xl group-hover:scale-110 transition-transform">🏥</div>
          </div>
          <div className="mt-4 h-2 bg-green-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-green-600 w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}