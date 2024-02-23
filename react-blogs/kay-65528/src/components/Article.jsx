import React from 'react';
import '../styles/Article.css'

const Article = ({data}) => {

  const {url, description, tags} = data;

  return(
    <div className='article'>
      <img className='article-image' src={url}  alt="album cover" />
      <div className='tags'>
        {tags.map(tag => <p key={tags.indexOf(tag)+1}>{tag}</p>)}
      </div>
      <p className='description'>
        {description}
      </p>
    </div>
  )
}

export default Article;