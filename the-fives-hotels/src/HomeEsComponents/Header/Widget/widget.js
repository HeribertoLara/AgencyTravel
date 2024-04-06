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
import "./widget.scss";
import Image from "next/image";

/* OPCIONES  DE HOTELES */
import hotelOptions from "./hotelOptions";
import reservHotelOptions from "./reservHotelOptions";
/* Notificaciones */
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [hotel, setHotel] = useState(hotelOptions[0]);
  /* valor seteado con el segundo hotel */
  const [reservHotel, setReservHotel] = useState(reservHotelOptions[0]);
  /* States */
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(addDays(new Date(), 3));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState([]);
  const [numberChilds, setNumberChilds] = useState(0);
  const [maxNumberChilds, setMaxNumberChilds] = useState(8);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const [withFly, setWithFly] = useState(false);
  const [city, setCity] = useState("");
  const [airportsData, setAirportsData] = useState([]);
  const [airportError, setAirportError] = useState(false);
  const [urlBase, setUrlBase] = useState("https://www.reservhotel.com/");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const newMax = hotel.value === "fivesdowntown" ? 2 : 8;
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
  const handleWithFlyChange = () => {
    const newWithFlyValue = !withFly;
    setWithFly(newWithFlyValue);

    // Lógica para sincronizar la selección del hotel con el estado de 'withFly'
    const correspondingHotel = newWithFlyValue
      ? reservHotelOptions.find((option) => option.label === hotel.label)
      : hotelOptions.find((option) => option.label === reservHotel.label);

    if (correspondingHotel) {
      newWithFlyValue
        ? setReservHotel(correspondingHotel)
        : setHotel(correspondingHotel);
    } else {
      // Si no se encuentra una correspondencia, puedes resetear a la opción predeterminada
      newWithFlyValue
        ? setReservHotel(reservHotelOptions[0])
        : setHotel(hotelOptions[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (reservHotel.value===""||!hotel.value==="" || !arrivalDate || !departureDate || adults <= 0) {
        setError(
          "Por favor, completa todos los campos obligatorios y asegúrate de que la cantidad de adultos sea al menos 1."
        );
        toast.error("please select a Hotel .");
        return;
      }

      if (withFly && !selectedOption) {
        setError(
          "Por favor, selecciona un aeropuerto. Este campo es obligatorio."
        );
        toast.error("Please select an airport or push X button.");

        return;
      }

      const dateFormat = withFly ? "dd-MMM-yy" : "yyyy-MM-dd";
      const formattedArrivalDate = format(arrivalDate, dateFormat);
      const formattedDepartureDate = format(departureDate, dateFormat);

      let url = withFly
        ? `${urlBase}/${reservHotel.location}/${reservHotel.value}/booking-engine/ibe5.main?hotel=${reservHotel.noHotel}&aDate=${formattedArrivalDate}&dDate=${formattedDepartureDate}&airport=OKC&airportTo=CUN&adults=${adults}&child=${children.length}&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=1&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${promoCode}&view_type=&groupId=`
        : `${urlBase}/${hotel.value}/${formattedArrivalDate}/${formattedDepartureDate}/${adults}`;

      // Agregar parámetros de niños si hay niños y sin vuelo
      if (!withFly && children.length > 0) {
        // Cuando no hay vuelo y al menos un niño, usa ";" para unir las edades de los niños
        const childrenAges = children.join(";");
        url += `;${childrenAges}`;
      } else if (withFly && children.length > 0) {
        // Cuando  hay vuelo y al menos un niño, usa "&childages=" para cada edad de niño
        /* const childrenParams = children.map((age) => `childages=${age}`).join("&"); */
        const childrenAges = children.join("&childages=");
        url += `&childages=${childrenAges}`;
      }

      if (promoCode && withFly) {
        // Añade el código promocional solo para reservaciones sin vuelo
        url += `&cp=${promoCode}`;
      } else if (promoCode && !withFly) {
        // Añade el código promocional solo para reservaciones sin vuelo
        url += `;?cp=${promoCode}`;
      }

      window.open(url, "_blank");
    } catch (error) {
      setError(error.message);
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
          children={children}
          setChildren={setChildren}
          numberChilds={numberChilds}
          setNumberChilds={setNumberChilds}
          maxNumberChilds={maxNumberChilds}
        />
        <section className="widget__field--pc">
          <label>PROMO CODE</label>
          <div className="widget__field-input">
            <Image
              src="/assets/Descuento.svg"
              width={18}
              height={18}
              alt="best-price-icon"
              className="wiget__field--best-price"
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
            BOOK NOW
          </button>
          <aside className="widget__field--best-price-legend">
            <Image
              src="/assets/best_price.svg"
              width={15}
              height={15}
              alt="best-price-icon"
              className="wiget__field--best-price"
            />
            <p className="widget__field--best-price">BEST PRICE GUARANTEE</p>
          </aside>
        </div>
      </section>
    </form>
  );
};

export default BookingForm;
