import { Header, Footer, Banner, Layout } from './components'

import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Layout>
          <section>
            <h2 className="title-2">How I am?</h2>
            <p>
              I&apos;m an UI/ UX enthusiast, Web animations lover and
              <strong>Front-end Developer</strong> from Colombia ☕ with 3+
              years in the industry.
            </p>
          </section>
        </Layout>
      </main>
      <Footer />
    </>
  )
}

export default App
