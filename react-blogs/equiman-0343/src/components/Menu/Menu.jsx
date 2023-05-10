import './Menu.css'

const Menu = () => {
  return (
    <nav>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul>
        <li>
          <a href="/#about">Acerca</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
        <li>
          <a href="/#social">Sígueme</a>
        </li>
      </ul>
    </nav>
  )
}
export default Menu
