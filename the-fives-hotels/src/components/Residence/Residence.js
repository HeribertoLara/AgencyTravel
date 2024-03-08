import React from "react";
import ResidencesCarousel from "./ResidenceCarousel";
import style from "./Residence.module.scss";


export default function Residence(props) {
  const residences = [
    {
      id: 1,
      title: "SPACIOUS DESIGN",
      text: "We strive to present our guests with a modern residential ambiance for their vacations. We pride ourselves on setting hotel space and architectonical design standards through our bright and airy residence-style suites.",
      imgUrl: "/assets/spacious-design.avif",
    },
    {
      id: 2,
      title: "EXQUISITE DÉCOR",
      text: "Our hotels are uniquely decorated to embrace the relevant local culture, style, and history in an atmosphere of unmatched Caribbean grandeur and timeless elegance.",
      imgUrl: "/assets/exquisite-decor.avif",
    },
    {
      id: 3,
      title: "FULL KITCHEN",
      text: "To make your next stay feel more like home, you can explore our incredible destination and still come home to your favorite comfort food. Use the fresh ingredients that the Mayan Riviera offers and whip up a delicious dish in the calm of your room.",
      imgUrl: "/assets/full-kitchen.avif",
    },
    {
      id: 4,
      title: "COZY LIVING ROOMS",
      text: "With a relaxing blend of natural tones and rich, comfortable furnishings, these residences living areas redefine the concept of welcoming, taking the idea of leisure to another level.",
      imgUrl: "/assets/cozy-living-rooms.avif",
    },
    {
      id: 5,
      title: "SPACIOUS DESIGN",
      text: "We strive to present our guests with a modern residential ambiance for their vacations. We pride ourselves on setting hotel space and architectonical design standards through our bright and airy residence-style suites.",
      imgUrl: "/assets/spacius-design.avif",
    },
    {
      id: 6,
      title: "SPACIOUS DESIGN",
      text: "We strive to present our guests with a modern residential ambiance for their vacations. We pride ourselves on setting hotel space and architectonical design standards through our bright and airy residence-style suites.",
      imgUrl: "/assets/spacious-design.avif",
    },
    {
      id: 7,
      title: "SPECIAL AMENITIES",
      text: "We offer a wide range of special amenities to make your stay even more comfortable and enjoyable. Our residence-style suites are designed to provide you with everything you need to make your stay unforgettable.",
      imgUrl: "/assets/special-amenities.avif",
    },
    {
      id: 8,
      title: "STYLISH BATHROOMS",
      text: "Our gorgeous bathrooms flow from the rest of the space in each residence. Pillow-soft bathrobes, sculptural bathtubs, and rainfall showers are there to achieve the perfect balance of intimacy and relaxation.",
      imgUrl: "/assets/stylish-batroom.avif",
    },
  ];

  return (
    <section className={style.residences}>
      <article className={style.residencesText}>
        <h2>RESIDENCE-STYLE SUITS</h2>
        <h3>MUCH MORE THAN JUST A ROOM</h3>

        <p className={style.text}>
          Make yourself home in a hotel designed to please the most
          sophisticated travelers. A Caribbean oasis where sensory hospitality
          meets genuine Mayan charm. Please don’t settle for an ordinary room;
          stay with us and enjoy our residence-style suites, the meeting point
          of nature, luxury, and comfort.
        </p>

        <button className="cardButton viewMore">BOOK NOW</button>
      </article>
     <ResidencesCarousel residences={residences} /> 
    </section>
  );/*  */
}
