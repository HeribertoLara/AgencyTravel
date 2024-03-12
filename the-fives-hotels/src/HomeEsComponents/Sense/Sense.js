import { useState } from 'react';
import style from './Sense.module.scss';
import  Image  from 'next/legacy/image';
export default function Sense(){
    const senseImage = [
        {
            id: 0,
            name: 'OLFATO',
            legend:"Descubre nuevos olores.",
            url: '/assets/smell-image.avif',
            urlButton: '/assets/smell-icon.svg',
            urlButtonActive: '/assets/smell-icon-white.svg'
        },
        {
            id: 1,
            name: 'VISTA',
            legend:"Goza de los escenarios más fascinantes.",
            url: '/assets/view-image.avif',
            urlButton: '/assets/view-icon.svg',
            urlButtonActive: '/assets/view-icon-white.svg'
        },
        {
            id: 2,
            name: 'OIDO',
            legend:"Sorpréndete por los sonidos de la naturaleza.",
            url: '/assets/hearing-image.avif',
            urlButton: '/assets/hear-icon.svg',
            urlButtonActive: '/assets/hear-icon-white.svg'
        },
        {
            id: 3,
            name: 'GUSTO',
            legend:"Deléitate con una única mezcla de sabores.",
            url: '/assets/taste-image.avif',
            urlButton: '/assets/taste-icon.svg',
            urlButtonActive: '/assets/taste-icon-white.svg'
        },
        {
            id: 4,
            name: 'TACTO',
            legend:"Percibe nuevas texturas.",
            url: '/assets/touch-image.avif',
            urlButton: '/assets/touch-icon.svg',
            urlButtonActive: '/assets/touch-icon-white.svg'
        }
    ]
    const [background, setBackground] = useState('/assets/smell-image.avif');
    const [legend, setLegend] = useState('Rejoice in the sounds of nature.');
    const [activeButtonId, setActiveButtonId] = useState(null);
 
    
    // Función para cambiar el fondo
    const changeBackground = (newBackground, newLegend,id) => {
      setBackground(newBackground);
      setLegend(newLegend);
        setActiveButtonId(id);
      console.log(newBackground);
    };

    const changeIcon = (newIcon) => {
        setIconSense(newIcon);
    }
  
    return (
      <section 
        style={{ 
         
         
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          }}
        className={style.senseContainer}
        >
            {
                senseImage.map(sense=>(
                    <article key={sense.id} className={style.senseArticle}>
                    <button 
                        key={sense.id}
                        className={`${style.button} ${activeButtonId === sense.id ?
                             style.activeButton : ''}`}
                        onClick={() => changeBackground(sense.url, sense.legend, sense.id)}
                        
                    >
                        <Image
                            src={sense.urlButton}
                            alt={sense.name}
                            width={100}
                            height={100}

                        />

                        <p>
                        
                        {sense.name}
                        </p>
                    </button>
                </article>
                ))
            }
        <p className={style.legend}>
        {legend}
        </p> 
     
      </section>
    );
        }
  