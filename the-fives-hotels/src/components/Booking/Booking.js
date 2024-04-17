import React, { useEffect, useRef, useState } from 'react'
import { useAppContext } from 'store/App';
import { useRouter } from 'next/router';
import BookingForm from './BookingForm';

const Booking = ({ data, hotels }) => {

  const router = useRouter();
  const { locale, asPath } = router;
  const { currentLanguage, setCurrentLanguage } = useAppContext();

  const bookingSection = useRef(null)

  const [mounted, setMounted] = useState(false);

  const handleBack = () => {
    const { current } = bookingSection;
    if (current && current.classList.contains('show-booking')) {
      document.querySelector('body').style.overflow = 'auto'
      current.classList.remove('show-booking')
      let hubspotChat = document.querySelector("#hubspot-messages-iframe-container")
      hubspotChat?.classList.remove('showIn')
    }
  }

  

  useEffect(() => {
    if (currentLanguage === locale) {
      setMounted(true);
    }

    

    return () => {
      setMounted(false)
    }
  }, [mounted, currentLanguage, locale])

  return (
    mounted &&
    <section className={`booking-form-mobile-version`} ref={bookingSection} >
      <div className='booking-container custom-scrollbar'>
        <div className='booking-actions'>
          <div className='action'>
            <button id="back" type='button' className='btn-back' onClick={handleBack}>
              Back
            </button>
          </div>
          {/* <div className='action'>
            <button id="btn-chat" type='button' className='btn-chat' onClick={handleCallChat} aria-label='Chat'>
            </button>
          </div> */}
        </div>
        <BookingForm bookingData={data} hotels={hotels}/>
      </div>
      
    </section>
  )
}


export default Booking;