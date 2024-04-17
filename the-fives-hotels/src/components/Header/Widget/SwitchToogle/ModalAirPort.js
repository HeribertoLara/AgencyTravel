import { useEffect, useState } from "react";
import Select from "react-select";

const ModalAirPort = ({
  airportsData,
  setAirportsData,
  setAirportError,
  withFly,
  setWithFly,
  selectedOption, 
  setSelectedOption
}) => {
  const [inputValue, setInputValue] = useState("");
 

  async function getAirports(inputValue) {
    try {
      const response = await fetch(
        `https://www.reservhotel.com/win/owa/ibe5.get_airport_json?p_search=${inputValue}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const airportsDataRes = await response.json();
      setAirportsData(
        airportsDataRes.map((airport) => ({
          label: airport.label,
          value: airport.value,
        }))
      );
      setAirportError(false);
    } catch (error) {
      console.error(`Error in filtering Airport: ${error}`);
      setAirportsData([]);
      setAirportError(true);
    }
  }

  // Efecto para actualizar las opciones basadas en la entrada del usuario
  useEffect(() => {
    if (inputValue) {
      getAirports(inputValue);
    } else {
      setAirportsData([]);
    }
  }, [inputValue]);

  const handleInputChange = (newValue, actionMeta) => {
    if (actionMeta.action === "input-change") {
      setInputValue(newValue);
    }
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    
  };

  return (
    <div className="modalAirPort-body" id="modalAirPortDescription">
      <label>
        <span>CITY / WHERE FROM</span>
      </label>
        <Select
          value={selectedOption}
          onInputChange={handleInputChange}
          onChange={handleChange}
          options={airportsData}
          placeholder="WHERE DO YOU COME FROM?"
          isClearable
          isSearchable
          styles={{
            control: (base) => ({
              ...base,
              height: "2.2rem",
              minHeight: "1rem",
              borderColor: "black",
              borderRadius: "2px",
            }),
            valueContainer: (base) => ({
              ...base,
              height: "15px",
              padding: "0 6px",
              justifyContent: 'center'
            }),
            input: (base) => ({
              ...base,
              padding:"-5px",
              margin: '0px',
             
            }),
            placeholder: (base) => ({
                ...base,

                fontSize: '0.6rem',
               
              }),
            indicatorsContainer: (base) => ({
              ...base,
              height: "30px",
            }),
            clearIndicator: (base) => ({
              ...base,
              padding: "5px",
            }),
            dropdownIndicator: (base) => ({
              ...base,
              padding: "5px",
            }),
            option: (base) => ({
              ...base,
              fontSize: ".8rem", // Ajusta el tamaño de la fuente de las opciones
            }),

            valueContainer: (base) => ({
              ...base,
              height:"30px",
            }),
            
          }}
        />
        {withFly && (
          <button
            onClick={() => setWithFly(false)}
            className="switch-toggle__close-btn"
            aria-label="Close"
          >
            X
          </button>
        )}
    </div>
  );
};

export default ModalAirPort;
