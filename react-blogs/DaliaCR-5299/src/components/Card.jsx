function Card({title, content, image, date, avatar}){
    return(
    <div className="posts">
        <img src={image} alt="" />
        <span>{avatar}</span>
        <h2>{title}</h2>
        <p>{content}</p>
        <span>{date}</span>
    </div>
    )
}
export default Card;