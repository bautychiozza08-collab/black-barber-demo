import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const whatsappLink =
    "https://wa.me/529996432699?text=Hola%20Black%20Barbershop,%20quiero%20reservar%20un%20turno.";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#" className="nav-brand">
        <div className="nav-logo">B</div>

        <div>
          <strong>Black</strong>
          <span>Barbershop & Spa</span>
        </div>
      </a>

      <nav className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#horarios">Horarios</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>

      <a href={whatsappLink} target="_blank" className="nav-button">
        Reservar turno
      </a>
    </header>
  );
}