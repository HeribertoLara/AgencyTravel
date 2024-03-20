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


const BookingForm = () => {
  const [hotel, setHotel] = useState({
    value: "fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf",
    label: "ALL HOTELS",
  });
  /* valor seteado con el segundo hotel */
  const[reservHotel, setReservHotel] = useState({
    value: "the-fives-downtown-hotel-and-residences",
    label: "THE FIVES DOWNTOWN",
    noHotel: "10815",
    location: "playa-del-carmen-mexico",
  },)
  /* States */
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(addDays(new Date(), 3));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState([]);
  const [numberChilds, setNumberChilds] = useState(0);
  const [maxNumberChilds, setMaxNumberChilds] = useState(8)
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const [ withFly, setWithFly] = useState(false)
  const [city, setCity] = useState(''); // Vinculación con el valor del input
  const [airportsData, setAirportsData] = useState([]);
  const [airportError, setAirportError] = useState(false);
  const [ urlBase, setUrlBase ] = useState(  "https://www.reservhotel.com/" )
  

  
  useEffect(()=>{
    const newMax = hotel.value === "fivesdowntown" ? 2 : 8;
    setMaxNumberChilds(newMax);
    withFly? setUrlBase(  "https://www.reservhotel.com" ):setUrlBase("https://booking.thefiveshotels.com/en/bookcore/availability")
   
  },[hotel, withFly])
  

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (!hotel || !arrivalDate || !departureDate || adults <= 0) {
        setError(
          "Por favor, completa todos los campos obligatorios y asegúrate de que la cantidad de adultos sea al menos 1."
        );
        return
      }

      const dateFormat = withFly ? "dd-MMM-yy" : "yyyy-MM-dd";
        
      const formattedArrivalDate = format(arrivalDate, dateFormat);
      const formattedDepartureDate = format(departureDate, dateFormat);

      let url = withFly
     
      ? `${urlBase}/${reservHotel.location}/${reservHotel.value}/booking-engine/ibe5.main?hotel=${reservHotel.noHotel}&aDate=${formattedArrivalDate}&dDate=${formattedDepartureDate}&airport=OKC&airportTo=CUN&adults=${adults}&child=${children.length}&child=2&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=1&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${promoCode}&view_type=&groupId=`
      : `${urlBase}/${hotel.value}/${formattedArrivalDate}/${formattedDepartureDate}/${adults}`;


      if (children.length > 0 && !withFly) {

        const childrenParams = children.join(";");
        url += `;${childrenParams}`;
      } else{
        const childrenAges = children.map(age => `childages=${age}`).join("&");
        url += `&${childrenAges}`;
      }

      if (promoCode && !withFly) {
        url += `?cp=${promoCode}`;
      }

      window.open(url, "_blank");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="widget">
      <div className="widget__field">
        <SelectHotel 
          hotel={hotel} 
          setHotel={setHotel}  
          withFly={withFly} 
          reservHotel={reservHotel} 
          setReservHotel={setReservHotel}
        />
      </div>
      {/* boton toogle */}
      <SwitchToogle 
        withFly={withFly} 
        setWithFly={setWithFly}
        city={city}
        setCity={setCity} // Vinculación con el valor del input
        airportsData={airportsData}
        setAirportsData={setAirportsData}
        airportError={airportError}
        setAirportError={setAirportError}

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
      <div className="widget__field">
        <input
          type="text"
          name="promoCode"
          id="promoCode"
          placeholder="PROMO CODE"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="widget__input"
        />
      </div>
      <div className="widget__field">
        <button type="submit" className="widget__button">
          Reservar ahora
        </button>
      </div>
      {error && <div className="widget__error">{error}</div>}
    </form>
  );
};

export default BookingForm;
