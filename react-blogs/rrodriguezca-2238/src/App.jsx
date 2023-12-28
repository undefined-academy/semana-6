import { useState } from 'react';
import './App.css'
import './index.css'
import Header from './components/Header'
import Main from './components/Post'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;
