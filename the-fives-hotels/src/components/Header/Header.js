"use client";
import "./Header.css";
/* hooks */
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions"
/* react components */
import Image from "next/image";
import Link from "next/link";
/* widgets */
import BookingForm from "./Widget/widget";
import MobileWidget from "./Widget/MobileWidget/MobileWidget";
/* auxiliar components */
import PreCheckin from "../PreCheckin/PreCheckin";
import Hamburguer from "../Hamburguer/Hamburguer";


const Header = ({ isOpen, setIsOpen }) => {
  const [scroll, setScroll] = useState(false);
  const { width } = useWindowDimensions(); // Obtiene el ancho de la ventana.
  const breakpoint = 768; // Establece el punto de corte para móviles.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    /* detect when the user use scroll down */
    const onScroll = () => {
      const scrollCheck = window.scrollY > 0;
      setScroll(scrollCheck);
    };
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <section>
      {
        <header
          className={scroll ? "header header__white" : "header header__dark"}
        >
          <Hamburguer scroll={scroll} isOpen={isOpen} setIsOpen={setIsOpen} />
          <PreCheckin scroll={scroll} />
          <section className="header-offers">
            <a
              href="#"
              className={
                scroll
                  ? "header__menu border__left-black"
                  : "header__menu border__left-white"
              }
            >
              <Image
                src="/assets/best_price.svg"
                alt="Best prices icon"
                width={20}
                height={20}
              />
              <p className={scroll ? "" : "color__white"}>SPECIAL OFFERS</p>
            </a>
          </section>
          <section className="header__logo">
            <Link href="/">
              <Image
                className={scroll ? "fill__white" : ""}
                src="/assets/logo.svg"
                alt="The Fives Hotels logo"
                width={135}
                height={110}
              />
            </Link>
          </section>
          <section className="header__phone ">
            <a href="tel:+11234567890">
              <p className={scroll ? "" : "color__white"}>USA & CAN:</p>
              <b className={scroll ? "" : "color__white"}>+1 123-456-7890</b>
            </a>
            <a href="tel:+521234567890">
              <p className={scroll ? "" : "color__white"}>Mexico:</p>
              <b className={scroll ? "" : "color__white"}> +52 123-456-7890</b>
            </a>
          </section>
          <section className="header__language ">
            <Link
              href="/"
              className={scroll ? "border__black" : "border__white"}
            >
              <b className={scroll ? "" : "color__white"}>EN</b>
            </Link>
            <Link href="/es">
              <b className={scroll ? "" : "color__white"}>ES</b>
            </Link>
          </section>
          <section className="header__help">
            <button className={scroll ? "border__black" : "border__white"}>
              <Image
                className={scroll ? "fill__white" : ""}
                src="/assets/question-icon.svg"
                alt="Help icon"
                width={20}
                height={20}
              />
            </button>
          </section>
        </header>
      }
      {/* Renderiza condicionalmente Widget o MobileWidget basado en el ancho de la ventana. */}
      {isClient &&
        (width > breakpoint ? (
        
            <BookingForm />
         
        ) : (
      
            <MobileWidget />
       
        ))}
      
    </section>
  );
};
export default Header;
