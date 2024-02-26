import React, { useState } from 'react';
import './DoubleDropList.css';

export default function DoubleDropList(props) {
    const { title, items } = props;
    const [isListVisible, setIsListVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeSubIndices, setActiveSubIndices] = useState({});

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
        // Opcionalmente, restablecer los estados de los submenús cuando se oculta la lista
        if (isListVisible) {
            setActiveIndex(null);
            setActiveSubIndices({});
        }
    };

    const handleClick = (index) => {
        // Si la lista no está visible, no hacer nada
        if (!isListVisible) return;

        setActiveIndex(index === activeIndex ? null : index);
        // Restablecer el estado del submenú si se selecciona otro ítem
        if (index !== activeIndex) setActiveSubIndices({});
    };

    const handleSubClick = (index, subIndex) => {
        // Cambio de estado solo si el ítem del primer nivel está activo
        if (activeIndex === index) {
            setActiveSubIndices(prev => ({
                ...prev,
                [index]: prev[index] === subIndex ? null : subIndex
            }));
        }
    };

    return (
        <article className="double-drop-list">
            <button onClick={toggleListVisibility} className="double-drop-list__title-button">
                <h2 className="double-drop-list__title">{title}</h2>
            </button>
            {isListVisible && (
                <ul className="double-drop-list__items">
                    {items.map((item, index) => (
                        <li key={item.name} className={`double-drop-list__item ${activeIndex === index ? 'active' : ''}`}>
                            <button onClick={() => handleClick(index)} className="double-drop-list__item-button">
                                {item.name}
                            </button>
                            {activeIndex === index && item.restaurants && (
                                <ul className="double-drop-list__subitems">
                                    {item.restaurants.map((restaurant, subIndex) => (
                                        <li key={restaurant.name} className={`double-drop-list__subitem ${activeSubIndices[index] === subIndex ? 'active' : ''}`}>
                                            <button onClick={() => handleSubClick(index, subIndex)} className="double-drop-list__subitem-button">
                                                {restaurant.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}
