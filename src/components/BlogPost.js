import React from 'react';
import { Link } from 'react-router-dom';
import { getPostById, blogPosts } from '../data/blogPosts';
import { getProjectById, portfolioProjects } from '../data/portfolioProjects';

const BlogPost = ({ postId, type = 'blog' }) => {
  const post = type === 'project' ? getProjectById(postId) : getPostById(postId);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-light text-black mb-4">Post not found</h1>
          <p className="text-gray-600 mb-8 font-light">The post you're looking for doesn't exist.</p>
          <Link 
            to="/" 
            className="text-gray-600 hover:text-black font-light transition-colors duration-200"
          >
            ← back to home
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts/projects (same category, excluding current post)
  const allItems = type === 'project' ? portfolioProjects : blogPosts;
  const relatedPosts = allItems
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Back Link */}
          <div>
            <Link 
              to={type === 'project' ? "/posts" : "/blog"} 
              className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors duration-200"
            >
              ← back to {type === 'project' ? 'projects' : 'blog'}
            </Link>
          </div>

          {/* Article Meta */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500 font-light">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="capitalize">{post.category}</span>
            </div>

                    <h1 className="text-4xl md:text-5xl font-light text-black leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 font-light italic">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed font-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="text-sm text-gray-400 font-light"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="/images/blog/thu-profile.jpeg" 
                alt="Thu Ngo profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
                      <p className="font-light text-black">{post.author}</p>
              <p className="text-sm text-gray-500 font-light">
                Software Engineer
              </p>
            </div>
          </div>
        </div>


        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <Link 
              to={type === 'project' ? "/posts" : "/blog"} 
              className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors duration-200"
            >
              ← all {type === 'project' ? 'projects' : 'posts'}
            </Link>
            <div className="text-sm text-gray-400 font-light">
              {post.author}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;