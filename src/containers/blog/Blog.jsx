import React from 'react';
import './blog.css'
const Blog = ({ Blog }) => {
  return (
    <div className="Blog">
      <h2>{Blog.title}</h2>
      <p>{Blog.content}</p>
    </div>
  );
};

export default Blog;