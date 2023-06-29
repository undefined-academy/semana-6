import "./Header.scss"
import { useState } from "react";
import Tab from "../Tab/Tab";



const showHideMenu = () => {
    const navLinks = document.querySelector('.menu');
    navLinks.classList.toggle('show');
}

const Header = ({ tabs = [] }) => {
    const [ activeFilter, setActiveFilter ] = useState(tabs[0].name);
    return (
    <>
        <nav>
            <button className="toggle-menu" onClick={showHideMenu}>&#9776;</button>
            <ul className="menu">
                {tabs.map(
                    ({name, href}, index) => (
                        <Tab key={index} href={href} isActive={activeFilter == name} onClick={setActiveFilter}>
                            {name}
                        </Tab>
                ))}
            </ul>
        </nav>
    </>
    );
}

export default Header;