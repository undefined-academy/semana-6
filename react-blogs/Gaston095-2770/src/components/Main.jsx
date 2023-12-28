import Card from "./Card";

const articles = [{
    img: "/src/assets/img-1.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del primer post",
    date: "2023-08-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
{
    img: "/src/assets/img-2.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del segundo post",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
{
    img: "/src/assets/img-4.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del tercer post",
    date: "2022-01-09",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
{
    img: "/src/assets/img-3.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del cuarto post",
    date: "2023-07-08",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
{
    img: "/src/assets/img-5.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del quinto post",
    date: "2023-06-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
{
    img: "/src/assets/img-6.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Titulo del sexto post",
    date: "2021-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut dolor sit amet consectetur adipisicing elit."
},
]


function Main() {
    return (
        <section className="gallery">
            {articles.map((article, index) => (
                <Card key={index} {...article} />
            ))}

        </section>
    )
}

export default Main;