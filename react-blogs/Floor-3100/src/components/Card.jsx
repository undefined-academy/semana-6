import { useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import('dayjs/locale/es-us.js');

dayjs.extend(relativeTime);
dayjs.locale('es-us');

// Humanizarfechas
function humanizarFecha(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));
    const currentYear = wrappedDate.year() === dayjs().year();
    if (!currentYear) {
        return wrappedDate.format("MMM DD, YYYY")
    } else if (daysDiff <= 30) {
        return wrappedDate.fromNow()
    } else {
        return wrappedDate.format("MMMM DD")
    }
}

const Card = ({ title, desc, img, author, dateTime }) => { 

    useEffect(() => {
        const timeElement = document.getElementById(dateTime);
        if (timeElement) {
            timeElement.innerHTML = "Fecha: " + humanizarFecha(dayjs(timeElement.getAttribute("datetime")));
        }
    }, [dateTime]);
    
    return (
                
        <div className="card">
            <img src={img} alt={title}/>
            <hr />
            <h2><a href="">{title}</a></h2>
            <p>{desc}</p>
            <div className="cardBottom">
                <p className="time"><time id={dateTime} datetime={dateTime}></time></p>
                <p className="author">{author}</p>
            </div>
        </div>
    )
}


export default Card;