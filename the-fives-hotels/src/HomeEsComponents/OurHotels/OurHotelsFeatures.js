export const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  export const ArrowLeft = ({ onClick, ...rest }) => {
    const arrowLeft = '/assets/prev_arrow.svg';
  
    const {
    
      carouselState: { currentSlide, deviceType },
    } = rest;
    const handleClick = () => {
        onClick();
      };
    
      return (
        <button onClick={() => handleClick()} className="carousel-button-left">
          <span className="arrow_content_prev">
            <img src={arrowLeft} alt="arrow_prev" />
          </span>
        </button>
      );
    };

    export const ArrowRigth = ({ onClick, ...rest }) => {
        const arrowRigth = '/assets/next_arrow.svg';
        const {
       
          carouselState: { currentSlide, deviceType },
        } = rest;
      
        const handleClick = () => {
          onClick();
        };
        return (
          <button onClick={() => handleClick()} className="carousel-button-right">
            <span className="arrow_content_next">
              <img src={arrowRigth} alt="arrow_next" />
            </span>
          </button>
        );
      };