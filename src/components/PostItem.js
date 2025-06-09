import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
