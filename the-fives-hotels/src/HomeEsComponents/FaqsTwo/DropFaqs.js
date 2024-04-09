"use client"
import { useState } from 'react';
import style from  "../../components/Faqs/DropFaqs.module.scss"
import  Image  from 'next/image';

const DropFaqs = ({ question, answer }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <article className={style.dropFaq}>
      <button 
      className={style.dropQuestion} 
      onClick={toggleDropdown}
      >
       <aside>
            {question}
        </aside> 
        <figure>
            <Image
                src={isDropdownOpen?
                      "/assets/menos.svg": "/assets/plus-icon.svg" 
                }
                width={20}
                height={20}
                alt="more"
            ></Image>
        </figure>
        
      </button>
      {isDropdownOpen && (
        <div className={style.dropAnswer}>
          <p>{answer}</p>
        </div>
      )}
    </article>
  );
};

export default DropFaqs;