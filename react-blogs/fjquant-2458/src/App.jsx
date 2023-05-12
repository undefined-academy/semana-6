import { Component } from "react";
import {Card} from "./Card";


class App extends Component {
  render() {
    const articles =[{
      title: "Corn Island",
      text: "Corn Island es un archipiélago ubicado en la costa sur de este país, conformado por dos islas del mismo nombre con diferencias de que una es más grande que la otra, y están separadas a 16 Km de distancia. Para llegar a ella se puede hacer por avión a través el Aeropuerto Internacional de Managua lo cual son 45min de viaje, o por ferri desde Bluefields recorrido que se toma un tiempo aproximado de 02 horas."
        },{
      title:"Playa Colorado",
      text:"Ubicada en tola, pueblo al sur de la ciudad de Rivas, reconocida por ser sede del Campeonato Mundial Master en el año 2012, considerada una de las mejores playas de Nicaragua, visitada por más de 17 mil turistas en temporadas como semana santa y carnavales, Playa Colorado es popular entre los surfistas por tener olas hasta de 2 metros de alto."
    },{
      title:"Playa El Coco",
      text:"A tan solo 159 km de la capital, al sur de la ciudad Puerto de San Juan, nos situamos en la hermosa Playa El Coco, donde su ubicación ideal, aguas mansas y exuberante vegetación, hace de ellas un destino ideal para vacacionar."
    }]

  return ( 
    <>
    {articles.map(({title, text}) => (
      <Card title={title}>
        {text}
      </Card>
    ))}
    </>
    );
}
}
export default App