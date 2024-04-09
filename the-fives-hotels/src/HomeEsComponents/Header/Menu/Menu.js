"use client";
import Droplist from "./DroplistTwo/Droplist"
import DoubleDropList from "./DoubleDropList/DoubleDropList";
import Link from "next/link";
import Image from "next/image";
import "../../../components/Menu/Menu.scss"


export default function Menu({ setIsOpen, isOpen }) {
  const menu = {
    title: "DESTINOS Y RESORTS",
    items: [
      {
        name: "THE FIVES BEACH HOTEL & RESIDENCES",
        url: "#",
      },
      {
        name: "THE FIVES DOWNTOWN HOTEL & RESIDENCES",
        url: "#",
      },
      {
        name: "THE FIVES OCEANFRONT PUERTO MORELOS",
        url: "#",
      },
      {
        name: "THE BEACHFRONT BY THE FIVES HOTELS",
        url: "#",
      },
      {
        name: "THE BEACHFRONT BY THE FIVES HOTE",
        url: "#",
      },
      {
        name: "DESTINOS",
        url: "#",
      },
    ],
  };

  const restaurants = {
    title: "RESTAURANTES",
    items: [
      {
        name: "THE FIVES BEACH HOTEL & RESIDENCES",

        restaurants: [
          {
            name: "AREZZO",
            url: "#",
            description: "Italian Cuisine",
          },
          {
            name: "BAR PALMAS",
            url: "#",
            description: "Bar",
          },
          {
            name: "BREEZE BURGUER",
            url: "#",
            description: "Burger Restaurant",
          },
          {
            name: "CANTINA 1910",
            url: "#",
            description: "Mexican Cuisine",
          },
          {
            name: "MESTIZO",
            url: "#",
            description: "Mexican Cuisine",
          },
          {
            name: "THE GIN BAR",
            url: "#",
            description: "Bar",
          },
          {
            name: "ZKY BAR",
            url: "#",
            description: "Bar",
          },
          {
            name: "FLAVOURS",
            url: "#",
            description: "International Cuisine",
          },
          {
            name: "OKA SUSHI",
            url: "#",
            description: "Japanese Cuisine",
          },
          {
            name: "KOH THAI - WOK CUISINE",
            url: "#",
            description: "Thai Cuisine",
          },
          {
            name: "SEA OLIVE - CUISINE DU SOLEIL",
            url: "#",
            description: "Mediterranean Cuisine",
          },
          {
            name: "AREZZO - ITALIAN RESTAURANT",
            url: "#",
            description: "Italian Cuisine",
          },
          {
            name: "NATURA - DAY CLUB AND GRILL",
            url: "#",
            description: "Grill",
          },
          {
            name: "LA BRASSERIE - BISTRO CUISINE",
            url: "#",
            description: "Bistro Cuisine",
          },
          {
            name: "LIZZARDS - HEALTHIER & BETTER",
            url: "#",
            description: "Healthy Food",
          },
          {
            name: "MARLEY COFFEE",
            url: "#",
            description: "Coffee Shop",
          },
        ],
      },
      {
        name: "THE FIVES DOWNTOWN",

        restaurants: [
          {
            name: "EL TIGRE - CANTINA MEXICANA",
            url: "#",
            description: "Mexican Cantina",
          },
          {
            name: "MERCATTO",
            url: "#",
            description: "Italian Cuisine",
          },
          {
            name: "FIVES ROOFTOP",
            url: "#",
            description: "Rooftop Restaurant",
          },
          {
            name: "LOLA - ROOFTOP RESTAURANT",
            url: "#",
            description: "Rooftop Restaurant",
          },
        ],
      },
      {
        name: "THE FIVES OCEANFRONT",
        restaurants: [
          {
            name: "MANGLAR LOBBY BAR",
            url: "#",
            description: "Bar",
          },
          {
            name: "ROMARLEY BEACH HOUSE",
            url: "#",
            description: "Beach House",
          },
          {
            name: "K'IIN ROOFTOP",
            url: "#",
            description: "Rooftop",
          },
          {
            name: "ROMARLEY POOL BAR",
            url: "#",
            description: "Pool Bar",
          },
          {
            name: "AL MARE - COCINA ITALIANA",
            url: "#",
            description: "Italian Cuisine",
          },
        ],
      },
    ],
  };

  const PreCheckin = {
    title: "PRE-CHECK-IN",
    items: [
      {
        name: "THE FIVES BEACH",
        url: "#",
      },
      {
        name: "THE FIVES OCEANFRONT",
        url: "#",
      },
    ],
  };

  return (
    <section className="menu">
      <div className="menu__left-side">
        <button className="menu__x-button" onClick={() => setIsOpen(!isOpen)}>
          <Image
            src="/assets/close.svg"
            alt="Close Menu"
            width={20}
            height={20}
            className="menu__close-button-image"
          />
          <p>CLOSE</p>
        </button>
        <section className="header__language-mobile ">
            <a href="#" >
              <b>EN</b>
            </a>
            <a href="#">
              <b>ES</b>
            </a>
        </section>
        <Droplist
          className="menu__droplist"
          name={menu.title}
          options={menu.items}
        />
        <Link className="menu__special-offers" href="#">
          <Image
            src="/assets/Descuento.svg"
            alt="Special Offers"
            width={25}
            height={25}
          />
          <p>OFERTAS ESPECIALES</p>
        </Link>
        <Droplist
          className="menu__droplist"
          name={PreCheckin.title}
          options={PreCheckin.items}
        />
        <DoubleDropList
          key={restaurants.items.name}
          title={restaurants.title}
          items={restaurants.items}
        />
        <article className="menu__anclas">
          <Link className="menu__anchor" href="#">
            SPA BY THE FIVES
          </Link>
          <Link className="menu__anchor" href="#">
            BODAS
          </Link>
          <Link className="menu__anchor" href="#">
            TOURS
          </Link>
          <Link className="menu__anchor" href="#">

            EVENTOS Y REUNIONES          
          </Link>
        </article>
      </div>
      <div className="menu__rigth-side">
        <article className="menu__header">
          <Image
            src="/assets/logo.svg"
            alt="The Fives Hotels logo"
            width={170}
            height={110}
          />
          <section className="header__phone ">
            <a href="tel:+11234567890">
              <p className="color__white">USA & CAN:</p>
              <b className="color__white">+1 123-456-7890</b>
            </a>
            <a href="tel:+521234567890">
              <p className="color__white">Mexico:</p>
              <b className="color__white"> +52 123-456-7890</b>
            </a>
          </section>
          <section className="header__language ">
            <a href="#" className="border__white">
              <b className="color__white">EN</b>
            </a>
            <a href="#">
              <b className="color__white">ES</b>
            </a>
          </section>
          <section className="header__help">
            <button className={"border__white"}>
              <Image
                src="/assets/question-icon.svg"
                alt="Help icon"
                width={20}
                height={20}
              />
            </button>
          </section>
        </article>
        <section className="menu__body">
          <ul className="menu__sections">
            <li className="menu__section">
              <Link className="menu__section-link" href="#">
                BLOG
              </Link>
            </li>
            <li className="menu__section">
              <Link className="menu__section-link" href="#">
                GALERIA
              </Link>
            </li>
            <li className="menu__section">
              <Link className="menu__section-link" href="#">
                SENSE OF JOY
              </Link>
            </li>
          </ul>
          <article className="menu__contact">
            <h3 className="menu__contact-title">
              CONTACTANOS
            </h3>
            
            <a className=" menu__contact-phone" href="tel:+11234567890">
              <p className="color__white">USA & CAN:</p>
              <b className="color__white">+1 123-456-7890</b>
            </a>
            <a className="menu__contact-phone " href="tel:+521234567890">
              <p className="color__white">MEX:</p>
              <b className="color__white"> +52 123-456-7890</b>
            </a>
            <a className="menu__contact-phone " href="tel:+521234567890">
              <p className="color__white">ESPAÑA LLAMADA GRATUITA:</p>
              <b className="color__white"> +52 123-456-7890</b>
            </a>
            <a className="menu__contact-phone " href="tel:+521234567890">
              <p className="color__white">
                BRASIL LLAMADA GRATUITA
              </p>
              <b className="color__white"> +52 123-456-7890</b>
            </a>
            <a className="menu__contact-phone " href="tel:+521234567890">
              <p className="color__white">RESTO DEL MUNDO</p>
              <b className="color__white"> +52 123-456-7890</b>
            </a>
            <address className="menu__contact-address">
            ACCESO XCALACOCO S/N. FRACC. EL LIMONAR 1, PLAYA DEL CARMEN, QUINTANA ROO, C.P. 77710

            </address>

            <a 
              className="menu__contact-email" href="reservationsinfo@thefiveshotels.com">
             
              <b className="color__white"> reservationsinfo@thefiveshotels.com</b>
            </a>
            
          </article>
        </section>
      </div>
    </section>
  );
}
