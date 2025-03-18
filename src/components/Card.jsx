const Card = ({ info, data }) => {
  // console.log(type)
  console.log(data);
  return (
    <section className="panel-control-card">
      {(info === 'mercancia') ? (
        <div class="card">
          <p>Nombre: {data.nombre}</p>
          <p>Origen: {data.origen}</p>
          <p>Destino: {data.destino}</p>
          <p>Precio: {data.precio}</p>
        </div>
      ) : (
        <div class="card">
          <p>Nombre: {data.nombre}</p>
          <p>Ciudad: {data.ciudad}</p>
          <p>Telefono: {data.telefono}</p>
        </div>
      )
      }
      <div className="card-body">
        <h2>
        <a href="https://www.youtube.com/watch?v=egFHfruZM3c" target="_blank" rel="noopener noreferrer">
          VER CONTENIDO
        </a>
        </h2>
      </div>
    </section>
  )
}

export default Card