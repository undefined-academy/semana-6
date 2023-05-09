import * as React from "react";
import Hero from "./Hero";
import Navegacion from "./Navegacion";

function Header (){
    return(
    <header className="header">
        <Navegacion />
        <Hero />
        
        
    </header>
    )
}

export default Header;