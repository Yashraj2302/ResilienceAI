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
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Emergency Resources</h1>
        <p className="text-gray-600">Access guides, tools, and information for emergency preparedness</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                {resource.category}
              </span>
              <span className="text-gray-500 text-sm">{resource.type}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Access Resource
            </button>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl text-gray-400 mb-4">📚</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}