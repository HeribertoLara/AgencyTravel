/* components */
import Carousel from "../Carousel/Carousel";
import { TitleSection } from "../TitleSection/TitleSection";

/* styles */ 
import "../../components/OurHotels/OurHotel.scss"

export default function OurHotel() {
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/carousel-down-town.avif",
      title: "THE FIVES DOWNTOWN HOTEL & RESIDENCES",
      description:
        "Gracias a su ubicación privilegiada, este hotel boutique te permite disfrutar de lo mejor de Playa del Carmen. Ven a conocer The Fives Downtown, y enamórate de su esencia modernista, sus hermosos jardínes verticales y...",
    },
    {
      id: 2,
      imgSrc: "/assets/carousel-beach-front.avif",
      title: "THE BEACHFRONT BY THE FIVES HOTELS",
      description:
        "The Beachfront by The Fives Hotels es un hotel boutique de 38 habitaciones solo para adultos, situado en las hermosas playas de Xcalacoco en la Riviera Maya que ofrece un escape íntimo y exclusivo...",
    },
    {
      id: 3,
      imgSrc: "/assets/carousel-puerto-morelos.avif",
      title: "THE FIVES OCEANFRONT PUERTO MORELOS",
      description:
        "Vive una experiencia de lujo, disfrute y relajación en The Fives Oceanfront Riviera Cancún, ubicado en Puerto Morelos, te espera con sus amaneceres espectaculares y con una vista privilegiada del Caribe...",
    },
    {
      id: 4,
      imgSrc: "/assets/carousel-hotel-residences.avif",
      title: "THE FIVES BEACH HOTEL & RESIDENCES",
      description:
        "Este increíble resort cinco estrellas, se ubica en Playa del Carmen, Quintana Roo. Sus residencias de lujos y experiencias sensoriales propias del lugar fueron pensadas para familias y parejas que quieran vivir unas... ",
    },
  ];

  return (
    <section className="our-hotels-section">
      <TitleSection titleBit="NUESTROS" title="HOTELES" />
      <Carousel cards={cards} />
      
    </section>
  );
}
