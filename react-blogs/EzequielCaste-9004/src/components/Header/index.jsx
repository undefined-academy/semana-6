import { useState } from 'react'
import './header.styles.scss'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header>
        <nav>
          <button 
            onClick={toggleMenu} 
            className={`nav-toggle  ${showMenu  ? 'hamburger--visible' : ''}`} 
          >
            <span className="hamburger"></span>
          </button>
          <div className={`nav col ${showMenu ? 'nav--visible' : ''}`}>
            <ul className="navigation-links">
              <li>Todos</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Web components</li>
              <li>Sistema de diseño</li>
            </ul>
            <div className="search-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
              <input className="search" placeholder="Buscar" type="text" />
          </div>
          </div>
        </nav>
      </header>
  )
}

export default Header