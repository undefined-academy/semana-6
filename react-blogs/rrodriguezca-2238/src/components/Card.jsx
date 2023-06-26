import { humanize } from "../assets/js/scripts.mjs";

function Card({title, content, image, date}){
    return(
    <div className="Post">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{content}</p>
    <div className="autor">
        <span className="date">{humanize(date)}</span>
    </div>
    </div>
    )
}
export default Card;