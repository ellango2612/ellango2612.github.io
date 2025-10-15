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
      <div className="max-w-7xl mx-auto px-6">
        {/* Creative Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-6">
            thoughts & stories
          </h1>
          <p className="text-lg text-gray-500 italic mb-8">
            A collection of moments, reflections, and discoveries
          </p>
          <div className="relative inline-block">
            <input
              type="text"
              placeholder="search through memories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-80 px-6 py-3 border-b-2 border-gray-200 bg-transparent focus:outline-none focus:border-black text-sm placeholder-gray-400 transition-colors duration-300"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-focus-within:w-full"></div>
          </div>
        </div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container with Creative Overlay */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.alt}
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-600 font-medium">
                    {post.date}
                  </div>
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {post.category}
                  </div>
                </div>

                {/* Content with Creative Typography */}
                <div className="p-8">
                  <h3 className="text-xl font-light text-black mb-3 group-hover:text-gray-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags with Creative Styling */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read Time with Icon */}
                  <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-black/10 transition-colors duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results with Creative Styling */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-24">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-gray-500 mb-2">No stories found</h3>
            <p className="text-gray-400">Try searching with different keywords</p>
          </div>
        )}

        {/* Creative Footer */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-8 h-px bg-gray-300"></div>
            <span>end of stories</span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;