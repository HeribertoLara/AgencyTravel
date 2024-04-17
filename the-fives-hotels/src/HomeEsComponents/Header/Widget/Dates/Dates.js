import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./date.scss";
import { format } from "date-fns";
import { es } from 'date-fns/locale';
import Image from 'next/image';

export default function Dates({
  departureDate,
  setDepartureDate,
  arrivalDate,
  setArrivalDate,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [datesSelected, setDatesSelected] = useState(false);
  const formatDate = (date) => {
    if (!date) return "";

    const day = format(date, "dd");
    const month = format(date, "MMM", { locale: es }); 
    const dayName = format(date, "EEE", { locale: es });
    return (
      <article className="widget__date">
        <div className="widget__date--day">{day}</div>
        <aside className="widget__date--aside">

        <div className="widget__date--month">{month}</div>
        <div className="widget__date--year">{dayName}</div>
        </aside>
      </article>
    );
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setArrivalDate(start);
    setDepartureDate(end);
    if (start && end) {
      setDatesSelected(true);
    }
  };

  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (datesSelected) {
      closeModal();
      setDatesSelected(false);
    }
  }, [datesSelected]);

  return (
    <article className="widget__field--calendary">
      <label className="widget__calendary--label">
        <span>FECHA  </span>

        <button type="button" className="widget__field--button" onClick={openModal}>
        {formatDate(arrivalDate)} 
        <Image 
          src="/assets/arrow_bread_crumb.svg"
          width={22}
          height={22}
          alt="icon fechas"
          className="widget__mayor-icon"
        />

        {formatDate(departureDate)}
        </button>
      </label>

      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <button 
            className="modal-content__button--close"
            type="button"
            onClick={closeModal}
            >
              <Image
                src={"assets/close-icon.svg"}
                width={15}
                height={15}
                alt="close icon"
              />
            </button>
            <DatePicker
              selectsRange={true}
              startDate={arrivalDate}
              endDate={departureDate}
              onChange={handleDateChange}
              minDate={new Date()}
              inline
            />
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </article>
  );
}
