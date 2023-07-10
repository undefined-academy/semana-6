import Time from "./Time";

const Card = ({img, imgAlt, title, date, extract}) => {
    return (
        <>
        <article className="card">
            <img src={img} alt={imgAlt}/>
            <div className="bodyCard">
                <h2 className="titleCard">{title}</h2>
                <Time>{date}</Time>
                <p>{extract}</p>
            </div>
        </article>
        </>
        
    )
}

export default Card;