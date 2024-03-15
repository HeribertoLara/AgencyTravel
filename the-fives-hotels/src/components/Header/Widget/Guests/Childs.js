import { useEffect } from "react";

export default function Childs({
  children,
  setChildren,
  numberChilds,
  setNumberChilds,
  maxNumberChilds,
}) {

  useEffect(() => {

    console.log(maxNumberChilds)
    console.log(children)

  }, [children]);

  const incrementChilds = (currentValue, setValue) => {
    setValue((prevValue) => (prevValue < maxNumberChilds ? prevValue + 1 : prevValue));
    if (currentValue < maxNumberChilds) {
      setChildren([...children, 0]);
      console.log(children);
    }
    /* children es una prop que es un array vacio  vamos a agregar  un 0 a este array que va a ser igual al numberChilds */
  };

  const decrementChilds = (currentValue, setValue, children, setChildren) => {
    setValue((prevValue) => Math.max(0, prevValue - 1));
  
    if (children.length > 0) {
      setChildren((prevChildren) => prevChildren.slice(0, -1)); 
  };
  }
  const handleAgeChange = (index, newAge) => {
    const age = Math.max(0, Math.min(17, parseInt(newAge, 10) || 0)); 
    const updatedChildren = [...children];
    updatedChildren[index] = age; 
    setChildren(updatedChildren);
  }
  return (
    <article>
      <button
        type="button"
        className="modal-guest__button-plus"
        onClick={() => incrementChilds(numberChilds, setNumberChilds)}
      >
        +
      </button>

      <input id="childrenInput" type="text" value={numberChilds} readOnly />

      <button
        type="button"
        className="modal-guest__button-minus"
        onClick={() =>
          decrementChilds(numberChilds, setNumberChilds, children, setChildren)
        }
      >
        -
      </button>
      
      {children.map((child, index) => (
        <select
          key={index}
          value={child}
          onChange={(e) => handleAgeChange(index, e.target.value)}
        >
          {Array.from({ length: 18 }, (_, i) => ( // Crea un array con 18 elementos (0-17)
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      ))}
       
    </article>
  );
}
