import Image from 'next/image'
import styles from './Card.module.css' // Use a module CSS for local scope
import { useEffect, useState } from 'react';


export default function Card({ imgSrc, title, description }) {
  /* const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
 */
  /* useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    // Establecer tamaño inicial
    handleResize();

    // Limpiar el evento al desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = windowSize.width < 1550 ? 500 : 700;
  const height = windowSize.height< 800 ? 300 : 500  */;

    return (
      <article className={styles.card}>
        <Image
          
          src={imgSrc}
          alt={title}
          width={500}
          height={500}
          layout="responsive"
        />
        <div className={styles.cardContent}>
          <div>
            <h2 className={styles.cardTitle}>
              {title}
            </h2>
            <p className={styles.cardDescription}>
              {description}
            </p>
          </div>
          <div className={styles.cardActions}>
            <button className={`${styles.cardButton} ${styles.viewMore}`}>
              VIEW MORE
            </button>
            <button className={`${styles.cardButton} ${styles.bookNow}`}>
              BOOK NOW
            </button>
          </div>
        </div>
      </article>
    );
}
