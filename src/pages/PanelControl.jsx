import Card from "../components/Card"
import { clientes } from "../database"
import { mercancia } from "../database"
import { tiposCards } from "../database"

const PanelControl = () => {
  return (
    <section className="panel-control">
      <div className="panel-contenido">
        <div className="panel-contenidoUno">
        <h1>MOTO PASION</h1>
        <h3>Buscamos crear una comunidad donde cada motociclista, desde el más experimentado hasta el 
          principiante, encuentre rutas épicas, consejos útiles y la mejor información sobre equipamiento
           y mecánica. Creemos que una moto no es solo un medio de transporte, sino una forma de vida, una
            historia por escribir en cada kilómetro recorrido.</h3>
        </div>
        {
          clientes.map((cliente) => <Card info={tiposCards[0]} data={cliente} />)
        }        
      </div>
    </section>
    
  );
};

export default PanelControl;