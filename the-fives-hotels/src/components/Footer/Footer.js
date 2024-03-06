import React from "react";
import styles from "./footer.module.scss";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <section className={styles.contactSection}>
        <article>
          <ul>
            <li>
              <a href="tel:+18005921246">USA & CAN: 1 (800) 592-1246</a>
            </li>
            <li>
              <a href="tel:8006818041">MEX: 800-681-8041</a>
            </li>
            <li>
              <a href="tel:+34518899218">Spain Toll Free: 34 518 89 9218</a>
            </li>
            <li>
              <a href="tel:08002003507">Brazil Toll Free: 0800 200 3507</a>
            </li>
            <li>
              <a href="tel:+529849800541">
                Rest Of The World: +52 984 980 0541
              </a>
            </li>
          </ul>
          <address>
            Acceso Xcalacoco S/N. Fracc. El Limonar 1, <br />
            Playa Del Carmen, Quintana Roo, C.P. 77710
          </address>
          <a href="mailto:reservationsinfo@thefiveshotels.com">
            reservationsinfo@thefiveshotels.com
          </a>
        </article>
        <article className={styles.additionalInfoSection}>
          <ul>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
            <li>
              <a href="#jobs-careers">Jobs & Careers</a>
            </li>
            <li>
              <a href="#site-map">Site Map</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#best-price-guarantee">Best Price Guarantee</a>
            </li>
          </ul>
          <div className={styles.agenciesCompanies}>
            <div>
              <h3>AGENCIES</h3>
              <ul>
                <li>
                  <a href="#login-agencies">LOGIN AGENCIES</a>
                </li>
                <li>
                  <a href="#register-agencies">REGISTER AGENCIES</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>COMPANIES</h3>
            </div>
          </div>
        </article>
      </section>

      <section className={styles.stayConnected}>
        <h2>STAY CONNECTED WITH THE FIVES HOTELS</h2>
        <p>
          SUBSCRIBE AND STAY UP TO DATE WITH ALL OUR PROMOTIONS AND BENEFITS
        </p>
        <button className={styles.subscribeButton}>SUBSCRIBE</button>
        <h3>FOLLOW US</h3>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              T witter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
