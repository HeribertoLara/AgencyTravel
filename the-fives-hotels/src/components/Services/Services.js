import { useState, useEffect } from 'react'; 
import { TitleSection } from '../TitleSection/TitleSection';
import style from './Services.module.scss';
import GaleryServices from './GaleryServices';
import GalleryMobile from './GalleryMobile';

// Hook personalizado para usar media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export default function Services() {
  // Usa el hook personalizado para verificar el ancho de la ventana
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Componente o función para renderizar la galería correcta
  const renderGallery = () => {
    if (isDesktop) {
      return <GaleryServices />;
    } else {
      return <GalleryMobile />;
    }
  };

  return (
    <section className={style.services}>
      <TitleSection titleBit="EXPERIENCES" title="AND SERVICES" /> 
      <p className={style.servicesPhrase}>
        Life is meant to be enjoyed. Enjoy it at The Fives
    </p>
      {renderGallery()}
    </section>
  );
}