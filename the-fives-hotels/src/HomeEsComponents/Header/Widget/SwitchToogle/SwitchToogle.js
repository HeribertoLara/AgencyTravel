import Toggle from "react-toggle";
import "react-toggle/style.css";
import ModalAirPort from "./ModalAirPort";

export default function SwitchToogle({
  withFly,
  setWithFly,
  city,
  setCity,
  airportsData,
  setAirportsData,
  airportError,
  setAirportError,
  onWithFlyChange,
  onAirportSelectValidation,
  selectedOption,
  setSelectedOption
}) {

  const changeWithFly = ()=>{
    const newWithFlyValue = !withFly;
    onWithFlyChange(newWithFlyValue);
  }

  return (
    <article className="switch-toggle">
      {withFly ? (
        ""
      ) : (
        <label className="switch-toggle__label">
          <span>HOTEL + VUELO</span>
          <Toggle
            defaultChecked={withFly}
            icons={false}
            onChange={changeWithFly}
            className="switch-toggle__toggle" 
            style={{ transform: "scale(0.3)" }}
          />
        </label>
      )}
      <div className="switch-toggle__modal-container">
        {withFly && (
          <ModalAirPort
            city={city}
            setCity={setCity}
            airportsData={airportsData}
            setAirportsData={setAirportsData}
            airportError={airportError}
            setAirportError={setAirportError}
            withFly={withFly}
            setWithFly={setWithFly}
            onAirportSelectValidation={onAirportSelectValidation}
            selectedOption={selectedOption} 
            setSelectedOption={setSelectedOption}
          />
        )}
      </div>
      
    </article>
  );
}
