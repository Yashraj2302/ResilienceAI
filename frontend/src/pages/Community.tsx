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
    <div className="p-6 min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="mb-8 slide-in-up">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Community Hub
        </h1>
        <p className="text-gray-600 text-lg">Connect with your community during emergencies</p>
      </div>

      {/* New Post Form */}
      <div className="card-3d p-8 mb-8 hover:scale-[1.01]">
        <form onSubmit={handleSubmit}>
          <textarea
            className="input-3d w-full resize-none text-gray-900 placeholder-gray-500"
            rows={4}
            placeholder="Share updates, resources, or ask for help..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="btn-3d-primary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!newPost.trim()}
            >
              Share Post
            </button>
          </div>
        </form>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="card-3d p-6 hover:scale-[1.01] group">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.author}
                  </h3>
                  <span className="text-gray-500 text-sm bg-gray-100 px-2 py-1 rounded-full">
                    {post.timestamp}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{post.content}</p>
                <div className="flex items-center space-x-8">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors group/btn">
                    <span className="text-xl group-hover/btn:scale-125 transition-transform">👍</span>
                    <span className="font-semibold">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors group/btn">
                    <span className="text-xl group-hover/btn:scale-125 transition-transform">💬</span>
                    <span className="font-semibold">{post.comments}</span>
                  </button>
                  <button className="text-gray-500 hover:text-purple-600 transition-colors font-semibold">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <div className="text-8xl mb-6 floating-animation">💬</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">No posts yet</h3>
          <p className="text-gray-500 text-lg">Be the first to share something with your community</p>
        </div>
      )}
    </div>
  );
}