import React from 'react';
import { Link } from 'react-router-dom';
import { getPostById, blogPosts } from '../data/blogPosts';

const BlogPost = ({ postId }) => {
  const post = getPostById(postId);
  
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

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
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
              to="/posts" 
              className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors duration-200"
            >
              ← back to posts
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
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-light text-gray-600">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
                      <p className="font-light text-black">{post.author}</p>
              <p className="text-sm text-gray-500 font-light">
                A slothful creature from earth
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-light text-black mb-8">Related posts</h3>
            <div className="space-y-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="group">
                  <h4 className="text-lg font-light text-black group-hover:text-gray-600 transition-colors duration-200 mb-2">
                    <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
                  </h4>
                  <p className="text-sm text-gray-600 font-light italic">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400 font-light">
                    <span>{relatedPost.date}</span>
                    <span>•</span>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <Link 
              to="/posts" 
              className="text-sm text-gray-500 hover:text-gray-900 font-light transition-colors duration-200"
            >
              ← all posts
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