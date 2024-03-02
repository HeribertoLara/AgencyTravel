/* components */
import Carousel from "../Carousel/Carousel";
import { TitleSection } from "../TitleSection/TitleSection";
/* import {DownTown} from "../../../public/assets/carousel-down-town.avif" */
/* import Card from "../Card/Card"; */
/* import Carousel from "react-multi-carousel"; */
/* features */
/* import { responsive, ArrowLeft, ArrowRigth } from "./OurHotelsFeatures";
import { isMobile } from 'react-device-detect';
/* hoooks */
import { useWindowDimensions } from "app/hooks/useWindowDimensions";
/* styles */ 
import "./OurHotel.scss"; 

export default function OurHotel() {
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/carousel-down-town.avif",
      title: "THE FIVES DOWNTOWN HOTEL & RESIDENCES",
      description:
        "Thanks to its privileged location, this boutique hotel allows you to enjoy the best of Playa del Carmen. Stay at The Fives Downtown, and fall in love with its modern design, beautiful vertica gardens, and the best view of the...",
    },
    {
      id: 2,
      imgSrc: "/assets/carousel-beach-front.avif",
      title: "THE BEACHFRONT BY THE FIVES HOTELS",
      description:
        "This stunning Five-Star Resort is located in Playa del Carmen, Quintana Roo. Discover the luxury residences and curated experiences The Beachfront by The Fives Hotels offers for an unforgettable vacation in the...",
    },
    {
      id: 3,
      imgSrc: "/assets/carousel-puerto-morelos.avif",
      title: "THE FIVES OCEANFRONT PUERTO MORELOS",
      description:
        "Live an experience of luxury, enjoyment and relaxation at The Fives Oceanfront Riviera Cancun, located in Puerto Morelos, awaits you with spectacular sunrises and a privileged view of the Mexican Caribbean...",
    },
    {
      id: 4,
      imgSrc: "/assets/carousel-hotel-residences.avif",
      title: "THE FIVES BEACH HOTEL & RESIDENCES",
      description:
        "This stunning Five-Star Resort is located in Playa del Carmen, Quintana Roo. Discover the luxury residences and curated experiences The Fives Beach offers for an unforgettable vacation in the Riviera Maya... ",
    },
  ];
  let maxScreen = 1024;
  const hookWidth = useWindowDimensions();

  return (
    <section className="our-hotels-section">
      <TitleSection titleBit="Our" title=" Hotels" />
      <Carousel cards={cards} />
      
    </section>
  );
}
