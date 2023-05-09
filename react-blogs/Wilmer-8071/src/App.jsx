import { Component } from "react";
import './App.css'
import './index.css'
import Header from './componentes/header';
import Main  from "./componentes/main";
import Footer from "./componentes/Footer";


class App extends Component{
  render(){
    
    return (

      <>
    <Header />
    <Main />
    <Footer />
      </>   
    )   
  }
}

export default App;

