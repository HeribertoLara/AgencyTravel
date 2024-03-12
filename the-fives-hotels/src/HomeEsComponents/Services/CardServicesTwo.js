import React, { useState } from "react";
import Link from "next/link";
import "../../components/Services/CardServices.scss";

export default function CardServices({ image }) {
  const [onHover, setOnHover] = useState(null);

  return (
    <article
      className={image.class}
      onMouseEnter={() => setOnHover(image.title)}
      onMouseLeave={() => setOnHover(null)}
    >
      {onHover === image.title ? (
        <div className="card-service__cover">
          <h3 className="card-service-title">{image.title}</h3>
          <p className="card-service__text">{image.text}</p>
          <div className="card-services-links">
            <div className="card-service__contact">
              <p>
                <b>CALL US</b>
              </p>
              <a href="tel:800-681-8106">MEX: 800-681-8106</a>
              <hr />
              <a href="tel:1 833-274-3311">USA CANADA: 1 833-274-3311</a>
              <hr />
              <a href="tel: 52 984-980-0536">
                RESTO DEL MUNDO: 52 984-980-0536
              </a>
            </div>
           
            <div>

            <Link href="#" className="card-service__view-more">
              VER MAS
            </Link>
            </div>
      
          </div>
        </div>
      ) : (
        <div className="card-service__nocover">
          <h3 className="card-service-title ">{image.title}</h3>
        </div>
      )}
    </article>
  );
}
