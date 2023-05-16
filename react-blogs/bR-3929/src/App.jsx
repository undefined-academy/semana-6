import "./App.css";
import NavBar from "./Navbar";
import Card from "./Cards";

const articles = [
  {
    title: "La Birra Bar",
    link: "https://www.instagram.com/labirrabar/?hl=es",
    className: "birra",
    image: "./src/assets/imagesblogs/birrabar.jpg",
    description:
      "Si quieres conocer acerca de nosotros, nuestros local, nuestro menu, accede a nuestra pagina web haciendo click sobre la imagen.",
  },
  {
    title: "Big Pons",
    link: "https://www.instagram.com/big.pons/?hl=es",
    className: "pons",
    image: "./src/assets/imagesblogs/bigpons.jpg",
    description:
      "Si quieres conocer acerca de nosotros, nuestros local, nuestro menu, accede a nuestra pagina web haciendo click sobre la imagen.",
  },
  {
    title: "TBC",
    link: "https://www.instagram.com/theburgercobsas/?hl=es",
    className: "tbc",
    image: "./src/assets/imagesblogs/tbc.jpg",
    description:
      "Si quieres conocer acerca de nosotros, nuestros local, nuestro menu, accede a nuestra pagina web haciendo click sobre la imagen.",
  },
  {
    title: "TFT",
    link: "https://www.instagram.com/labirrabar/?hl=es",
    className: "tft",
    image: "./src/assets/imagesblogs/tft.jpg",
    description:
      "Si quieres conocer acerca de nosotros, nuestros local, nuestro menu, accede a nuestra pagina web haciendo click sobre la imagen.",
  },
];

const App = () => {
  return (
    <>
      <header>
        <nav>
          {articles.map((article) => (
            <NavBar
              referencia={"#" + article.className}
              title={article.title}
            />
          ))}
        </nav>
      </header>
      <main>
        <div className="container">
          {articles.map((article) => (
            <Card
              link={article.link}
              className={article.className}
              image={article.image}
              description={article.description}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
