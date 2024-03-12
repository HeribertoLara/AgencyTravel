"use client"
import Image from "next/image";
import "../../components/Header/Header.css";
import { useEffect, useState } from "react";
import PreCheckin from "./PreCheckin/PreCheckinEs";
import Hamburguer from "./Hamburguer/Hamburguer";

const Header = ({isOpen, setIsOpen}) => {

  const[scroll, setScroll] = useState(false);


  useEffect(()=>{
    /* detect when the user use scroll down */
      const onScroll = () => {
      const scrollCheck = window.scrollY > 0;
      setScroll(scrollCheck);
     }
     document.addEventListener("scroll", onScroll);

     return () => {
       document.removeEventListener("scroll", onScroll);
     };

  }, [scroll, setScroll])

  return (
    
    <header className={scroll? "header header__white": "header header__dark"} >
      <Hamburguer scroll={scroll} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <PreCheckin scroll={scroll}/>
      <section className="header-offers">
        <a href="#" className={scroll? 
          "header__menu border__left-black":
          "header__menu border__left-white" }>
          <Image
            src="/assets/best_price.svg"
            alt="Best prices icon"
            width={20}
            height={20}
          />
          <p className={scroll?"":"color__white"}>OFERTAS ESPECIALES</p>
        </a>
      </section>
      <section className="header__logo">
        <Image
          className={scroll?"fill__white":""}
          src="/assets/logo.svg"
          alt="The Fives Hotels logo"
          width={135}
          height={110}
        />
      </section>
      <section className="header__phone ">
        <a href="tel:+11234567890"> 
          <p className={scroll?"":"color__white"}>USA & CAN:</p> 
          <b className={scroll?"":"color__white"}>+1 123-456-7890</b>
        </a>
        <a href="tel:+521234567890"> 
          <p className={scroll?"":"color__white"}>Mexico:</p> 
          <b className={scroll?"":"color__white"}> +52 123-456-7890</b>
        </a>
      </section>
      <section className="header__language ">
        <a href="#" className={scroll?"border__black":"border__white"}>
          <b className={scroll?"":"color__white"}>
            EN
          </b>
        </a>
        <a href="#">
          <b className={scroll?"":"color__white"}>
          
            ES
          </b>
        </a>
      </section>
      <section className="header__help">
        <button className={scroll?"border__black":"border__white"}>
          <Image
            className={scroll?"fill__white":""}
            src="/assets/question-icon.svg"
            alt="Help icon"
            width={20}
            height={20}
          />
        </button>
      </section> 
    </header>
  );
};
export default Header;
