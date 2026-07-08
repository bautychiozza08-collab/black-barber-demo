import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">B</div>

          <div>
            <h3>Black Barbershop</h3>
            <p>Barbería & Spa · Mérida, Yucatán</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#horarios">Horarios</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-social">
          <a href="https://instagram.com/black_barbershop_mid" target="_blank">
            Instagram
          </a>

          <a
            href="https://wa.me/529996432699?text=Hola%20Black%20Barbershop,%20quiero%20reservar%20un%20turno."
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Black Barbershop. Todos los derechos reservados.</p>

        <span>
          Propuesta conceptual diseñada por <strong>BC Studio</strong>
        </span>
      </div>
    </footer>
  );
}