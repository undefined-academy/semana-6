// import { useState, useEffect } from 'react'
import Card from "./components/Card/Card";
import Link from "./components/Link/Link";
import Button from "./components/Button/Button";
import TagsFilter from "./components/TagsFilter";

import articles from "./data/articles.json"
import filters from "./data/filter.json"

function App() {
  return (
    <>
     <div className="main-container">
        <header className="main-navbar">
            <img src="/images/logos/undefined-shell.svg" alt="Logo de Undefined Shell" />
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link isActive={true}>Inicio</Link>
                    </li>
                    <li>
                        <Link>Subscribirse</Link>
                    </li>
                    <li >
                        <Button type="primary">Undefined Acadamy</Button>
                    </li>
                    <li>
                        <Button type="secondary">Discord</Button>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <section className="featured-post">
                <article>
                </article>
                <div className="button-container">
                    <button>Atras</button>
                    <button>Adelante</button>
                </div>
    
            </section>
            
            <section className="post-list-container">
                <TagsFilter filters={filters}></TagsFilter>

                <div className="post-list">
    
                  { articles.map( (article, index) => 
                   { 
                    const isExtended = (index + 1) % 4 === 0;
                    const isReversed = (index + 1) % 8 === 0;
                    return <Card 
                    key={index} 
                    {...article} 
                    isExtended={isExtended}
                    isReversed={isReversed}
                    >

                    </Card>
                    }) }
    
                </div>
            </section>
        </main>
        
    </div>
    </>
  );
}

export default App
