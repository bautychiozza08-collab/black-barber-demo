import "./Gallery.css";

const gallery = [
  {
    title: "Classic Fade",
    category: "Premium Cut",
    image: "/gallery/1.jpg",
  },
  {
    title: "Low Fade",
    category: "Barber Style",
    image: "/gallery/2.jpg",
  },
  {
    title: "Beard Design",
    category: "Beard",
    image: "/gallery/3.jpg",
  },
  {
    title: "Luxury Experience",
    category: "Spa",
    image: "/gallery/4.jpg",
  },
  {
    title: "Skin Fade",
    category: "Modern",
    image: "/gallery/5.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="galeria">
      <div className="container">

        <div className="gallery-header">
          <span>Galería</span>

          <h2>
            Cada corte
            <br />
            cuenta una historia.
          </h2>

          <p>
            Descubrí algunos de los trabajos realizados en Black Barbershop.
          </p>
        </div>

        <div className="gallery-grid">

          {gallery.map((item, index) => (
            <article
              className={`gallery-card card-${index + 1}`}
              key={item.title}
            >

              <img src={item.image} alt={item.title} />

              <div className="gallery-overlay">

                <small>{item.category}</small>

                <h3>{item.title}</h3>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}