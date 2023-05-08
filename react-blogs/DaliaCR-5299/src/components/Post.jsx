import * as React from "react"
import Card from "./Card";

function Post(){
    const posts = [
        {
          id: 1,
          title: "Introducción a JavaScript",
          content: "En este post aprenderás los conceptos básicos de JavaScript y cómo usarlos en tus proyectos. ¡Comienza tu viaje en la programación web ahora!",
          image: "https://img.freepik.com/vector-gratis/programadores-que-utilizan-lenguaje-programacion-javascript-computadora-gente-pequena-lenguaje-javascript-motor-javascript-concepto-desarrollo-web-js-ilustracion-aislada-violeta-vibrante-brillante_335657-986.jpg?w=1060&t=st=1683505509~exp=1683506109~hmac=f529543311e3273c59ac095ebbd2380338940a8a7f837a5e994f7c8d043fd092",
          date: "2023-04-15",
          avatar: "avatar1.jpg"
        },
        {
          id: 2,
          title: "Construyendo una aplicación React",
          content: "Descubre cómo construir una aplicación web utilizando React. Aprenderás sobre componentes, estados y props, y cómo crear una interfaz de usuario dinámica.",
          image: "imagen2.jpg",
          date: "2023-04-20",
          avatar: "avatar2.jpg"
        },
        {
          id: 3,
          title: "Optimización de rendimiento en React",
          content: "Mejora el rendimiento de tus aplicaciones React utilizando técnicas como memoización, lazy loading y virtualización. Aprende a hacer que tus aplicaciones sean más rápidas y eficientes.",
          image: "imagen3.jpg",
          date: "2023-04-25",
          avatar: "avatar3.jpg"
        },
        {
          id: 4,
          title: "Trabajando con APIs en JavaScript",
          content: "Descubre cómo consumir datos de APIs utilizando JavaScript. Aprende a hacer solicitudes HTTP, procesar respuestas y mostrar los datos en tu aplicación.",
          image: "imagen4.jpg",
          date: "2023-04-30",
          avatar: "avatar4.jpg"
        },
        {
          id: 5,
          title: "Gestión de estado con Redux",
          content: "Aprende a utilizar Redux para gestionar el estado de tu aplicación React de manera eficiente. Descubre cómo centralizar y organizar el estado de tu aplicación.",
          image: "imagen5.jpg",
          date: "2023-05-05",
          avatar: "avatar5.jpg"
        },
        {
          id: 6,
          title: "Pruebas unitarias con Jest",
          content: "Aprende a escribir pruebas unitarias para tu código JavaScript utilizando Jest. Descubre cómo automatizar las pruebas y asegurar la calidad de tu aplicación.",
          image: "imagen6.jpg",
          date: "2023-05-07",
          avatar: "avatar6.jpg"
        }
      ];
      
      return(
        <div className='container'>
        {posts.map(({title, content, image, date, avatar})=>(
        <Card title={title} content={content} image={image} date={date} avatar={avatar}></Card>
        ))}
        </div>
      )      
}
export default Post;