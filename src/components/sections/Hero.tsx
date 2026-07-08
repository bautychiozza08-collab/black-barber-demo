import "./Hero.css";
import Button from "../ui/Button.tsx";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-tag">
          ★ La barbería donde el estilo comienza.
        </span>

        <h1>
          Más que un corte.
          <br />
          <span>Una experiencia.</span>
        </h1>

        <p>
          Cortes premium, fades perfectos, barba y atención personalizada.
          Descubrí por qué Black Barbershop es una de las barberías más
          reconocidas de Mérida.
        </p>

        <div className="hero-buttons">
          <Button
            href="https://wa.me/529996432699"
            variant="primary"
          >
            Reservar turno
          </Button>

          <Button
            href="#galeria"
            variant="secondary"
          >
            Ver galería
          </Button>
        </div>

      </div>

      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

    </section>
  );
}