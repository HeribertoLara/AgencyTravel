import React from 'react';

export default function Adults({ adults, setAdults }) {

    return (
        <article>
            <label htmlFor="adultsInput">Adults</label> <br/>

            <button 
                type="button"
                className="modal-guest__button-plus"
                onClick={() => setAdults(prevAdults => prevAdults < 10 ? prevAdults + 1 : prevAdults)} 
            >
                +
            </button>

            <input 
                id="adultsInput" 
                type="text"
                value={adults} 
                readOnly 
            />

            <button 
                type="button"
                className="modal-guest__button-minus"
                onClick={() => setAdults(prevAdults => Math.max(1, prevAdults - 1))} // Evita que el número de adultos sea menor a 1
            >
                -
            </button>
        </article>
    );
}
