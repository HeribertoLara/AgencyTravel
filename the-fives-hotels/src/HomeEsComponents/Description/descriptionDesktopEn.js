import React from 'react'
import Image from "next/image";
import "../../components/Description/Description.scss";
export default function DescriptionDesktopEn(props) {
    

    return (
      <>
        <section className="caribe">
          <figure
            style={{ position: "relative", width: "100%", height: "90vh" }}
          >
            <Image
              src="/assets/pool.avif"
              alt="caribean-sea"
              fill
              className="caribe-sea"
            />
          </figure>
          <figure
            style={{ position: "relative", width: "100%", height: "90vh" }}
          >
            <Image
              src="/assets/ocean.avif"
              alt="palmers-sea"
              className="caribe-palmers"
              fill
            />
          </figure>
          <article className="caribe__text">
            <h2 className="caribe__title">
              DESPIERTA TUS SENTIDOS EN THE FIVES HOTELS & RESIDENCES, EL
              ENCANTO SENSORIAL DEL CARIBE MEXICANO
            </h2>
            <p className="caribe__description">
  Al elegir hospedarte en The Fives Hotels &amp; Residences, te sumergirás en una exclusiva colección de hoteles que te llevarán a vivir unas espectaculares vacaciones en México, las cuales trascenderán el significado de hospitalidad al cautivar cada uno de tus sentidos mediante el distintivo concepto &quot;ALL SENSES INCLUSIVE&quot;. Cada suite estilo residencial, ya sea de una, dos o tres habitaciones, supera los estándares convencionales y desafía las expectativas tradicionales de un hotel frente al mar.
</p>

            <p className="caribe__description">
              Nuestra misión es crear experiencias que estimulen tus sentidos y
              te lleven a experimentar un viaje multisensorial al hospedarte en
              cualquiera de nuestros hoteles en México. Estratégicamente
              ubicados en la Riviera Maya, Playa del Carmen y Puerto Morelos,
              nuestros resorts no solo ofrecen una estancia lujosa, sino también
              auténticas inmersiones locales que agudizan tus cinco sentidos.
            </p>
            <p className="caribe__description">
              Descubre nuestros hoteles en México: The Fives Downtown Hotel &
              Residences te lleva al corazón de la 5ª Avenida de Playa del
              Carmen, donde los vibrantes restaurantes, bares y boutiques se
              convierten en tus cómplices de aventura. The Fives Beach Hotel &
              Residences te envuelve con paisajes mágicos, espacios enigmáticos
              y un abanico de posibilidades para experimentar, mientras que The
              Fives Oceanfront Puerto Morelos, en la Riviera Cancún, te invita a
              una experiencia relajante junto al océano, en un santuario de
              arenas blancas y aguas turquesas.
            </p>
            <p className="caribe__description">
              El Caribe Mexicano se erige como la puerta de entrada a unas
              vacaciones inolvidables en la Riviera Maya, un lugar donde tus
              sueños se ven realizados y se crean recuerdos invaluables. Tu
              próxima aventura te aguarda aquí, en nuestros paradisiacos hoteles
              rodeados de impresionantes playas y vistas asombrosas. ¡No esperes
              más, realiza tu reserva ahora y embárcate en un viaje hacia el
              paraíso!
            </p>
          </article>
        </section>
      </>
    );
}
