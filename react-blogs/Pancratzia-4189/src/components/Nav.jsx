import * as React from "react";
import LinkNav from "./LinkNav";
import Barra from "./Barra";

function Nav() {
  return (
    <nav className="navegacion">
      <div className="contenedor contenedor-navegacion">
       <Barra />

        <ul className="links-navegacion">
          <LinkNav href="#">Inicio</LinkNav>
          <LinkNav href="#blog">Blog</LinkNav>
          <LinkNav href="#contacto">Contacto</LinkNav>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
