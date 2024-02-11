import React from 'react';
import Sidebar from './Sidebar';
import Article from './Article';
import Footer from './Footer';
import collectionOfImages from './images';
import '../styles/MainPage.css';

const suggestionBox = ['One', 'Two', 'Three', 'Four', 'Five'];

const MainPage = () => {
  return(
    <>
      <div className="mainpage">
        <div className="mainpage-section">
          {collectionOfImages.map(obj => <Article key={collectionOfImages.indexOf(obj) + 1} data={obj} />)}
        </div>
        <Sidebar
          data={suggestionBox}
        />
      </div>
      <Footer/>
    </>
  )
}

export default MainPage;