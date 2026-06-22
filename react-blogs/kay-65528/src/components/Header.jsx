import React from 'react';
import bannerImage from '../assets/banner.jpg';
import '../styles/Header.css'

const Header = ({data}) => {
  return(
    <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <h1>a totally true title</h1>
      <div className="header-navbar">
        <ul className="header-list">
          {data.map(content => <li key={data.indexOf(content)+1} className="header-list-item">{content}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Header;