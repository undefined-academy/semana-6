
const Card =({freepikId, titulo, parrafo, fecha })=> {
    return (
        <div>
            <img src={`https://img.freepik.com/foto-gratis/${freepikId}`}></img>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <time className="fecha-publicacion" dateTime={fecha}>  {fecha} </time>
        </div>          
    )
}
export default Card;