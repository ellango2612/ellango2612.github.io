import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    

    return filtered;
  }, [searchTerm]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Simple Filter */}
        <div className="mb-12 text-center">
          <input
            type="text"
            placeholder="search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-64 px-4 py-2 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black text-sm"
          />
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/post/${post.id}`}
              className="group"
            >
              <div className="bg-white border border-gray-200 hover:border-gray-400 transition-colors duration-200 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-black mb-2 group-hover:text-gray-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="text-xs text-gray-400">
                    {post.date} • {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-500">
              No posts found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;