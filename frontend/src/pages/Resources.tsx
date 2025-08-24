import { useState } from 'react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Emergency Preparedness Guide',
      category: 'Guide',
      description: 'Comprehensive guide for emergency preparedness and response',
      type: 'PDF'
    },
    {
      id: 2,
      title: 'First Aid Basics',
      category: 'Medical',
      description: 'Essential first aid techniques and procedures',
      type: 'Video'
    },
    {
      id: 3,
      title: 'Evacuation Routes',
      category: 'Safety',
      description: 'Local evacuation routes and safe meeting points',
      type: 'Map'
    }
  ];

  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="mb-8 slide-in-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
          Emergency Resources
        </h1>
        <p className="text-gray-600 text-lg">Access guides, tools, and information for emergency preparedness</p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search resources..."
            className="input-3d w-full pl-12 text-gray-900 placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="card-3d p-6 hover:scale-105 group">
            <div className="flex items-start justify-between mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold rounded-full">
                {resource.category}
              </span>
              <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">{resource.type}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {resource.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
            <button className="btn-3d-primary w-full group-hover:scale-105">
              Access Resource
            </button>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-16">
          <div className="text-8xl mb-6 floating-animation">📚</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">No resources found</h3>
          <p className="text-gray-500 text-lg">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}