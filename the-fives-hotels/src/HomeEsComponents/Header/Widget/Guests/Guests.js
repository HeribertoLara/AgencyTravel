import React, { useState } from "react";
import Adults from "./Adults";
import Childs from "./Childs";
import Image from "next/image";
import "./Guest.scss";

export default function Guests({
  adults,
  setAdults,
  children,
  setChildren,
  numberChilds,
  setNumberChilds,
  maxNumberChilds,
}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="guests-container">
      {/*    {!openModal ? ( */}

      <label className="guests-container__label">
        <aside> OCCUPANCY </aside>
        <button
          type="button"
          className="guests-container__button"
          onClick={() => setOpenModal(true)}
        >
          <Image src={"/assets/Usuario.svg"} width={12} height={12} alt="user-icon" />
          <aside className="guests-container__button-text">
            {`ADULTS ${adults}  CHILDRENS ${numberChilds}`}
          </aside>
        </button>
      </label>
      {/* ) : (
        
      )} */}
      <br />

      {openModal && (
        <section className="modal-guest">
          <h4>
            <Image 
              src={"/assets/Usuario.svg"} 
              width={30} height={30} 
              alt="user-icon" 
              />
            GUESTS
          </h4>
          <Adults
            adults={adults}
            setAdults={setAdults}
            className="modal-guest__adults"
          />
          <Childs
            children={children}
            setChildren={setChildren}
            numberChilds={numberChilds}
            setNumberChilds={setNumberChilds}
            maxNumberChilds={maxNumberChilds}
            className="modal-guest__children"
          />
          <section className="guests-container__actions">
            <button
              type="button"
              className="guests-container__button-save"
              onClick={() => setOpenModal(false)}
            >
              SAVE
            </button>
            <button
              type="button"
              className="guests-container__button-cancel"
              onClick={() => setOpenModal(false)}
            >
              CANCEL
            </button>
          </section>
        </section>
      )}
    </article>
  );
}
