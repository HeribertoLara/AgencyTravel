import React, { useState } from "react";
import Link from "next/link";



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
          <Link 
            href="#" 
            className="link">
                VER MAS
          </Link>
        </div>
      ) : (
        <div className="card-service__nocover">
          <h3 className="card-service-title ">{image.title}</h3>
        </div>
      )}
    </article>
  );
}
