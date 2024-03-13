import React, { useState } from "react";

export default function Guests({ adults, setAdults, children, setChildren }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Añade un nuevo niño al array con un valor de edad por defecto
  const addNewChild = () => {
    if (children.length < 8) {
      setChildren([...children, { age: 0 }]);
    }
  };

  // Elimina el niño del array por el índice
  const removeChild = (index) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    setChildren(updatedChildren);
  };

  // Actualiza la edad de un niño específico
  const handleChildAgeChange = (index, age) => {
    const updatedChildren = children.map((child, i) => {
      if (i === index) {
        return { ...child, age };
      }
      return child;
    });
    setChildren(updatedChildren);
  };

  return (
    <div className="guests-container">
      <button type="button" className="guests-button" onClick={openModal}>
        Guests
      </button>

      {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>GUESTS</h2>
            <div className="guests-adults">
              <button onClick={() => setAdults(adults - 1 >= 1 ? adults - 1 : 1)}>-</button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
            <div className="guests-children">
              <button onClick={addNewChild}>+</button>
              <span>{children.length}</span>
            </div>
            <div className="children-ages">
              {children.map((child, index) => (
                <div key={index} className="child-age-input">
                  <label htmlFor={`child-age-${index}`}>Child {index + 1} Age</label>
                  <input
                    type="number"
                    id={`child-age-${index}`}
                    value={child.age}
                    onChange={(e) => handleChildAgeChange(index, parseInt(e.target.value, 10))}
                  />
                  <button onClick={() => removeChild(index)}>Remove</button>
                </div>
              ))}
            </div>
            <button className="modal-close" onClick={closeModal}>Cancel</button>
            <button className="modal-save" onClick={closeModal}>Save</button>
          </div>
          <div className="modal-overlay" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}
