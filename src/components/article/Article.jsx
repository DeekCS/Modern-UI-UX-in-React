import React from 'react';
import './article.css'
const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};