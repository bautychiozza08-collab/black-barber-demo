import "./Booking.css";

const hours = [
  { day: "Lunes a Viernes", time: "10:00 AM - 8:00 PM" },
  { day: "Sábados", time: "10:00 AM - 7:00 PM" },
  { day: "Domingos", time: "10:00 AM - 4:00 PM" },
];

export default function Booking() {
  return (
    <section className="booking" id="horarios">
      <div className="container booking-grid">
        <div className="booking-content">
          <span className="section-tag">Agenda abierta</span>

          <h2>
            Reservá tu turno
            <span> en minutos.</span>
          </h2>

          <p>
            Elegí el horario que mejor se adapte a vos y escribinos por WhatsApp.
            Nuestro equipo te confirma la disponibilidad.
          </p>

          <a
            className="booking-btn"
            href="https://wa.me/529996432699?text=Hola%20Black%20Barbershop,%20quiero%20reservar%20un%20turno."
            target="_blank"
          >
            Reservar por WhatsApp
          </a>
        </div>

        <div className="hours-card">
          <h3>Horarios</h3>

          {hours.map((item) => (
            <div className="hour-row" key={item.day}>
              <span>{item.day}</span>
              <strong>{item.time}</strong>
            </div>
          ))}

          <div className="hours-note">
            Calle 51, Mérida, Yucatán.
          </div>
        </div>
      </div>
    </section>
  );
}