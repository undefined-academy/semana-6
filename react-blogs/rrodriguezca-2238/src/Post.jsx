import * as React from "react"
import Card from "./Card";

function Post(){
    const posts = [
        {
          id: 1,
          title: "This is rocking",
          content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
          image: "Card_1.png",
          date: "2020-04-15",
         
        },
        {
          id: 2,
          title: "Don't watch with your mom around",
          content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?.",
          image: "Card_2.png",
          date: "2023-04-20",
          
        },
        {
          id: 3,
          title: "Binge watch",
          content: " amet consectetur, adipisicing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?",
          image: "Card_3.png",
          date: "2021-03-20",
          
        },
        {
          id: 4,
          title: "Don't check the fillers",
          content: "ing elit. Commodi tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?.",
          image: "Card_4.png",
          date: "2000-01-13",
          
        },
        {
          id: 5,
          title: "Not even a bad episode",
          content: "di tenetur laboriosam temporibus quibusdam impedit inventore enim? Alias placeat dolorum amet sint. Odit fugit sed adipisci. Molestiae distinctio vel harum enim?.",
          image: "Card_5.png",
          date: "2022-02-02",
         
        },
       
      ];
      
      return(
        <div className='container'>
        {posts.map(({title, content, image, date})=>(
        <Card title={title} content={content} image={image} date={date}></Card>
        ))}
        </div>
      )      
}
export default Post;