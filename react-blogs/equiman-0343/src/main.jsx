import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClickToComponent } from 'click-to-react-component'
import 'minireset.css'
import './index.css'
import './styles/main.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ClickToComponent />
  </React.StrictMode>
)
