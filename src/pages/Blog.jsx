import React, { useEffect, useState } from 'react';
import { blogAPI } from '../api';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await blogAPI.getAll();
        setBlogs(res.data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            College Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Insights, stories, and updates from our college community
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog._id} 
                to={`/blogs/${blog._id}`}
                className="group hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100"
              >
                {/* Image */}
                {blog.coverImage && (
                  <div className="overflow-hidden h-56">
                    <img
                      src={`https://api.jadhavarcollegeoflaw.com${blog.coverImage}`}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                    <span>•</span>
                    <span>{blog.author || 'Admin'}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    Read more 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}