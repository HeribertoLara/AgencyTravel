import hotelOptions from "../hotelOptions";
import reservHotelOptions from "../reservHotelOptions";
import Image from "next/image";

export default function SelectHotelComponent({
  hotel,
  setHotel,
  reservHotel,
  setReservHotel,
  withFly,
}) {

  const handleSelectionChange = (e) => {
    const selectedValue = e.target.value; 
    const selectedOption = (withFly ? reservHotelOptions : hotelOptions).find(option => option.value === selectedValue);
    if (withFly) {
      setReservHotel(selectedOption);
    } else {
      setHotel(selectedOption);
    }
  };
 
  return (
    <article className="widget__field__select--hotel">
      <label> CONOCE NUESTROS HOTELES</label>
      <div className="widget__select--container">
        <figure>
          <Image
            src="assets/ubicacion.svg"
            width={20}
            height={20}
            alt="close-icon"
          />
        </figure>
        <select
          name="hotel"
          id="hotel"
          value={withFly ? reservHotel.value : hotel.value} // Usa el value del estado actual para controlar el valor seleccionado
          onChange={handleSelectionChange}
          className="widget__select"
        >
          {(withFly ? reservHotelOptions : hotelOptions).map((option) => (
            <option key={option.value} value={option.value} className="widget__select-option">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </article>
  );
}
