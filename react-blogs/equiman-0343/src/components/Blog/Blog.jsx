import './Blog.css'

const Blog = () => {
  return (
    <section className="blog">
      <h1>
        <a id="blog">Blog</a>
      </h1>

      <div className="post-list">
        <article className="post">
          <a href="https://dev.to/equimancho/usar-multiples-usuarios-con-git-1fci">
            <header>Usar múltiples usuarios con Git</header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101435/dein-site/Git_khgg74.png"
              alt="Git logo"
            />
            <p>
              Una forma sencilla para no enredarse con multiples usuarios de Git
              en la misma maquina y sin tener que vender tu alma.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <span className="tags"> #git #github #productividad </span>
            </footer>
          </a>
        </article>

        <article className="post">
          <a href="https://dev.to/equimancho/vite-configuracion-para-react-3hf2">
            <header>Vite: Configuración para React</header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101435/dein-site/Vite_mscw7k.png"
              alt="Vite logo"
            />
            <p>
              De la configuración más básica a la mas específica. Incluyendo
              formas de automatizar las tareas más aburridoras y tediosas.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <span className="tags"> #react #vscode #vite #eslint </span>
            </footer>
          </a>
        </article>

        <article className="post">
          <a href="https://dev.to/equimancho/mover-el-sistema-de-archivos-de-wsl-a-otro-disco-3fbi">
            <header>Mover el Sistema de Archivos de WSL a otro disco</header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101436/dein-site/WSL_sucajc.png"
              alt="WSL logo"
            />
            <p>
              No pierdas tu valiosa configuración y archivos de WSL cuando
              reinstales tu Windows.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <span className="tags"> #wsl #terminal #ubuntu </span>
            </footer>
          </a>
        </article>

        <article className="post">
          <a href="https://dev.to/equimancho/vscode-crear-archivos-y-directorios-sin-usar-el-raton-1c19">
            <header>
              VSCode: Crear Archivos y Directorios sin usar el ratón
            </header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101436/dein-site/VSCode_kbpuni.png"
              alt="Visual Studio Codo logo"
            />
            <p>
              Aprender a disminuir la dependencia del ratón para realizar tareas
              repetitivas es una buena forma de aumentar tu productividad.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <span className="tags"> #vscode #productividad #webdev </span>
            </footer>
          </a>
        </article>

        <article className="post">
          <a href="https://dev.to/equimancho/codesignal-el-reto-de-calcular-el-area-de-una-figura-3o5k">
            <header>
              CodeSignal: el reto de calcular el área de una figura
            </header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101437/dein-site/CodeSignal_xdzf6x.png"
              alt="Code Signal logo"
            />
            <p>
              Retarse con diferentes tipos de problemas es una buena práctica
              sin importar el nivel en el que te encuentres.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <span className="tags"> #javascript #node #retos </span>
            </footer>
          </a>
        </article>

        <article className="post">
          <a href="https://dev.to/equimancho/como-probar-media-queries-con-chrome-4kb5">
            <header>Como probar media queries con Chrome (o Edge)</header>
            <img
              src="https://res.cloudinary.com/dein-software/image/upload/v1681101436/dein-site/DevTools_ivbbii.png"
              alt="Chrome Dev Tools logo"
            />
            <p>
              El responsive vino para quedarse y los navegadores actuales tienen
              excelentes herramientas que nos pueden ayudar con el proceso de
              depuración.
            </p>
            <footer>
              <span className="published"> 2022-10-19 </span>
              <div className="tags">#chrome #edge #webdev #css</div>
            </footer>
          </a>
        </article>
      </div>
    </section>
  )
}
export default Blog
