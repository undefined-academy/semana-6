
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Blog</h1>
    </header>
    <section className="gallery">
        <article className="card">
            <img src="src/assets/img-1.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date1">16/05/22</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
        <article className="card">
            <img src="/src/assets/img-2.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date2"></span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
        <article className="card featured">
            <img src="src/assets/img-4.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date3"></span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
        <article className="card">
            <img src="src/assets/img-3.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date4"></span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
        <article className="card featured">
            <img src="src/assets/img-5.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date5"></span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
        <article className="card">
            <img src="src/assets/img-6.jpg" alt="imagen-de-prueba"/>
            <div className="bodyCard">
                <h2 className="titleCard">Titulo de la card</h2>
                <span className="date" id="date6"></span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut.</p>
            </div>
        </article>
    </section>
    <footer>@2023</footer>
    <script type="module" src="./main.mjs"></script>
    </>
  )
}

export default App
