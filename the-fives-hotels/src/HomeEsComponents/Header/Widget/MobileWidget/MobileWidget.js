/* hooks */
import { useState, useEffect } from "react";
/* components */
import Dates from "./../Dates/Dates";
import Guests from "./../Guests/Guests";
import SelectHotel from "./../SelectHotel/SelectHotel";
import SwitchToogle from "./../SwitchToogle/SwitchToogle";
/* libraries */
import { format } from "date-fns";
import { addDays } from "date-fns";
import Image from "next/image";

/* OPCIONES  DE HOTELES */
import hotelOptions from "./../hotelOptions";
import reservHotelOptions from "./../reservHotelOptions";
/* Notificaciones */
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* styles */
import "./mobileWidget.scss";

const MobileWidget = () => {
  const [isActiveWidget, setIsActiveWidget] = useState(true);
  const [adults, setAdults] = useState(2);
  const [airportsData, setAirportsData] = useState([]);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [airportError, setAirportError] = useState(false);
  const [children, setChildren] = useState([]);
  const [city, setCity] = useState("");
  const [departureDate, setDepartureDate] = useState(addDays(new Date(), 3));
  const [error, setError] = useState("");
  const [hotel, setHotel] = useState(hotelOptions[0]);
  const [maxNumberChilds, setMaxNumberChilds] = useState(8);
  const [numberChilds, setNumberChilds] = useState(0);
  const [reservHotel, setReservHotel] = useState(reservHotelOptions[0]);
  const [promoCode, setPromoCode] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [urlBase, setUrlBase] = useState("https://www.reservhotel.com/");
  const [withFly, setWithFly] = useState(false);

  useEffect(() => {
    const newMax =withFly? reservHotelOptions.value === "the-fives-downtown-hotel-and-residences" ? 2 : 8
    :hotelOptions.value === "fivesdowntown" ? 2 : 8;
    setMaxNumberChilds(newMax);
    withFly
      ? setUrlBase("https://www.reservhotel.com")
      : setUrlBase(
          "https://booking.thefiveshotels.com/en/bookcore/availability"
        );
  }, [hotel, withFly]);

  const handleAirportError = (message) => {
    setError(message);
  };

  // Manejador de cambios para `withFly`
  const constructBookingURL = ({
    withFly,
    reservHotel,
    hotel,
    arrivalDate,
    departureDate,
    adults,
    children,
    promoCode,
    urlBase
  }) => {
    // Inicializa la URL base dependiendo de si la reserva incluye vuelo
    let url = withFly
      ? `${urlBase}/${reservHotel.location}/${reservHotel.value}/booking-engine/ibe5.main?hotel=${reservHotel.noHotel}&aDate=${arrivalDate}&dDate=${departureDate}&adults=${adults}&child=${children.length}&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=1&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${promoCode}&view_type=&groupId=`
      : `${urlBase}/${hotel.value}/${arrivalDate}/${departureDate}/${adults}`;
  
    // Agrega parámetros para las edades de los niños, si aplica
    if (children.length > 0) {
      const childrenAges = children.join(withFly ? "&childages=" : ";");
      url += withFly ? `&childages=${childrenAges}` : `;${childrenAges}`;
    }
  
    // Añade el código promocional a la URL, si está presente dependiendo de si es con vuelo o sin vuelo
    if (promoCode) {
      url += withFly ? `&cp=${promoCode}` : `?cp=${promoCode}`;
    }
  
    return url;
  };
  
  const validateHotelSelection = () => {
    return withFly
      ? reservHotel.value ? true : (toast.error("Selecciona un hotel para resrvar con vuelo."), false)
      : hotel.value ? true : (toast.error("Selecciona un Hotel."), false);
  };


  const validateDates = () => {
    if (!arrivalDate || !departureDate) {
      toast.error("Selecciona  fechas de llegada y  salida.");
      return false;
    }
    if (arrivalDate >= departureDate) {
      toast.error("la fecha de salida debe de ser mayor a la fecha de llegada.");
      return false;
    }
    return true;
  };

  const validateAdults = () => {
    if (adults <= 0) {
      toast.error("Incluye al menos un adulto.");
      return false;
    }
    return true;
  };

  const validateChildrenAges = () => {
    if (children.some((child) => child < 0 || child > 17)) {
      toast.error("Selecciona la edad de los niños de 0 a 16.");
      return false;
    }
    return true;
  };

  // Función para formatear y validar las fechas
  const formatAndValidateDates = () => {
    if (!arrivalDate || !departureDate) {
      toast.error("Selecciona fecha de llegada y salida del hotel.");
      return null; 
    }
    if (arrivalDate >= departureDate) {
      toast.error("la fecha de salida deb de ser mayor a la fecha de entrada.");
      return null; // Retorna null si la fecha de llegada es igual o posterior a la de salida
    }

    const dateFormat = withFly ? "dd-MMM-yy" : "yyyy-MM-dd";
    const formattedArrivalDate = format(arrivalDate, dateFormat);
    const formattedDepartureDate = format(departureDate, dateFormat);

    return { formattedArrivalDate, formattedDepartureDate };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const isValidHotel = validateHotelSelection();
      const isValidDates = validateDates();
      const isValidAdults = validateAdults();
      const isValidChildren = validateChildrenAges();
      // Termina la ejecución si alguna validación falla
      if (!isValidHotel || !isValidDates || !isValidAdults || !isValidChildren)
        return;
      const dates = formatAndValidateDates();
      if (!dates) return; 
      /* contruccion de la url */
      const bookingUrl = constructBookingURL({
        withFly: withFly,
        reservHotel: reservHotel,
        hotel: hotel,
        arrivalDate: dates.formattedArrivalDate,
        departureDate: dates.formattedDepartureDate,
        adults: adults,
        children: children,
        promoCode: promoCode,
        urlBase: urlBase
      });

      window.open(bookingUrl, "_blank");
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  };

  const handleWithFlyChange = (withFly) => {
   
  setWithFly(withFly);

  // Obtiene el label actualmente seleccionado
  const selectedLabel = withFly ? hotel.label : reservHotel.label; // 

  // Encuentra la correspondencia basada en el label en los arrays correctos
  const correspondingHotel = withFly
    ? reservHotelOptions.find(option => option.label === selectedLabel) // Busca en reservHotelOptions si withFly es true
    : hotelOptions.find(option => option.label === selectedLabel); // Busca en hotelOptions si withFly es false

  if (correspondingHotel) {
    withFly ? setReservHotel(correspondingHotel) : setHotel(correspondingHotel);
  } else {
    withFly ?setReservHotel(
      {
        value: "",
        label: "SELECT HOTEL",
        noHotel: "",
        location: "",
      },
    ):setHotel(
      {
        value: "fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf",
        label: "ALL HOTELS",
      },
    )
  }
};


   return isActiveWidget ? (
    <section className={`widgetm__container ${isActiveWidget ? "widget-active" : ""}`}>
      

      <button
        className="widgetm__backBtn"
        onClick={() => setIsActiveWidget(false)}
      >
        <Image
          src="/assets/arrow_bread_crumb.svg"
          width={20}
          height={20}
          className="widget--back__btn--image"
          alt="button back"
        />
        <aside>REGRESA</aside>
      </button>

      <form onSubmit={handleSubmit} className="widgetm__form">
        <section className="widgetm--form__container">
          <SelectHotel
            hotel={hotel}
            setHotel={setHotel}
            withFly={withFly}
            reservHotel={reservHotel}
            setReservHotel={setReservHotel}
          />
          <Dates
            arrivalDate={arrivalDate}
            setArrivalDate={setArrivalDate}
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
          />

          <Guests
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            numberChilds={numberChilds}
            setNumberChilds={setNumberChilds}
            maxNumberChilds={maxNumberChilds}
            hotelLabel={hotel.label}
          />
          <section className="widgetm__field--mobile">
            <label>CODIGO PROMOCIONAL</label>
            <div className="widget__field-input">
              <Image
                src="/assets/Descuento.svg"
                width={18}
                height={18}
                alt="best-price-icon"
                className="wigetm__field__best--price"
                style={{
                  width: 'auto', 
                  height: 'auto'
                }}
              />
              <input
                type="text"
                name="promoCode"
                id="promoCode"
                placeholder={""}
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="widget__input"
              />
            </div>
          </section>
          <SwitchToogle
            withFly={withFly}
            setWithFly={setWithFly}
            city={city}
            setCity={setCity}
            airportsData={airportsData}
            setAirportsData={setAirportsData}
            airportError={airportError}
            setAirportError={setAirportError}
            onWithFlyChange={handleWithFlyChange}
            onAirportSelectValidation={handleAirportError}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          
          
          
          <div className="widgetm__field">
            <button type="submit" className="widgetm__button">
              BOOK NOW
            </button>
            <aside className="widgetm__field__bestprice--legend">
              <Image
                src="/assets/best_price.svg"
                width={20}
                height={20}
                alt="best-price-icon"
                className="wigetm__field__bestprice"
              />
              <p className="widgetm__field__bestprice">BEST PRICE GUARANTEE</p>
            </aside>
          </div>
        </section>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  ) : (
    <button
      type="button"
      onClick={() => setIsActiveWidget(true)}
      className="widgetm__btn-booknow"
    >
      BOOK NOW
    </button>
  );
};
export default MobileWidget;
