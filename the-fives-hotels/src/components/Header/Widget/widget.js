import { useState } from 'react';
import "./widget.scss"
import SelectHotel from './SelectHotel/SelectHotel';
import Dates from './Dates/Dates';
import { addDays } from 'date-fns';
import { format } from 'date-fns';
import Guests from './Guests/Guests';


const BookingForm = () => {

  const [hotel, setHotel] = useState({
    value: 'fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf',
    label: 'ALL HOTELS',
  });
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(addDays(new Date(), 3));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [error, setError] = useState('');



const handleSubmit = (event) => {
  event.preventDefault()
  try {
    if (!hotel || !arrivalDate || !departureDate || adults <= 0) {
      throw new Error('Por favor, completa todos los campos obligatorios y asegúrate de que la cantidad de adultos sea al menos 1.');
    }
    let baseUrl = "https://booking.thefiveshotels.com/en/bookcore/availability";

   
    let formattedArrivalDate = format(arrivalDate, 'yyyy-MM-dd');
    let formattedDepartureDate = format(departureDate, 'yyyy-MM-dd');

    let url = `${baseUrl}/${hotel}/${formattedArrivalDate}/${formattedDepartureDate}/${adults};${children};5`;

    if (promoCode) {
      url += `&PC=${promoCode}`;
    }
  
    window.open(url, '_blank');
    console.log(url);
  
  } catch (error) {
    setError(error.message);
  }
  }; 

  return (
    <form onSubmit={handleSubmit} className="widget">
      <div className="widget__field">
        <SelectHotel hotel={hotel}  setHotel={setHotel}/>
      </div>
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
      />
      <div className="widget__field">
        <input type="text" 
            name="promoCode" id="promoCode" placeholder="Código promocional" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} className="widget__input"/>
      </div>
      <div className="widget__field">
        <button type="submit" className="widget__button">Reservar ahora</button>
      </div>
      {error && <div className="widget__error">{error}</div>}
    </form>
  );
};

export default BookingForm;
