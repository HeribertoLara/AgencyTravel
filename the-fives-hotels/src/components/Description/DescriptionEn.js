"use client"
import {useState, useEffect} from "react";
import Image from "next/image";
import "./Description.css";
export default function DescriptionEn(props) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Establecer tamaño inicial
    handleResize();

    // Limpiar el evento al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = windowSize.width < 1550 ? 290 : 415;
  const height = windowSize.width < 1550 ? 630 : 830;
  
  return (
    <section className="caribe">
      <Image
        src="/assets/pool.avif"
        alt="caribean-sea"
        
        className="caribe-sea"
        width={width}
        height={height}       
      />
      <Image
        src="/assets/ocean.avif"
        alt="palmers-sea"
        className="caribe-palmers"
        width={width}
        height={height}
      />
      <article className="caribe__text">
        <h2 className="caribe__title">
          AWAKEN YOUR SENSES AT THE FIVES HOTELS & RESIDENCES, THE SENSORY CHARM
          OF THE MEXICAN CARIBBEAN
        </h2>
        <p className="caribe__description">
          When you stay at The Fives Hotels & Residences, you enter a collection
          of resorts that go beyond simple hospitality to embrace each of your
          senses with its exclusive “ALL SENSES INCLUSIVE” concept. Here, each
          suite residential style, whether one, two or three bedrooms, goes
          beyond the ordinary and defies traditional standards.
          </p>
        <p className="caribe__description">
           At The Fives
          Hotels & Residences, we create experiences that awaken your senses and
          immerse you in a multi-sensory journey. Located in the Riviera Maya,
          Playa del Carmen and Puerto Morelos, our resorts are havens that offer
          not only a luxurious stay, but also authentic local immersions that
          sharpen your five senses.
          </p>
          <p className="caribe__description">
          The Fives Downtown takes you to the heart of
          Playa del Carmen's 5th Avenue, where vibrant restaurants, bars, and
          boutiques become your adventure companions. The Fives Beach embraces
          you among its magical landscapes, enigmatic spaces, and endless
          possibilities to experience, while The Fives Oceanfront, in Puerto
          Morelos, invites you to a relaxing experience by the sea, in a
          sanctuary of white sands and turquoise waters. 
          </p>
          <p className="caribe__description">
          Fives Hotels &
          Residences is the gateway to an unforgettable vacation on the Riviera
          Maya. A place where your dreams are embraced and priceless memories
          are created. Your story awaits here, book now and begin your journey
          to paradise.
        </p>
      </article>
    </section>
  );
}
