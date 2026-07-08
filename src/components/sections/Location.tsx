import "./Location.css";

export default function Location() {
  return (
    <section className="location" id="ubicacion">
      <div className="container location-grid">

        <div className="location-info">

          <span className="section-tag">
            Ubicación
          </span>

          <h2>
            Estamos en el corazón
            <span> de Mérida.</span>
          </h2>

          <p>
            Visitanos en un espacio moderno pensado para que disfrutes la
            experiencia completa. Desde que entrás hasta que salís, cada detalle
            está cuidado.
          </p>

          <div className="location-card">

            <h3>Black Barbershop</h3>

            <p>
              📍 Calle 51 x 15 y 21
              <br />
              Miguel Hidalgo
              <br />
              Mérida, Yucatán
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              className="map-button"
            >
              Ver en Google Maps
            </a>

          </div>

        </div>

        <div className="map-container">

          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Merida,Yucatan&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}