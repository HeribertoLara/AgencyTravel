import React, { useState, useEffect, useRef } from 'react'
import { es, enUS } from 'date-fns/locale';
import Switch from './Switch';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import { getAirports, getAirpots } from 'actions/Airports/getAirports';
import { useDebounceValue } from 'hooks/useDebounceValue';
import { useRouter } from 'next/router';
import Select from 'react-select';
import { isMobile } from 'react-device-detect';
import AirportModal from 'components/Modals/AirportModal';

const BookingForm = ({ bookingData, hotels }) => {

  registerLocale("es", es);
  registerLocale("en", enUS);

  const router = useRouter();

  const { locale, asPath } = router;

  const currDate = new Date();
  currDate.setDate(currDate.getDate() + 1);

  const finalDate = new Date();
  finalDate.setMonth((finalDate.getMonth() + 1) + 18);

  // Calcular la diferencia en meses
  const diffYears = finalDate.getFullYear() - currDate.getFullYear();
  const diffMonths = finalDate.getMonth() - currDate.getMonth();
  const totalMonths = diffYears * 12 + diffMonths + 1;



  const [endDate, setEndDate] = useState(currDate);
  const [startDate, setStartDate] = useState(new Date());

  const occupancySection = useRef()
  const ageChildInputSection = useRef()
  const calendarInput = useRef()
  const cityInput = useRef()
  const childAlert = useRef()
  const hotelAlert = useRef()
  const cityAlert = useRef()
  const BookingFormSection = useRef()

  const [isInputDisabled, setInputDisabled] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [resetDate, setResetDate] = useState(false);

  const [selectedDestino, setSelectedDestino] = useState('');
  const [checked, setChecked] = useState(false);
  const [numAdults, setNumAdults] = useState(2);
  const [numChilds, setNumChilds] = useState(0);


  const [allowedPeople, setAllowedPeople] = useState(10);
  const [maxAdults, setMaxAdults] = useState(10);
  const [maxChilds, setMaxChilds] = useState(10);


  const [childAges, setChildAges] = useState([]);
  const [airports, setAirports] = useState([]);
  const [selectedCity, setSelectedCity] = useState(undefined);
  const [airportCity, setAirportCity] = useState(undefined);
  const [occupancyData, setOccupancyData] = useState({
    savedAges: [],
    savedNumAduts: 2,
    savedNumChilds: 0,
  });


  const [form, setForm] = useState({
    destino: "",
    occupancy: "",
    codpromo: "",
    city: "",
  });

  const currLang = locale === 'en' ? 'en-US' : 'es-ES';

  const hotelsInfo = hotels;

  const handleChange = (e) => {

    if (e.target.name === 'city' && e.target.value === '' || e === '') {
      cityAlert.current?.classList.add('error')
    } else if (checked) {
      cityAlert.current?.classList.remove('error')
    }

    if (e.target.name === 'destino' && e.target.value === '' || e === '') {
      hotelAlert.current.classList.add('error')
    } else {
      setNumAdults(2);
      setNumChilds(0)
      setChildAges([])
      setOccupancyData({ savedAges: 0, savedNumAduts: 2, savedNumChilds: 0 })
      hotelAlert.current.classList.remove('error')
    }

    if (e.target.name === 'destino' && hotelsInfo[e.target.value]) {
      let allowedPple = hotelsInfo[e.target.value].maximum
      let maxAdultsVal = hotelsInfo[e.target.value].max_adults
      let maxChildsVal = hotelsInfo[e.target.value].max_childs

      setSelectedDestino(e.target.value)
      setAllowedPeople(allowedPple)
      setMaxAdults(maxAdultsVal);
      setMaxChilds(maxChildsVal);
    }

    if (e.target.name === 'destino' && e.target.value.includes('tbbtf')) {
      setSelectedDestino(e.target.value)
    }

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };


  const handleOccupancySection = (e) => {
    e.preventDefault();
    e.target.blur()
    const { current } = occupancySection;
    if (!isMobile) {
      document.querySelector('#__next').append(current)
      document.querySelector('body').style.overflow = 'hidden'
      setInputDisabled(true)
      // document.querySelector('.show-booking').style.overflow = 'hidden'
      current.classList.add('show-occupancy')
    }
    if (current && !current.classList.contains('show-occupancy')) {
      setInputDisabled(true)
      // document.querySelector('.show-booking').style.overflow = 'hidden'
      current.classList.add('show-occupancy')
    }
  }

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (dates[1]) {
      setIsOpenCalendar(!isOpenCalendar)
    }


  };



  const handleNumOfAdults = (value) => {
    const totalAdults = numAdults + value;
    const totalPeople = totalAdults + numChilds;

    if (
      totalPeople <= allowedPeople &&
      totalAdults >= 1 &&
      totalAdults <= maxAdults &&
      totalPeople <= allowedPeople
    ) {
      setNumAdults(totalAdults);
    }
  };

  const handleNumOfChilds = (value) => {
    const totalChilds = numChilds + value;
    const totalPeople = numAdults + totalChilds;

    if (
      totalPeople <= allowedPeople &&
      totalChilds >= 0 &&
      totalChilds <= maxChilds &&
      totalPeople <= allowedPeople
    ) {
      setNumChilds(totalChilds);
    }
  };

  const handleChildAgesChange = (e) => {
    setChildAges([...childAges, e.target.value])
    if (e.target.value !== "") {
      childAlert.current.classList.add('d-none')
    } else {
      childAlert.current.classList.remove('d-none')

    }

  }

  const renderChildsInputs = () => {
    const inputs = [];

    for (let i = 0; i < numChilds; i++) {
      inputs.push(
        <div className="form-group" key={`child-input-${i + 1}`}>
          <label htmlFor={`children-age-${i + 1}`} className={`form-label children-label`}>
            {bookingData?.field_text} {i + 1}
          </label>
          <select
            id={`children-age-${i + 1}`}
            className="form-select"
            aria-label={`Children ages, Child ${i + 1}`}
            name='childAges'
            onChange={handleChildAgesChange}
            defaultValue=""
          >
            <option value="" >{bookingData?.field_text2}</option>
            {Array.from({ length: 17 }, (_, j) => (
              <option value={j.toString()} key={`child-option-${i + 1}-${j}`}>
                {j}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return <>{inputs}</>;
  };

  const handleCalendar = (e) => {
    let { current } = calendarInput;
    if (current) {
      current.setOpen(true)
      setIsOpenCalendar(true)
    }

  }

  const handleSaveAge = (e) => {
    e.preventDefault();
    let updatedChildAges = []
    let errorChilds = 0
    let childrenAgeInput = document.querySelectorAll('.children-age-section .form-group select')
    if (childrenAgeInput) {
      let { current } = childAlert;
      childrenAgeInput.forEach(function (elem) {
        if (elem.value.toString() === '') {
          current.classList.remove('d-none')
          errorChilds++
        } else {
          updatedChildAges.push(elem.value)

          errorChilds = errorChilds === 0 ? 0 : errorChilds;
        }
      });

      if (errorChilds === 0) {
        current.classList.add('d-none')
        occupancySection.current.classList.remove('show-occupancy')
        setInputDisabled(false)
        setOccupancyData({
          savedAges: updatedChildAges,
          savedNumAduts: numAdults,
          savedNumChilds: numChilds,
        })
        document.querySelector('body').style.overflow = 'auto'
        !isMobile && document.querySelector('.form-container').append(occupancySection.current)

      }
    }
  }



  const daysOfWeek = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
  }


  const handleSelectChange = (selectedOption) => {
    setSelectedCity(selectedOption?.value)
    setAirportCity(selectedOption?.label)
    setForm({ ...form, city: selectedOption?.label })
  };




  const handleCancelOccupancy = (e) => {
    e.preventDefault();
    const { current } = occupancySection;
    if (current && current.classList.contains('show-occupancy')) {
      let { savedNumChilds, savedNumAduts, savedAges } = occupancyData;
      setInputDisabled(false);
      setNumAdults(savedNumAduts);
      setNumChilds(savedNumChilds);
      setChildAges(savedAges);
      document.querySelector('.booking-form-mobile-version').style.overflow = 'auto'
      document.querySelector('body').style.overflow = 'auto'
      current.classList.remove('show-occupancy')
      !isMobile && document.querySelector('.form-container').append(occupancySection.current)
    }
  }


  const handleCityInput = (s) => {

    if (s !== '') {
      cityAlert.current.classList.remove('error')
    }

    setForm({ ...form, city: s })

  }

  const handleChecked = (e) => {
    setChecked(!checked)
    setOpenModal(true)
    !checked && setForm({ ...form, city: '' })
    !checked && setSelectedCity(undefined)
    !checked && (document.body.style.overflow = 'hidden')

    if (selectedDestino === 'empty') {
      // Select first option
      let selectDest = document.querySelectorAll("select[name=destino] option")
      selectDest[0].setAttribute('selected', true);

      // Reset formulario select destino
      setForm(prevForm => ({
        ...prevForm,
        destino: ''
      }));
    }

    if (selectedDestino.includes('tbbtf') && !checked) {
      // Select first option
      let selectDest = document.querySelector("select[name=destino] option[value=empty]")
      // Remove attribute disabled and hidden
      selectDest.removeAttribute('disabled')
      selectDest.removeAttribute('hidden')
      selectDest.setAttribute('selected', true);

      // Reset formulario select destino
      setForm(prevForm => ({
        ...prevForm,
        destino: ''
      }));

      setTimeout(() => {
        selectDest.setAttribute('disabled', true)
        selectDest.setAttribute('hidden', true)
      }, 300);


    }

    // if(!checked) {
    // let { current } = cityInput
    // ReactDO.createPortal(current, document.getElementById('portal'))
    // document.querySelector('#portal').append(current)
    // window.scrollTo(0, 140)

    // } 

  }

  const handleAirport = () => {
    setOpenModal(!openModal)

    if (selectedCity === null) {
      setChecked(!checked)
      setResetDate(!resetDate)
    }

    checked && (document.body.style.overflow = 'auto')

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    !isMobile && window.scrollTo(0, 140)

    const { destino, codpromo, city } = form;

    let errors = 0

    if (checked) {
      if (!selectedCity) {
        cityAlert.current.classList.add('error')
        errors++
        return
      }
    }

    if (destino === '') {
      hotelAlert.current.classList.add('error')
      errors++
      return
    }

    const langList = {
      'en': {
        'id': '1',
        'lang': 'en-US',

        'months': ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
          "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ],
      },
      'es': {
        'id': '2',
        'lang': 'es-ES',
        'months': ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
          "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"
        ],
      },
    }

    let formatedStartDate = new Date(startDate);
    let formatedEndDate = new Date(endDate)
    const initialRoiDate = `${formatedStartDate.getFullYear()}-${(formatedStartDate.getMonth() + 1 < 10) ? '0' : ''}${formatedStartDate.getMonth() + 1}-${(formatedStartDate.getDate() < 10) ? '0' : ''}${formatedStartDate.getDate()}`;

    const endRoiDate = `${formatedEndDate.getFullYear()}-${(formatedEndDate.getMonth() + 1 < 10) ? '0' : ''}${formatedEndDate.getMonth() + 1}-${(formatedEndDate.getDate() < 10) ? '0' : ''}${formatedEndDate.getDate()}`;

    const initialReservDate = `${(formatedStartDate.getDate() < 10) ? '0' : ''}${formatedStartDate.getDate()}-${langList[locale].months[formatedStartDate.getMonth()]}-${formatedStartDate.getFullYear().toString().substr(-2)}`;

    const endReservDate = `${(formatedEndDate.getDate() < 10) ? '0' : ''}${formatedEndDate.getDate()}-${langList[locale].months[formatedEndDate.getMonth()]}-${formatedEndDate.getFullYear().toString().substr(-2)}`;



    let urlRoiBack = `https://booking.thefiveshotels.com/${locale}/bookcore/availability/${decodeURI(destino)}/${decodeURI(initialRoiDate)}/${decodeURI(endRoiDate)}/${decodeURI(numAdults)};`

    let urlReservHotel = `https://www.reservhotel.com/${decodeURI(hotelsInfo[destino]?.url_hotel)}/booking-engine/ibe5.main?hotel=${decodeURI(hotelsInfo[destino]?.cod)}&aDate=${decodeURI(initialReservDate)}&dDate=${decodeURI(endReservDate)}&airport=${decodeURI(selectedCity)}&airportTo=CUN&hide_agent_info=&room=&rate=&callc_num=&stops=&adults=${decodeURI(numAdults)}&child=${decodeURI(numChilds)}&rooms=1&source=&show_ta_comm=&agent_fee=&abtest=&aff=&currency=&agent=&usr=&lang=${langList[locale].id}&showHotel=&rategroup=&rate=&sub_source=&PCC=&AirportDep=&PC=${codpromo !== '' ? decodeURI(codpromo) : decodeURI('')}&view_type=&groupId=`


    if (childAges.length > 0) {

      urlRoiBack += `${decodeURI(childAges?.join(';'))}`
      urlReservHotel += childAges.map(age => `&childages=${age}`).join('');

    } else {

      urlRoiBack += `${decodeURI('0')};/`
      urlReservHotel += ``

    }


    if (codpromo.trim() !== "") {
      urlRoiBack += `?cp=${decodeURI(codpromo.trim())}`;
    }



    const url = checked ? urlReservHotel : urlRoiBack;

    if (errors === 0) {
      window.open(url)
      // setNumAdults(2)
      // setNumChilds(0)
      // setStartDate(new Date())
      // setEndDate(currDate)
      // setForm({city:'', destino:'', codpromo:''})
      // setOccupancyData({})
      // setSelectedCity({ value: '', label: '' })
      // setChildAges([])
      // BookingFormSection.current.reset()
    }
  };


  const handleSelectCityClick = () => {

    if (!selectedCity) {
      cityAlert.current.classList.add('error')
      return
    }

    setOpenModal(!openModal)
    checked && (document.body.style.overflow = 'auto')
  }

  const debouncedValue = useDebounceValue(form.city);

  const revaluateHotelOptions = () => {
    let hotelPaths = {
      'beach': true,
      'downtown': true,
      'oceanfront': true,
      'residences': true,
      'beachfront': true,
    }

    let mainHotel = asPath.replace('/', '')


    if (hotelPaths[mainHotel]) {

      if (mainHotel === 'oceanfront') {
        mainHotel = 'morelos'
      }

      if (mainHotel === 'residences') {
        mainHotel = 'residence'
      }

      let selectDest = document.querySelectorAll("select[name=destino] option")

      selectDest.forEach(function (elem) {
        let dataValue = elem.getAttribute('data-value')
        if (dataValue === `fives${mainHotel}` && form.destino !== `fives${mainHotel}`) {
          elem.setAttribute('selected', true);
          setForm(prevForm => ({
            ...prevForm,
            destino: `fives${mainHotel}`
          }));
        }
      })
    }


  }

  useEffect(() => {
    const filterDataByNameAndvalue = async () => {
      if (debouncedValue.length === 0) {
        setAirports([]);
        return;
      }

      if (debouncedValue.trim() !== '' && debouncedValue.trim().length >= 1) {
        try {
          const { airportsData, airportError } = await getAirports(debouncedValue);
          if (!airportError && airportsData) {
            setAirports(airportsData);
          } else {
            setAirports([]);
          }
        } catch (error) {
          console.log(`Error in filtering Airport: ${error}`);
          setAirports([]);
        }
      }


    }

    filterDataByNameAndvalue()

    if (asPath === '/downtown') {
      setAllowedPeople(8);
      setMaxAdults(6);
      setMaxChilds(2);
    } else {
      setAllowedPeople(10);
      setMaxAdults(10);
      setMaxChilds(10);
    }


    let calendarBackBtn = document.createElement('button');
    calendarBackBtn.className = 'btn btn-close';
    calendarBackBtn.ariaLabel = 'Close calendar'
    calendarBackBtn.innerText = ''
    calendarBackBtn.addEventListener('click', () => {
      calendarInput.current.setOpen(false)
      setIsOpenCalendar(!isOpenCalendar)
    })

    if (isOpenCalendar) {
      let datepicker = document.querySelector('.react-datepicker .react-datepicker__header');
      datepicker?.classList.add('first__date-picker');
      datepicker?.appendChild(calendarBackBtn);
    }
  }, [debouncedValue, asPath, isOpenCalendar])





  useEffect(() => {

    revaluateHotelOptions()

    return () => {
      null
    }
  }, [])


  useEffect(() => {
    const endAddingDate = currDate.setDate(currDate.getDate() + 3)

    if (startDate > endAddingDate) {
      setResetDate(true);
    } else {
      setResetDate(false)
    }

  }, [startDate, endDate, checked])

  useEffect(() => {
    const newEndDate = new Date();

    if (checked && !resetDate) {
      setStartDate(newEndDate.setDate(newEndDate.getDate() + 3))
      setEndDate(currDate.setDate(currDate.getDate() + 3))
    }


    if (!checked && resetDate) {
      setStartDate(startDate)
      setEndDate(endDate)
      setAirportCity(undefined)
    }


  }, [checked, resetDate])

  return (

    bookingData !== null ? (
      <form className='booking' onSubmit={handleSubmit} id='booking-form-widget' ref={BookingFormSection}>

        <div className="form-container">



          <div className="form-group form-destiny">
            <label htmlFor="id_destino" className="form-label">{bookingData?.label_hotel}</label>
            <select onChange={handleChange}
              name="destino"
              id="id_destino"
              defaultValue={"empty"}
              aria-label="Default select example"
              className="form-select"
              required="">
              <option value={"empty"} disabled hidden>
                {bookingData?.placeholder_select_hotel}
              </option>
              {
                !checked &&
                <option data-value="fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf" value="fivesbeach,fivesdowntown,fivesmorelos,fivesresidence,tbbtf">
                  {bookingData?.field_option}
                </option>
              }
              <option data-value="fivesbeach" value="fivesbeach">
                The Fives Beach Hotel
              </option>
              <option data-value="fivesdowntown" value="fivesdowntown">
                The Fives Downtown
              </option>
              <option data-value="fivesmorelos" value="fivesmorelos">
                The Fives Oceanfront
              </option>
              <option data-value="fivesresidence" value="fivesresidence">
                The Fives Residences
              </option>
              {
                !checked &&
                <option data-value="tbbtf" value="tbbtf">
                  The Beachfront By The Fives
                </option>
              }
            </select>

            <div role='alert' ref={hotelAlert} className="alert alert-error">{bookingData?.field_text_help}</div>
          </div>

          <div className='form-group form-calendar'>
            {!isMobile && <label htmlFor="calendar" className="form-label">{bookingData?.label_dates}</label>}
            <button className="btn-startDate" type='button' id='calendat-btn' aria-label='Calendar button' onClick={handleCalendar}>
              <div className='date-container'>
                {new Date(startDate).getDate()}
                <span className='date'>
                  <label className='date-month'>{new Date(startDate)?.toLocaleDateString(currLang, { month: "short" })}</label>
                  <label className='date-day'>{new Date(startDate)?.toLocaleDateString(currLang, { weekday: 'short' })}</label>
                </span>
              </div>
              <div className='date-container'>
                {new Date(endDate).getDate()}
                <span className='date'>
                  <label className='date-month'>{new Date(endDate)?.toLocaleDateString(currLang, { month: "short" })}</label>
                  <label className='date-day'>{new Date(endDate)?.toLocaleDateString(currLang, { weekday: 'short' })}</label>

                </span>
              </div>
            </button>

            <DatePicker
              selected={startDate}
              onChange={onChangeDate}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              withPortal
              portalId='portal'
              monthsShown={totalMonths}
              className='d-none'
              ref={calendarInput}
              minDate={new Date()}
              maxDate={finalDate}
              onClickOutside={() => setIsOpenCalendar(false)}
              locale={locale}
            />
          </div>

          <div className="form-group form-occupancy">
            <label htmlFor="occupancy" className="form-label">{bookingData?.label_ocupation}</label>
            <input
              className="form-control "
              name="occupancy"
              id="occupancy"
              placeholder={`${numAdults} ${bookingData?.text_placeholder_adults}, ${numChilds} ${bookingData?.field_text}`}
              onFocus={handleOccupancySection}
              disabled={isInputDisabled}
              autoComplete='off'
            />

          </div>

          <div className="form-group form-promo">
            <label htmlFor="codpromo" className="form-label">{bookingData?.label_promoted_code}</label>
            <input
              type="text"
              className="form-control"
              id="codpromo"
              placeholder=""
              name="codpromo"
              onChange={handleChange} />
          </div>
          <div className='form-group form-check'>
            <label htmlFor="hotelFlight" className="form-label">{bookingData?.label_hotel_flight}</label>
            <div className='form-group__hotelflight'>
              <Switch
                isOn={checked}
                handleToggle={handleChecked}
                colorOn="#72B96D"
                colorOff="#575656"
                name={'hotelFlight'}
              />
              {
                airportCity && <a className="airportcity-label" onClick={() => setOpenModal(!openModal)}>{airportCity}</a>
              }

            </div>
          </div>

          {isMobile ? (
            checked &&
            <div ref={cityInput} className={`form-group form-city`}>
              <label htmlFor="city" className="form-label">{bookingData?.label_modal_hotel_flight}</label>

              <Select
                name='city'
                onInputChange={handleCityInput}
                onChange={handleSelectChange}
                options={airports}
                defaultInputValue={airportCity}
                className="react-select-container"
                classNamePrefix="airport-select"
                placeholder={bookingData?.placeholder_modal_hotel_flight}
                noOptionsMessage={() => null}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "rgba(0,0,0)" : "white",
                  }),
                  control: base => ({
                    ...base,
                    border: 0,
                    boxShadow: 'none'
                  }),
                  input: (provided, state) => ({
                    ...provided,
                    marginLeft: 0,
                    position: "relative",
                    left: -8
                  }),
                  menuPortal: base => ({ ...base, zIndex: 9999 })
                }}
                menuPortalTarget={document.body}

              />

              <div role='alert' ref={cityAlert} className="alert alert-error">{bookingData?.help_text}</div>

            </div>
          ) : (
            checked &&
            <AirportModal
              onClose={handleAirport}
              isOpen={openModal}
            >
              <div ref={cityInput} className={`form-group form-city`}>
                <label htmlFor="city" className="form-label">{bookingData?.label_modal_hotel_flight}</label>

                <Select
                  name='city'
                  onInputChange={handleCityInput}
                  onChange={handleSelectChange}
                  options={airports}
                  defaultInputValue={airportCity}
                  className="react-select-container"
                  classNamePrefix="airport-select"
                  placeholder={bookingData?.placeholder_modal_hotel_flight}
                  noOptionsMessage={() => null}
                  components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                  styles={{
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isSelected ? "rgba(0,0,0)" : "white",
                    }),
                    control: base => ({
                      ...base,
                      border: 0,
                      boxShadow: 'none'
                    }),
                    input: (provided, state) => ({
                      ...provided,
                      marginLeft: 0,
                      position: "relative",
                      left: -8
                    }),
                    menuPortal: base => ({ ...base, zIndex: 9999 })
                  }}
                  menuPortalTarget={document.body}

                />

                <div role='alert' ref={cityAlert} className="alert alert-error">{bookingData?.help_text}</div>

              </div>
              <button
                id='btn-select-city'
                className='btn btn-black-primary'
                type='button'
                data-seo='btn-select-city'
                onClick={handleSelectCityClick}
              >{bookingData?.button_modal_hotel_flight}</button>
            </AirportModal>
          )

          }

          <div ref={occupancySection} className='occupancy-section '>

            <div className='occupancy-container custom-scrollbar'>
              {!isMobile && <h3 className='content-title'>{bookingData?.tilte_modal_occupancy}</h3>}
              <div className='count'>
                <label>{bookingData?.text_adults}</label>
                <div className='counter'>
                  <button
                    type='button'
                    id='less-btn'
                    onClick={() => handleNumOfAdults(-1)}
                    className='btn-count'
                  >
                    -
                  </button>
                  <span className='count-num'>{numAdults}</span>
                  <button
                    type='button'
                    id='plus-btn'
                    className='btn-count'
                    onClick={() => handleNumOfAdults(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='count'>
                <label>{bookingData?.text_children}</label>
                <div className='counter'>
                  <button
                    type='button'
                    id='less-btn-child'
                    className='btn-count'
                    onClick={() => handleNumOfChilds(-1)}
                  >
                    -
                  </button>
                  <span className='count-num'>{numChilds}</span>
                  <button
                    type='button'
                    id='plus-btn-child'
                    className='btn-count'
                    onClick={() => handleNumOfChilds(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              {
                numChilds > 0 &&

                <>
                  <div className='occupancey-content'>
                    <span className='font-bold'>{bookingData?.field_title}</span>
                    <p className='py-2'>{bookingData?.field_descripcion}
                    </p>
                    <div className='children-age-section' ref={ageChildInputSection}>
                      {renderChildsInputs()}
                    </div>
                  </div>

                </>
              }
              <div
                className="alert alert-secondary d-none"
                role="alert"
                ref={childAlert}
              >{bookingData?.text_help}</div>

              <div className='occupancy-actions'>
                <button
                  type='button'
                  id='cancel-occupancy'
                  className='btn btn-dark'
                  onClick={handleCancelOccupancy}
                >{bookingData?.text_button}</button>
                <button
                  type='button'
                  id='save-occupancy'
                  className='btn btn-dark'
                  onClick={handleSaveAge}
                >{bookingData?.text_button2}</button>
              </div>
            </div>
          </div>

          <div className='form-group form-actions'>
            <p className='form-badge'>{bookingData?.label_general}</p>
            <button className="btn btn-primary form-submit">{bookingData?.label_reserve}</button>
          </div>

        </div>

      </form>
    ) : (
      <></>
    )


  )
}

export default BookingForm