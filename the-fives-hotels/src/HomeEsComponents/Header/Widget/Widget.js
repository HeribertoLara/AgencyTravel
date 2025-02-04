/* hooks */
import { useState, useEffect } from "react";
/* components */
import Dates from "./Dates/Dates";
import Guests from "./Guests/Guests";
import SelectHotel from "./SelectHotel/SelectHotel";
import SwitchToogle from "./SwitchToogle/SwitchToogle";
/* libraries */
import { format } from "date-fns";
import { addDays } from "date-fns";
import Image from "next/image";

/* OPCIONES  DE HOTELES */
import hotelOptions from "./hotelOptions";
import reservHotelOptions from "./reservHotelOptions";
/* Notificaciones */
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* styles */
import "./widget.scss";
const BookingForm = () => {

  const [adults, setAdults] = useState(2);
  const [airportsData, setAirportsData] = useState([]);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [airportError, setAirportError] = useState(false);
  const [childAges, setChildAges] = useState([]);
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
    childAges,
    promoCode,
    urlBase
  }) => {
    // Inicializa la URL base dependiendo de si la reserva incluye vuelo
    let url = withFly
      ? `${urlBase}/${reservHotel.location}/${reservHotel.value}/booking-engine/ibe5.main?hotel=${reservHotel.noHotel}&aDate=${arrivalDate}&dDate=${departureDate}&adults=${adults}&child=${childAges.length}&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=1&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${promoCode}&view_type=&groupId=`
      : `${urlBase}/${hotel.value}/${arrivalDate}/${departureDate}/${adults}`;
  
    // Agrega parámetros para las edades de los niños, si aplica
    if (childAges.length > 0) {
      const childrenAges = childAges.join(withFly ? "&childages=" : ";");
      url += withFly ? `&childages=${childrenAges}` : `;${childrenAges}`;
    }
  
    // Añade el código promocional a la URL, si está presente
    if (promoCode) {
      url += withFly ? `&cp=${promoCode}` : `?cp=${promoCode}`;
    }
  
    return url;
  };
  
  const validateHotelSelection = () => {
    return withFly
      ? reservHotel.value ? true : (toast.error("POR FAVOR SELECCIONA UN HOTEL PARA RESERVAR CON VUELO."), false)
      : hotel.value ? true : (toast.error("POR FAVOR SELECCIONA UN HOTEL PARA RESERVAR SIN VUELO."), false);
  };


  const validateDates = () => {
    if (!arrivalDate || !departureDate) {
      toast.error("Selecciona fechas de llegada y de partida.");
      return false;
    }
    if (arrivalDate >= departureDate) {
      toast.error("La fecha de check Out debe ser mayor a la fecha del check in.");
      return false;
    }
    return true;
  };

  const validateAdults = () => {
    if (adults <= 0) {
      toast.error("por favor selecciona por lo menos un adulto.");
      return false;
    }
    return true;
  };

  const validateChildrenAges = () => {
    if (childAges.some((child) => child < 0 || child > 17)) {
      toast.error("por favor selecciona la edad de los niños entre 0 a 16 años.");
      return false;
    }
    return true;
  };

  // Función para formatear y validar las fechas
  const formatAndValidateDates = () => {
    if (!arrivalDate || !departureDate) {
      toast.error("por favor selecciona  fechas de llegada y de salida.");
      return null; // Retorna null si las fechas no están seleccionadas
    }
    if (arrivalDate >= departureDate) {
      toast.error("la fecha de salida no puede ser menro a la fecha de llegada.");
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
        childAges: childAges,
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
        label: "SELECCIONA UN HOTEL",
        noHotel: "",
        location: "",
      },
    ):setHotel(
      {
        value: "fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf",
        label: "TODOS LOS HOTELES",
      },
    )
  }
};


  return (
    <form onSubmit={handleSubmit} className="widget">
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
      <section className="widget__form--container">
        <SelectHotel
          hotel={hotel}
          setHotel={setHotel}
          withFly={withFly}
          reservHotel={reservHotel}
          setReservHotel={setReservHotel}
         
        />

        {/* boton toogle */}
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
        <Dates
          arrivalDate={arrivalDate}
          setArrivalDate={setArrivalDate}
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
        />
        <Guests
          adults={adults}
          setAdults={setAdults}
          childAges={childAges}
          setChildAges={setChildAges}
          numberChilds={numberChilds}
          setNumberChilds={setNumberChilds}
          maxNumberChilds={maxNumberChilds}
          hotelLabel={hotel.label}
        />
        
        <section className="widget__field--pc">
          <label>CÓDIGO PROMOCIONAL</label>
          <div className="widget__field-input">
            <Image
              src="/assets/Descuento.svg"
              width={18}
              height={18}
              alt="best-price-icon"
              className="wiget__field--best-price"
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
        <div className="widget__field">
          <button type="submit" className="widget__button">
            RESERVA AHORA
          </button>
          <aside className="widget__field--best-price-legend">
            <Image
              src="/assets/best_price.svg"
              width={15}
              height={15}
              alt="best-price-icon"
              className="wiget__field--best-price"
            />
            <p className="widget__field--best-price">MEJOR PRECIO GARANTIZADO</p>
          </aside>
        </div>
      </section>
    </form>
  );
};

export default BookingForm;
