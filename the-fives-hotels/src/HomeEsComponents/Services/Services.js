import { useState, useEffect } from 'react'; 
import { TitleSection } from '../TitleSection/TitleSection';
import style from '../../components/Services/Services.module.scss';
import GaleryServices from '../../components/Services/GaleryServices';
import GalleryMobile from '../../components/Services/GalleryMobile';

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

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
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
      <TitleSection titleBit="EXPERIENCIAS" title="Y SERVICIOS" /> 
      <p className={style.servicesPhrase}>
      La vida se hizo para disfrutarla. Vive experiencias inigualables.
    </p>
      {renderGallery()}
    </section>
  );
}