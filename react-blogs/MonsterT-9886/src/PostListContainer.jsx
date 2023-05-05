// src/PostListContainer.jsx
import React, { Fragment } from 'react';
import PostCard from './PostCard';

function PostListContainer({ postCardsData }) {
  return (
    <section className="post-list-container">
      <div className="post-list">
        {postCardsData.map((post) => (
          <PostCard key={post.id} data={post} />
        ))}
      </div>
    </section>
  );
}

export default PostListContainer;
