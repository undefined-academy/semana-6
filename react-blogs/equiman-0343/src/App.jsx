import { Header, Contact, Footer, Me } from './components'
import Blog from './components/Blog/Blog'

function App() {
  return (
    <>
      <main>
        <Header />

        <Me />

        <Blog />

        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
