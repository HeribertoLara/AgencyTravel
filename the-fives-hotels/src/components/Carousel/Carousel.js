
import Card from '../Card/Card'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow`}
      style={{ 
        ...style, 
        display: "grid", 
        placeItems: "center", 
        background: "white",
        backgroundImage: "url('/assets/next_arrow.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "transparent",
        fontSize: "2rem",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        content:" "

       }}
      onClick={onClick}
    >
      {/* <Image src="/assets/next_arrow.svg" alt="arrow-right" width={50} height={50} /> */}
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ 
        ...style,  
        display: "grid", 
        placeItems: "center", 
        background: "white",
        backgroundImage: "url('/assets/prev_arrow.svg')", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "transparent",
        fontSize: "2rem",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        content:" " 
      }}
      onClick={onClick}
    />
  );
}


export default function Carousel({cards}) {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Define el tamaño máximo para dispositivos móviles
        settings: {
          slidesToShow: 1, // Solo muestra 1 slide en dispositivos móviles
          slidesToScroll: 1,
          nextArrow: false, // Oculta la flecha siguiente
          prevArrow: false // Oculta la flecha anterior
        }
      }
    ]
  };

  return (

    <Slider  {...settings}>
      {cards.map(card => (
        <Card 
          key={card.id} 
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
          />
      ))}
    </Slider>

  )
}

