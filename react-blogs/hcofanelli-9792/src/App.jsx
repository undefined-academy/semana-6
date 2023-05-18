
import { Card } from './components/Card/Card'
import { Link } from './components/Link/Link'
const articles=[{
  unsplashId:"YTZOyio3Udk",
  title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
  date: "2023-04-10"},
  {
    unsplashId:"6kajEqr84iY",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
    date: "2023-02-25"},
    {
      unsplashId:"-aljSU61s_s",
      title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
      date: "2022-03-06"},
      {
        unsplashId:"1tFxIhtSxxM",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
        date: "2021-04-02"},
        {
          unsplashId:"lAx4E6Gl06s",
          title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
          text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
          date: "2020-05-20"}
]
const links=[ "HTML", "CSS", "Javascript", "Web", "Sistemas de Diseño"]
function App() {
 

  return (
    <>
      <div className="container">
        <nav>
          <ul>
            {
              links.map((link)=><Link dato={link}></Link>)
            }
          </ul>
          <input type="search" placeholder="Buscar"/>
        </nav>
     {
     articles.map((article)=>
     <Card {...article}></Card>)
     }
      </div>
<footer>
  <div>Hernan Cofanelli-2023</div>
</footer>
    </>
  )
}

export default App
