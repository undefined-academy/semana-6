import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Card from './components/Card'
import Footer from './components/Footer'
import articles from './data/articles.json'


function App() {
  return (
    <>
      <Nav></Nav>
      
      <Main></Main> 

      <div className='container'>
        {articles.map(({ title, desc, img, author, dateTime }) =>
            <Card title={title} desc={desc} img={img} author={author} dateTime={dateTime}></Card>
          )
        }
      </div>

      <Footer></Footer>
      
    </>
  )
}

export default App
