import React from 'react';
import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <div className="pt-16"> {/* Add padding top to account for fixed header */}
      <BlogList />
    </div>
  );
};

export default Blog;
