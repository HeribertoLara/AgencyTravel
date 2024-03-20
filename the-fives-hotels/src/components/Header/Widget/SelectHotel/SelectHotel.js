import hotelOptions from "../hotelOptions";
import reservHotelOptions from "../reservHotelOptions";
// Importa SelectHotel solo si lo vas a usar y asegúrate de que no cause conflictos de nombres
// import SelectHotel from './SelectHotel';
export default function SelectHotelComponent({ hotel, setHotel, reservHotel, setReservHotel, withFly }) {

  const handleSubmitReserveSelect = (e) => {
    // Encuentra el objeto del hotel seleccionado en reservHotelOptions
    const selectedHotelOption = reservHotelOptions.find(option => option.value === e.target.value);
  
    if (selectedHotelOption) {
      // Actualiza el estado de reservHotel con el objeto del hotel seleccionado
      setReservHotel(selectedHotelOption);
    } else {
      // Si no se encuentra el hotel seleccionado, establece reservHotel a un valor que indique "no seleccionado"
      // Puedes ajustar este objeto a lo que mejor se ajuste a tu aplicación
      setReservHotel({ value: '', label: 'No seleccionado' });
    }
  };

  return (
    <>
      {withFly ? (
        <select
          name="hotel"
          id="hotel"
          value={reservHotel.value} // Asegúrate de que reservHotel es un objeto con la propiedad 'value'
          onChange={handleSubmitReserveSelect}
          className="widget__select"
        >
          {reservHotelOptions.map((option) => (
            <option key={option.noHotel} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <select
          name="hotel"
          id="hotel"
          value={hotel.value} // Asegúrate de que hotel es un objeto con la propiedad 'value'
          onChange={(e) => setHotel(hotelOptions.find(option => option.value === e.target.value))}
          className="widget__select"
        >
          {hotelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
}
