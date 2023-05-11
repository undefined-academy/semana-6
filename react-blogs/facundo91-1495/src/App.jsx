import Card from './components/Card';
import Link from './components/Link';
import Button from './components/Button';
import TagsFilter from './components/TagsFilter';

import articles from "./data/articles.json";
import filters from "./data/filters.json";

function App() {

  return (
    <>
   
   <div class="main-container">
        <header className="main-navbar">
            <img src="src/imagenes/" alt="Logo de Castro Barros" />
            <nav>
                <ul class="nav-list">
                    <li><Link isActive={true}>Inicio</Link></li>
                    <li><Link>Subcrivirse</Link></li>
                    <li><Button>Castro Barros</Button></li>
                    <li><Button type="secondary">Discord</Button></li>
                </ul>
            </nav>
        </header>
        <main>
            <section className="featured-posts">
                <article></article>
                <div className="button-container">
                    <button className="button-container">Atras</button>
                    <button className="button-container">Adelante</button>
                </div>
            </section>
            <section className="post-list-container">
                <TagsFilter filters={filters} />
                <div className="post-list">
                    {articles.map((article, index) => {
                        const isExtended = (index + 1) % 4 === 0;
                        const isReversed = (index + 1) % 8 === 0;
                        return <Card key={index} {...article} isExtended={isExtended} isReversed={isReversed} />
                    })}
                </div>
            </section>
        </main>
    </div>
   
    <footer>
      
    </footer>

    </>
  )
}

export default App
