import Select from 'react-select';
import { useEffect, useState } from 'react';

const ModalAirPort = ({ airportsData, setAirportsData, setAirportError, withFly, setWithFly }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    async function getAirports(inputValue) {
        try {
            const response = await fetch(`https://www.reservhotel.com/win/owa/ibe5.get_airport_json?p_search=${inputValue}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const airportsDataRes = await response.json();
            setAirportsData(airportsDataRes.map(airport => ({ label: airport.label, value: airport.value })));
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
        if (actionMeta.action === 'input-change') {
            setInputValue(newValue);
        }
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        // Aquí también podrías actualizar el estado de city si es necesario
    };

    return (
        <div className="modalAirPort-body" id="modalAirPortDescription">
            <Select
                value={selectedOption}
                onInputChange={handleInputChange}
                onChange={handleChange}
                options={airportsData}
                placeholder="Escribe o selecciona tu ciudad..."
                isClearable
                isSearchable
            />
        </div>
    );
};

export default ModalAirPort;
