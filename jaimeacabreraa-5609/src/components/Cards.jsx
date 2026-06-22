import { useState } from "react";

const Cards = () => {
    const [datos] = useState([
        {
            nombre: "Introducción a Python",
            url: "https://www.example.com/python/intro",
            descripcion: "Una introducción básica a Python para principiantes",
            autor: "John Doe",
            imagen: "https://img.freepik.com/iconos-gratis/serpientes_318-368381.jpg",
            tags: ["Python", "Programación", "Principiantes"],
            fecha_publicacion: "2022-03-15"
        },
        {
            nombre: "Desarrollo web con Django",
            url: "https://www.example.com/django",
            descripcion: "Cómo crear aplicaciones web con el framework Django",
            autor: "Jane Smith",
            imagen: "https://1000marcas.net/wp-content/uploads/2021/06/Django-Logo.png",
            tags: ["Django", "Python", "Desarrollo Web"],
            fecha_publicacion: "2021-11-02"
        },
        {
            nombre: "Introducción a la programación orientada a objetos",
            url: "https://www.example.com/oop/intro",
            descripcion: "Una introducción a los conceptos básicos de la programación orientada a objetos",
            imagen: "https://edteam-media.s3.amazonaws.com/infographics/original/0ac8710b-1d6f-4f31-a5df-4a9dd3c8a903.png",
            autor: "Bob Johnson",
            tags: ["Programación Orientada a Objetos", "Java", "Conceptos Básicos"],
            fecha_publicacion: "2023-01-10"
        },
        {
            nombre: "Aprende JavaScript desde cero",
            url: "https://www.example.com/javascript/intro",
            descripcion: "Un curso completo para principiantes que desean aprender JavaScript",
            autor: "Maria Rodriguez",
            imagen: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
            tags: ["JavaScript", "Programación", "Principiantes"],
            fecha_publicacion: "2022-08-20"
        },
        {
            nombre: "Machine Learning para todos",
            url: "https://www.example.com/machine-learning",
            descripcion: "Descubre los fundamentos del Machine Learning y cómo aplicarlo en proyectos reales",
            autor: "Carlos Gomez",
            imagen: "https://www.atriainnovation.com/wp-content/uploads/2021/02/portada.jpg",
            tags: ["Machine Learning", "Inteligencia Artificial", "Data Science"],
            fecha_publicacion: "2023-03-05"
        },
        {
            nombre: "Fundamentos de HTML y CSS",
            url: "https://www.example.com/html-css/fundamentos",
            descripcion: "Aprende los conceptos básicos de HTML y CSS para crear páginas web",
            autor: "Laura Martinez",
            imagen: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
            tags: ["HTML", "CSS", "Desarrollo Web"],
            fecha_publicacion: "2022-06-12"
        }
    ]);

    return (
        datos.map((dato, index) => {
            console.log("DATO", dato);
            const {
                nombre,
                url,
                descripcion,
                imagen,
                autor,
                tags,
                fecha_publicacion,
            } = dato;
            return (
                <div key={index} className="card" style={{ width: 18 + 'rem' }}>
                    <img src={imagen} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <div className="card-author">{autor}</div>
                        <div className="card-date">Published on {fecha_publicacion}</div>
                        <div className="card-tags  mt-3">
                            {tags.map((tag, index) => (
                                <span key={index} className="badge bg-primary">{tag}</span>
                            ))}
                        </div>
                        <a href={url} className="btn btn-primary mt-3">Leer mas</a>
                    </div>
                </div>
            )
        })
    );
}

export default Cards;
