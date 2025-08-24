import { useState } from 'react';

export default function Community() {
  const [newPost, setNewPost] = useState('');

  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Stay safe everyone! The weather alert for our area has been updated.',
      timestamp: '2 hours ago',
      likes: 12,
      comments: 3
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Emergency supplies available at the community center. Please share with those in need.',
      timestamp: '4 hours ago',
      likes: 25,
      comments: 8
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.trim()) {
      // TODO: Submit new post
      console.log('New post:', newPost);
      setNewPost('');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Community Hub</h1>
        <p className="text-gray-600">Connect with your community during emergencies</p>
      </div>

      {/* New Post Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Share updates, resources, or ask for help..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              disabled={!newPost.trim()}
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <span className="text-gray-500 text-sm">{post.timestamp}</span>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>👍</span>
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-600">
                    <span>💬</span>
                    <span>{post.comments}</span>
                  </button>
                  <button className="hover:text-blue-600">Share</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl text-gray-400 mb-4">💬</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
          <p className="text-gray-500">Be the first to share something with your community</p>
        </div>
      )}
    </div>
  );
}