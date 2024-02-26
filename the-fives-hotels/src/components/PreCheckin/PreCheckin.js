import Image from 'next/image'
import { useState } from 'react'
import './PreCheckin.css'

export default function PreCheckin({scroll}) {
    const [isOpen, setIsOpen] = useState(false);
   

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <section className="pre__checkin">
            <a href="#" 
              className={scroll? 
              "header__menu border__left-black":
              "header__menu border__left-white" }
              onClick={toggleDropdown}
            >
                <p className={scroll?"":"color__white"}>PRE-CHECK-IN</p>
                <Image
                  className={`fill__white ${isOpen?"rotated":""}`} 
                  src="/assets/arrow_bread_crumb.svg"
                  alt="Arrow bread crumb"
                  width={10}
                  height={10}
                />
            </a>
            {/* This is the dropdown */}
            {isOpen && (
                <ul className="dropdown">
                    <li href="#">
                        <a>
                            The Fives Beach Hotel & Residences
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            The Fives Oceanfront Puerto Morelos
                        </a>
                    </li>
                </ul>
            )}
      </section>
        
    )
}
