// components/ToggleSwitch.js

import Toggle from "react-toggle";
import 'react-toggle/style.css'
import ModalAirPort from "./ModalAirPort";

export default function SwitchToogle({
  withFly, 
  setWithFly, 
  city, 
  setCity, 
  airportsData, 
  setAirportsData, 
  airportError, 
  setAirportError
}) {
  
    
  return (
    
      <article>
        <span>HOTEL +FLIGHT</span>
        <label>
          <Toggle
            defaultChecked={withFly}
            icons={false}
            onChange={() => setWithFly(!withFly)}
          />
          
        </label>
        {withFly?
        <ModalAirPort
          city={city}
          setCity={setCity} 
          airportsData={airportsData}
          setAirportsData={setAirportsData}
          airportError={airportError}
          setAirportError={setAirportError}
          withFly={withFly}
          setWithFly={setWithFly}
        />:
        ""}
        
      </article>

  );
}
