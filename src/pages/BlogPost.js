import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const BlogPostPage = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // Determine type based on the current path
  const type = location.pathname.startsWith('/project/') ? 'project' : 'blog';
  
  return (
    <div className="pt-16">
      <BlogPost postId={id} type={type} />
    </div>
  );
};

export default BlogPostPage;
