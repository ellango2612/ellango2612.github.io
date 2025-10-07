import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

const BlogPostPage = () => {
  const { id } = useParams();
  
  return (
    <div className="pt-16">
      <BlogPost postId={id} />
    </div>
  );
};

export default BlogPostPage;
