import React, { useState } from "react";
import Adults from "./Adults";
import Childs from "./Childs";

export default function Guests({ adults, setAdults, children, setChildren, numberChilds, setNumberChilds }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="guests-container">
      <button
        type="button"
        className="guests-button"
        onClick={() => setOpenModal(true)}
      >
        <p>
        {`Adults ${adults}  childrens ${numberChilds}`}
        </p>
      </button>
      <button
            type="button"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button><br/>
      {openModal && <article>abierto</article>}
      {openModal && (
        <section className="modal-guest">
          <Adults adults={adults} setAdults={setAdults}/>
          <Childs 
            children={children} 
            setChildren={setChildren}
            numberChilds={numberChilds}
            setNumberChilds={setNumberChilds}
            
            />
        </section>
      )}
    </div>
  );
}
