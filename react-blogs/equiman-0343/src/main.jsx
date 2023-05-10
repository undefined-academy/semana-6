import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClickToComponent } from 'click-to-react-component'
import { BrowserRouter } from 'react-router-dom'
import 'minireset.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ClickToComponent />
    </BrowserRouter>
  </React.StrictMode>
)
