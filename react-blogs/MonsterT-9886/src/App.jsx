// src/App.jsx
import React from 'react';
import './App.css';
import Body from './Body';
import MainNavbar from './MainNavbar';
import FeaturedPosts from './FeaturedPosts';
import PostListContainer from './PostListContainer';
import PostCard from './PostCard';

function App() {
  const postCardsData = [
    {
      id: 1,
      imgUrl: 'https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      tags: ['Airdropss', 'Web3writing'],
      date: '2022-01-24',
      description: 'Airdrops? blockchains mas importantes para y como farmear...',
      authorImgUrl: 'https://i.pravatar.cc/300',
      authorName: 'TSAD',
      readingTime: '7 min lectura'
    },
    {
      id: 2,
      imgUrl: 'https://images.unsplash.com/photo-1503642551022-c011aafb3c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      tags: ['Web3writing', 'Copywriting'],
      date: '2023-01-24',
      description: 'Como comenzar una carrera como escritor sobre temas de web3 ?...',
      authorImgUrl: 'https://i.pravatar.cc/300',
      authorName: 'TSAD',
      readingTime: '7 min lectura'
    }
  ];

  return (
    <div className="App">
      <Body>
        <MainNavbar />
      </Body>
      <main>
        <FeaturedPosts />
        <PostListContainer>
        <div className="post-card-container"> 
        {postCardsData.map((post,index) => (
          <PostCard
          key={post.id}
          imgUrl={post.imgUrl}
          tags={post.tags}
          date={post.date}
          description={post.description}
          authorImgUrl={post.authorImgUrl}
          authorName={post.authorName}
          readingTime={post.readingTime}
          />
        ))}
      </div> 
        </PostListContainer>
      </main>
    </div>
  );
}

export default App;
