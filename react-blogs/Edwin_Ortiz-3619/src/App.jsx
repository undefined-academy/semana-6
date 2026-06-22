import Card from "./components/Card/Card";
import TagsFilter from "./components/TagsFilter";
import articles from "./data/articles.json";
import filters from "./data/filters.json";
import Footer  from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="main-container">
        <header className="main-navbar">
          <img
            src="/images/logos/logoskor.svg"
            alt="Logo de skor"
          />
        </header>
        <main>
          <section className="post-list-container">
            <TagsFilter filters={filters} />
            <div className="post-list">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  {...article}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
