import Card from "./componets/cards"
import articles from "./componets/articles"
import humanizarFecha from "./componets/humanizeDate";

function humanizarFechas ($dates, i) {
  const datetime = $dates.getAttribute("datetime");
  const humanizedDate = humanizarFecha(datetime)
  $dates.textContent = humanizedDate;
  console.log(humanizedDate)
}

const $dates = document.querySelectorAll("time");
$dates.forEach(humanizarFechas);
function App() {


  return (
    <>
      <body className="layouts">
        <div className="container">
          <nav>
            <ul >
              <li><a href="./Layouts.html"> Blog</a> </li>
            </ul>
            <input type="search" placeholder="Buscar"></input>
          </nav>
          
          {articles.map((article)=> (
            <Card {...article}/>
            ))}
          
        </div>
      </body>
    </>
  )
}

export default App
