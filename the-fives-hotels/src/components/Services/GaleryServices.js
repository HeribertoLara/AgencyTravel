import React from 'react'
import Link from 'next/link'; 
import './servicesGalery.scss'
export default function GaleryServices({images}) {
    
   
    return (
      <article className='galery__services'>
        {images.map(image => (
          <div 
            key={image.title}
            className={image.class}
         
          >
            <div className='galery__services-cover'>
              <div>
                <h3 className='galery__services-title'>{image.title}</h3>
                <p className='galery__services-text'>{image.text}</p>
                <Link href="#" className=' galery__services-link'>
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </article>
    );
}
