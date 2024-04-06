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
  const handleSubmitReserveSelect = (e) => {
    // Encuentra el objeto del hotel seleccionado en reservHotelOptions
    const selectedHotelOption = reservHotelOptions.find(
      (option) => option.value === e.target.value
    );

    if (selectedHotelOption) {
      setReservHotel(selectedHotelOption);
    } else {
      // Si no se encuentra el hotel seleccionado, establece reservHotel a un valor que indique "no seleccionado"
      // Puedes ajustar este objeto a lo que mejor se ajuste a tu aplicación
      setReservHotel({ value: "", label: "No seleccionado" });
    }
  };

  return (
    <article className="widget__field__select--hotel">
      <label> DISCOVER OUR HOTELS</label>

      {withFly ? (
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
            value={reservHotel.value}
            onChange={handleSubmitReserveSelect}
            className="widget__select"
          >
            {reservHotelOptions.map((option) => (
              <option key={option.noHotel} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : (
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
            value={hotel.value}
            onChange={(e) =>
              setHotel(
                hotelOptions.find((option) => option.value === e.target.value)
              )
            }
            className="widget__select"
          >
            {hotelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </article>
  );
}