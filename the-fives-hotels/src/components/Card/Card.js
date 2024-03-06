import styles from './Card.module.css'
import { useState, useEffect } from 'react';


export default function Card({ imgSrc, title, description }) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  

    return (
      <article className={styles.card}>
        <div 
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '300px',
            
          }}
          >

        </div>
        
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
            <button 
            className={`${styles.cardButton} ${styles.viewMore}`}
            >
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
