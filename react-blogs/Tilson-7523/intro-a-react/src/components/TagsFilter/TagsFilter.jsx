import classNames from "classnames";
import { useState } from "react";
import "./Tags-filter.scss"


const Filter = ({children, href='#', isActive, onClick}) => {
    return (
        <li className={
            classNames({
                "is-active-filter": isActive
            })
        }>
            <a 
             className="filter paragraph paragraph-sm font-bold" href={href} 
             onClick={ (event)=> {
                event.preventDefault()
                onClick(children)
                }}
            >
                {children}</a>
        </li>
    )
}



const TagsFilter = ({filters=[]}) => {

    const [firstFilter] = filters
    const [activeFilter, setActiveFilter] = useState(firstFilter.name)

    return (
        <nav className="tags-filter">
        <div className="filter-list-scroll-hider">
            <ul className="nav-list filter-list">

                { filters.map((filter, index) => 
                <Filter 
                    onClick={setActiveFilter} 
                    key={index} 
                    href={filter.href} 
                    isActive={activeFilter === filter.name}  
                >
                    {filter.name}</Filter> 
                )}
            </ul>
        </div>
        
        <input type="search" className="input" placeholder="Buscar" />
        </nav>
    );
};

export default TagsFilter;