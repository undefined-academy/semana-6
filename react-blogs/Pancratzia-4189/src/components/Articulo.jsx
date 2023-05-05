import * as React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
await import("dayjs/locale/es-us.js");
dayjs.locale("es-us");
dayjs.extend(relativeTime);

function Articulo({ titulo, contenido, img, fecha, id}) {

  const alt = "Imagen de la entrada " + id;
  const imgLink = "src/assets/imgs/" + img;

  function humanize(date) {
    const wrappedDate = dayjs(date);
    const daysDiff = Math.abs(wrappedDate.diff(Date.now(), "days"));

    const isCurrentYear = wrappedDate.isSame(Date.now(), "year");

    if(!isCurrentYear) {
        return wrappedDate.format("MMMM DD, YYYY");
    }else if(daysDiff<=30){
        return wrappedDate.fromNow();
    }else{
        return wrappedDate.format("MMMM DD");
    }
}


  return (
    <article className="articulo">
      <div className="card">
        <div className="imagen-card">
          <img src={imgLink} alt={alt} />
        </div>
        <div className="contenido-card">
          <p className="titulo-contenido-card">{titulo}</p>
          <p className="texto-contenido-card">{contenido}</p>
          <small className="small">{humanize(fecha)}</small>
          <br />
          <a className="boton-card" href="#">
            Leer Más
          </a>
        </div>
      </div>
    </article>
  );
}

export default Articulo;
