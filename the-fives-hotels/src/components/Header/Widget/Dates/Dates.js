import {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date.scss'
import { format } from 'date-fns';


export default function Dates({ departureDate, setDepartureDate, arrivalDate, setArrivalDate }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [datesSelected, setDatesSelected] = useState(false);
    const formatDate = (date) => {
        
        if (!date) return '';
       
        return format(date, 'dd MMM yyyy');
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

    useEffect(()=>{
        if (datesSelected) {
            closeModal();
            setDatesSelected(false);
        }
        
    },[datesSelected])
    
    return(
        <>
            <button 
              type="button" 
              className="date-button" 
              onClick={openModal}>
              {`${formatDate(arrivalDate)} - ${formatDate(departureDate)}`}
              </button>
            
            
                  
                  {modalIsOpen && (
                      <div className="modal">
                          <div className="modal-content">
                              <DatePicker
                                  selectsRange={true}
                                  startDate={arrivalDate}
                                  endDate={departureDate}
                                  onChange={handleDateChange}
                                  inline
                              />
                          </div>
                          <div className="modal-overlay" onClick={closeModal}></div>
                      </div>
                  )}
    </>
    );
}
