import React from 'react'
import Image from 'next/image'

export function Hambuguer({scroll, isOpen, setIsOpen}) {
    

    return (
       
        <section className="header__menu">
            <button 
              onClick={()=>setIsOpen(!isOpen)}
            >
              <Image 
                src={scroll?"/assets/burguer-menu-black.svg":"/assets/burguer-menu.svg"}
                width={30} 
                height={30} 
                alt="Burguer menu icon"

            />
            </button>
            <b>
              MENU
            </b>
        </section>
            
  
    )
}
