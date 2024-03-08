import React, { useState } from "react";
import Image from "next/image";
import questions from "./questions";
import "./TabsFaq.scss";
import DropFaqs from "./DropFaqs";


const TabsFaqs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <article className="faqs__section">
      <ul className="faqs__tabs">
        {questions.map((section, index) => (
          <li
            key={section.id}
            className={activeTabIndex === index ? "faq-li active" : "faq-li"}
            onClick={() => handleTabClick(index)}
          >
            <Image
              src={section.iconCategory}
              width={100}
              height={60}
              alt="icon"
            />
            <br />
            <p>{section.name}</p>
          </li>
        ))}
      </ul>
  
 
        {questions[activeTabIndex].faqs.map((faq) => (
          <DropFaqs 
            key={faq.id} 
            question={faq.question} 
            answer={faq.answer} 
            />
          
        ))} 

    </article>
  );
};

export default TabsFaqs;
