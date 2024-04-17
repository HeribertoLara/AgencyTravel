import React, { createContext, useState, useEffect, useContext } from 'react';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import hotelOptions from './hotelOptions';
import reservHotelOptions from './reservHotelOptions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WidgetContext = createContext();

const WidgetProvider = ({ children }) => {
    const [hotel, setHotel] = useState(hotelOptions[0]);
    const [reservHotel, setReservHotel] = useState(reservHotelOptions[0]);
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(addDays(new Date(), 3));
    const [adults, setAdults] = useState(2);
    const [childs, setChilds] = useState([]);
    const [numberChilds, setNumberChilds] = useState(0);
    const [maxNumberChilds, setMaxNumberChilds] = useState(8);
    const [promoCode, setPromoCode] = useState("");
    const [error, setError] = useState("");
    const [withFly, setWithFly] = useState(false);
    const [city, setCity] = useState("");
    const [airportsData, setAirportsData] = useState([]);
  /*   const [airportError, setAirportError] = useState(false); */
    const [urlBase, setUrlBase] = useState("https://www.reservhotel.com/");
    const [selectedOption, setSelectedOption] = useState(null);
    // Añade el resto de tus estados aquí
  
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
        childs,
        promoCode,
        urlBase
      }) => {
        // Inicializa la URL base dependiendo de si la reserva incluye vuelo
        let url = withFly
          ? `${urlBase}/${reservHotel.location}/${reservHotel.value}/booking-engine/ibe5.main?hotel=${reservHotel.noHotel}&aDate=${arrivalDate}&dDate=${departureDate}&adults=${adults}&child=${childs.length}&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=1&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${promoCode}&view_type=&groupId=`
          : `${urlBase}/${hotel.value}/${arrivalDate}/${departureDate}/${adults}`;
      
        // Agrega parámetros para las edades de los niños, si aplica
        if (childs.length > 0) {
          const childrenAges = childs.join(withFly ? "&childages=" : ";");
          url += withFly ? `&childages=${childrenAges}` : `;${childrenAges}`;
        }
      
        // Añade el código promocional a la URL, si está presente
        if (promoCode) {
          url += withFly ? `&cp=${promoCode}` : `;cp=${promoCode}`;
        }
      
        return url;
      };
      
      const validateHotelSelection = () => {
        return withFly
          ? reservHotel.value ? true : (toast.error("Please select a Hotel for booking with flight."), false)
          : hotel.value ? true : (toast.error("Please select a Hotel for booking without flight."), false);
      };
    
    
      const validateDates = () => {
        if (!arrivalDate || !departureDate) {
          toast.error("Please select both arrival and departure dates.");
          return false;
        }
        if (arrivalDate >= departureDate) {
          toast.error("Departure date must be later than arrival date.");
          return false;
        }
        return true;
      };
    
      const validateAdults = () => {
        if (adults <= 0) {
          toast.error("Please include at least one adult in the booking.");
          return false;
        }
        return true;
      };
    
      const validateChildrenAges = () => {
        if (childs.some((child) => child < 0 || child > 17)) {
          toast.error("Please ensure all children's ages are between 0 and 17.");
          return false;
        }
        return true;
      };
    
      // Función para formatear y validar las fechas
      const formatAndValidateDates = () => {
        if (!arrivalDate || !departureDate) {
          toast.error("Please select both arrival and departure dates.");
          return null; // Retorna null si las fechas no están seleccionadas
        }
        if (arrivalDate >= departureDate) {
          toast.error("Departure date must be later than arrival date.");
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
            childs: childs,
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
        console.log(withFly)
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
  
    // Provee el contexto
    return (
      <WidgetContext.Provider value={
        { 
            hotel, 
            setHotel, 
            reservHotel, 
            setReservHotel, 
            arrivalDate,
            setArrivalDate,
            departureDate,
            setDepartureDate,
            adults,
            setAdults,
            childs,
            setChilds,
            numberChilds,
            setNumberChilds,
            maxNumberChilds,
            setMaxNumberChilds,
            promoCode,
            setPromoCode,
            error,
            setError,
            withFly,
            setWithFly,
            city,
            setCity,
            airportsData,
            setAirportsData,
            urlBase,
            setUrlBase,
            selectedOption,
            setSelectedOption,
            handleWithFlyChange,
        }}>
        {children}
      </WidgetContext.Provider>
    );
  };

  export default WidgetProvider