import Card from "./Card";

const articles = [{
    img: "/src/assets/img-1.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
},
{
    img: "/src/assets/img-2.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title2!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
},
{
    img: "/src/assets/img-4.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
},
{
    img: "/src/assets/img-3.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
},
{
    img: "/src/assets/img-5.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
},
{
    img: "/src/assets/img-6.jpg",
    imgAlt: "imagen-de-prueba",
    title: "Prueba de title!!!",
    date: "2023-07-05",
    extract: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores iure ut."
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