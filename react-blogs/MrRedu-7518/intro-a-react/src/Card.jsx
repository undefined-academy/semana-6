const articles = [
  {
    id: "1",
    title: "Tepuy Kukenán",
    text: "El tepuy Kukenán​ o Cuquenán es un tepuy en la parroquia Santa Elena de Uairén, municipio Gran Sabana, estado Bolívar, en la región Guayana, parte del país sudamericano de Venezuela. Posee una superficie estimada en 2185 hectáreas. Tiene una altitud de 2680 m y una longitud de 3 km",
  },
  {
    id: "2",
    title: "Monte Roraima",
    text: "El monte Roraima, también conocido como tepuy Roraima, cerro Roraima o simplemente Roraima, con 2810 m s. n. m., es el punto más alto de la cadena de mesetas tepuyes de la sierra de Pacaraima, en Venezuela.",
  },
  {
    id: "3",
    title: "Gran sabana",
    text: "La Gran Sabana es una región localizada al sureste de Venezuela, en el macizo de las Guayanas, también al Sur-este del Estado Bolívar, y que se extiende hasta la frontera con Brasil y Guyana.",
  },
];

const Card = () => {
  const listArticle = articles.map((article) => (
    <div className="post" key={article.id}>
      <h1>{article.title}</h1>
      <p>{article.text}</p>
    </div>
  ));

  return <>{listArticle}</>;
};

export default Card;
