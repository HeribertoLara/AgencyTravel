import React from "react";
import ResidencesCarousel from "./ResidenceCarousel";
import style from "../../components/Residence/Residence.module.scss";
import { TitleSection } from "app/components/TitleSection/TitleSection";


export default function Residence(props) {
  const residences = [
    {
      id: 1,
      title: "DISEÑO ESPACIOSO",
      text: "Nos esforzamos por ofrecer a nuestros huéspedes un ambiente residencial y moderno para sus vacaciones. Estamos estableciendo altos estándares de espacio y diseño arquitectónico en la hotelería a través de nuestras espaciosas residencias.",
      imgUrl: "/assets/spacious-design.avif",
    },
    {
      id: 2,
      title: "EXQUISITA DECORACIÓN",
      text: "Nuestros hoteles están decorados de forma única para entrelazar la cultura, el  estilo y la historia de la región en una atmósfera que enaltece la inigualable grandeza caribeña con elegancia atemporal.",
      imgUrl: "/assets/exquisite-decor.avif",
    },
    {
      id: 3,
      title: "COCINAS COMPLETAS",
      text: "Para que en su próxima estancia se sienta como en casa, puede explorar nuestros increíbles destinos y disfrutar un ambiente hogareño al cocinar sus platillos favoritos. Utilice los deliciosos ingredientes que le ofrece la Riviera Maya y prepare su comida en la comodidad de su habitación.",
      imgUrl: "/assets/full-kitchen.avif",
    },
    {
      id: 4,
      title: "ACOGEDORAS SALAS DE ESTAR",
      text: "Con una relajante mezcla de tonos naturales y mobiliario de primera calidad, las salas de estar de estas residencias redefinen el concepto de “acogedor”, llevando la idea del descanso a otro nivel.",
      imgUrl: "/assets/cozy-living-rooms.avif",
    },
    {
      id: 5,
      title: "DISEÑO ESPACIOSO",
      text: "Nos esforzamos por ofrecer a nuestros huéspedes un ambiente residencial y moderno para sus vacaciones. Estamos estableciendo altos estándares de espacio y diseño arquitectónico en la hotelería a través de nuestras espaciosas residencias.",
      imgUrl: "/assets/spacius-design.avif",
    },
    
    {
      id: 7,
      title: "AMENIDADES ESPECIALES",
      text: "Creemos en las experiencias a hechas a la medida de nuestros huéspedes; por ello, proporcionamos encantadoras amenidades diseñadas para complacer a todos los gustos y necesidades, haciendo de cada estancia algo digno de recordar.",
      imgUrl: "/assets/special-amenities.avif",
    },
    {
      id: 8,
      title: "BAÑOS DE ESTILO CONTEMPORÁNEO",
      text: "Nuestros magníficos baños sobresalen del espacio en cada residencia. Los albornoces tan suaves como almohadas, las esculturales bañeras y las duchas de estilo lluvia están ahí para lograr el equilibrio perfecto de intimidad y relajación.",
      imgUrl: "/assets/stylish-batroom.avif",
    },
  ];

  return (
    <section className={style.residences}>
      <article className={style.residencesText}>
        <TitleSection 
            titleBit="SUITES DE ESTILO RESIDENCIAL:" 
            title="MUCHO MÁS QUE UNA SIMPLE HABITACIÓN">
          </TitleSection> 

        <p className={style.text}>
          Siéntase como en casa en un hotel diseñado para complacer incluso a los viajeros más sofisticados. Un oasis caribeño donde la hospitalidad sensorial se mezcla con el genuino encanto maya. No se conforme con cualquier habitación; alójese con nosotros y disfrute de nuestras suites estilo residencia, el punto de encuentro entre la naturaleza, el lujo y el confort.
        </p>

        <button className="cardButton viewMore">  RESERVAR AHORA</button>
      </article>
     <ResidencesCarousel residences={residences} /> 
    </section>
  );/*  */
}
