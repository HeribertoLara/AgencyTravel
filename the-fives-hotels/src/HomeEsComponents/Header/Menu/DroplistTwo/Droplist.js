"use client"
import { useState } from 'react';
import '../../../../components/DroplistTwo/Droplist.css'; 

const DropList = ({ name, options }) => {
  
 const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelect = (item) => {
  
    setIsDropdownOpen(false);
  };

  return (
    <div className="drop-list">
      <button className="drop-list__button" onClick={toggleDropdown}>
        {name}
      </button>
      {isDropdownOpen && (
        <ul className="drop-list__options">
          {options.map((option) => (
            <li 
              key={option.name} 
              className="drop-list__option"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropList;
