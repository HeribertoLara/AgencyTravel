
import CardServices from "./CardServices";
import CardServicesTwo from "./CardServicesTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'
import './servicesGalery.scss';

const images = [
    {
        title: 'WEDDINGS',
        srcImage:"/assets/weddings",
        text: 'Celebrate your special day in style with our exquisite hotel wedding services. Our team of experienced wedding planners will work with you to create a dream wedding that reflects your personality and styleclass:', class:'weedings__services-photo'
    },
    {
        title: 'BOUTIQUE WEDDINGS',
        text: 'Celebrate your special day in style with our exquisite hotel wedding services. Our team of experienced wedding planners will work with you to create a dream wedding that reflects your personality and style.',
        class: 'weddings__boutique-weddings'
    },
    {
        title: 'SAND & SEA WEDDINGS',
        text: 'With their feet in the sand and their hearts synchronized to the rhythm of the waves, they let the story of their love intertwine with the magic of the beach and the sun as their souls agree to share eternity in an intimate seaside celebration.',            
        class: 'weddings__sand-sea'
    },
    {
        title: 'SKY WEDDINGS',
        text: 'Live the experience of vowing eternal love in the heights, a scenario where the sunset, the moon, and the magical views of the beach will be the witnesses of your union, marking the beginning of a life together full of beauty and love.',
        class: 'weddings__sky-weddings'
    },
    {
        title: 'YOUR LOVE IS UNIQUE, YOUR WEDDING TOO!',
        text: 'Because your love is unique, your wedding should be unique as well, so forget the worries, let yourself be pampered and guided by our experts. We invite you to fill out the following form so that one of our boutique dream designers can contact you and together we can create the wedding of your dreams.',
        class: 'weddings__your-love'
    },
    {
        title: 'PENTHOUSE WEDDINGS',
        text: 'Celebrate your love in the exclusivity of your own Presidential Penthouse and enjoy a sublime, intimate, and cozy setting to make your union a memorable day.',
        class: 'weddings__penthouse-weddings'
    }
]


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


export default function GaleryMobile() {



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false, 
          prevArrow: false 
        }
      }
    ]
  };

  return (

    <Slider  {...settings} className="services-galery-mobile">
        <CardServices image={images[0]}/>
        <CardServicesTwo image={images[1]}/>
        <CardServices image={images[2]}/>
        <CardServices image={images[3]}/>
        <CardServicesTwo image={images[4]}/>
        <CardServices image={images[5]}/> 
    </Slider>

  )
}

