import './App.css'
import Cards from './components/Cards'
import CountComponent from './components/CountComponent'

function App() {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Blog de Programación</h1>
      <CountComponent/>
      <div className="row justify-content-around mt-5">
        <Cards />
      </div>
    </>
  )
}

export default App
