import githubIcon from '/src/assets/icons/githubIcon.png'

import './Footer.css'

const Footer = () => (
  <footer>
    <div className="copyright">
      <p>
        &copy; <time dateTime="2023-04-12">2023</time> By Julián Andrés
        Sucerquia.
      </p>
      <nav>
        <a target="_blank" rel="noreferrer" href="https://github.com/zucerkia">
          <img className="github" src={githubIcon} alt="github icon" />
        </a>
      </nav>
    </div>
  </footer>
)

export default Footer
