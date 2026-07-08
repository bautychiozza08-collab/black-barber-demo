import "./Services.css";

const services = [
  {
    title: "Corte Premium",
    price: "Desde $250 MXN",
    description:
      "Cortes modernos, clásicos y personalizados según tu estilo.",
    icon: "✂️",
  },
  {
    title: "Fade Profesional",
    price: "Desde $300 MXN",
    description:
      "Degradados limpios con precisión y terminaciones perfectas.",
    icon: "🔥",
  },
  {
    title: "Barba & Perfilado",
    price: "Desde $180 MXN",
    description:
      "Diseño, perfilado y cuidado completo para tu barba.",
    icon: "🧔",
  },
  {
    title: "Spa Facial",
    price: "Desde $350 MXN",
    description:
      "Toallas calientes, limpieza facial y relajación premium.",
    icon: "💎",
  },
];

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">

        <span className="section-tag">
          Nuestros Servicios
        </span>

        <h2>
          Diseñados para que
          <span> salgas impecable.</span>
        </h2>

        <p className="section-description">
          Cada servicio está pensado para ofrecer una experiencia premium,
          utilizando técnicas modernas y una atención personalizada.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-footer">

                <strong>{service.price}</strong>

                <button>
                  Reservar →
                </button>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}