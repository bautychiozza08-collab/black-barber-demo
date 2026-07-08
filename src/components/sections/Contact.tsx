import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact-box">
          <span className="section-tag">Contacto</span>

          <h2>
            ¿Listo para tu
            <span> próximo corte?</span>
          </h2>

          <p>
            Reservá tu turno por WhatsApp o seguinos en Instagram para ver
            nuestros últimos trabajos.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/529996432699?text=Hola%20Black%20Barbershop,%20quiero%20reservar%20un%20turno."
              target="_blank"
              className="contact-btn primary-contact"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="https://instagram.com/black_barbershop_mid"
              target="_blank"
              className="contact-btn secondary-contact"
            >
              Ver Instagram
            </a>
          </div>

          <div className="contact-mini-grid">
            <div>
              <strong>WhatsApp</strong>
              <span>999 643 2699</span>
            </div>

            <div>
              <strong>Horario</strong>
              <span>Lun a Vie · 10AM - 8PM</span>
            </div>

            <div>
              <strong>Ubicación</strong>
              <span>Mérida, Yucatán</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}