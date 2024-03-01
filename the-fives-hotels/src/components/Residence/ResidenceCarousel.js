/* components */
import ResidenceCard from './ResidenceCard'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Residence.module.scss'
import "./featuresResidence.scss"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} next-arrow-residence`}
        style={{ 
          ...style, 
          display: "grid", 
          placeItems: "center", 
          background: "black",
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
        className={`${className} prev-arrow-residence`}
        style={{ 
          ...style,  
          display: "grid", 
          placeItems: "center", 
          background: "black",
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
  

export default function ResidenceCarousel({residences}) {
    
    
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
        prevArrow: <SamplePrevArrow />
      };
    return (
      <Slider 
      {...settings}
      className='residence-carousel'
      >
        {residences.map((residence) => (
          <ResidenceCard
            key={residence.id}
            id={residence.id}
            title={residence.title}
            text={residence.text}
            imgUrl={residence.imgUrl}
          />
        ))}
      </Slider>
    );
}
/*  </article> */
