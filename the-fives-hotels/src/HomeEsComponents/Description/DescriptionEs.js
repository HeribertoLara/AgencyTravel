"use client"
import { useState, useEffect } from "react";
import DescriptionMobileEn from "./DescriptionMobileEs";
import DescriptionDesktop from "./DescriptionDesktopEs";

export default function DescriptionEn(props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 750);
    // Establecer el valor inicial al montar
    handleResize();
    // Añadir el listener de resize
    window.addEventListener('resize', handleResize);
    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop ? <DescriptionDesktop /> : <DescriptionMobileEn />;
}
