import React from "react";
import styles from "../../components/Footer/footer.module.scss";
import Image from "next/legacy/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.contactSection}>
        <article className={styles.phone}>
          <ul>
            <li>
              <a href="tel:+18005921246">USA & CAN: 1 (800) 592-1246</a>
            </li>
            <li>
              <a href="tel:8006818041">MEX: 800-681-8041</a>
            </li>
            <li>
              <a href="tel:+34518899218">España Llamada Gratuita: 34 518 89 9218</a>
            </li>
            <li>
              <a href="tel:08002003507">Brasil Llamada Gratuita: 0800 200 3507</a>
            </li>
            <li>
              <a href="tel:+529849800541">
                Resto Del Mundo: +52 984 980 0541
              </a>
            </li>
          </ul>

          <address>
            Acceso Xcalacoco S/N. Fracc. El Limonar 1, <br />
            Playa Del Carmen, Quintana Roo, C.P. 77710
          </address>
          <a
            className={styles.mail}
            href="mailto:reservationsinfo@thefiveshotels.com"
          >
            reservationsinfo@thefiveshotels.com
          </a>
        </article>
        <article className={styles.additionalInfoSection}>
          <ul>
            <li>
              <a href="#contact-us">ContactO</a>
            </li>
            <li>
              <a href="#jobs-careers">Empleos Y Carreras</a>
            </li>
            <li>
              <a href="#site-map">Mapa Del Sitio</a>
            </li>
            <li>
              <a href="#privacy-policy">Política De Privacidad</a>
            </li>
            <li>
              <a href="#best-price-guarantee">Mejor Precio Garantizado</a>
            </li>
          </ul>
          <div className={styles.agenciesCompanies}>
            <div>
              <h3>AGENCIAS</h3>
              <ul>
                <li>
                  <a href="#login-agencies">INICIAR SESIÓN EN AGENCIAS</a>
                </li>
                <li>
                  <a href="#register-agencies">REGISTRARSE EN AGENCIAS</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>COMPAÑÍA</h3>
            </div>
          </div>
        </article>
      </section>
      {/* contact */}
      <section className={styles.stayConnected}>
        <h4>MANTÉNGASE CONECTADO CON LOS HOTELES FIVES</h4>
        <div>
          <p>
          SUSCRÍBETE PARA QUE ESTÉS SIEMPRE ACTUALIZADO DE TODAS NUESTRAS PROMOCIONES Y BENEFICIOS.
          </p>
          <button className={styles.subscribeButton}>SUBSCRIBETE</button>
        </div>
        <div className={styles.follow}>
          <h4>SÍGUENOS EN</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/fb_icon.svg" width={20} height={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/insta_icon.svg" width={20} height={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/yt_icon.svg" width={20} height={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/twt_icon.svg" width={20} height={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/assets/in_icon.svg" width={20} height={20} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.footerRigths}>
        <article className={styles.RigtsArticle}>
          <p className={styles.allRigths}>Todos los derechos reservados © 2024</p>
        </article>
      </section>
    </footer>
  );
}
