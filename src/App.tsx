import Navbar from "./components/layout/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";

import Hero from "./components/sections/Hero.tsx";
import Services from "./components/sections/Services.tsx";
import Gallery from "./components/sections/Gallery.tsx";
import Booking from "./components/sections/Booking.tsx";
import Location from "./components/sections/Location.tsx";
import Contact from "./components/sections/Contact.tsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}