import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Optional: Add smooth scrolling effect
  });
};

const footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-info-wrapper">
        <div className="phone">
          <img src="../src/assets/Phone.png" alt="phone-icon" />
          <h1>Telefon</h1>
          <p>0741234567</p>
        </div>
        <div className="location">
          <img src="../src/assets/location.png" alt="location-icon" />
          <h1>Adresă</h1>
          <p>Năsăud, str Rahovei nr.9</p>
        </div>
        <div className="mail">
          <img src="../src/assets/mail.png" alt="mail-icon" />
          <h1>E-mail</h1>
          <p>irisgym@gmail.com</p>
        </div>
      </div>

      <div className="footer-navbar">
        <ul>
          <li>
            <Link to="/#scrollToTop">Acasă</Link>
          </li>
          <li>
            <Link to="/#why-us">Despre noi</Link>
          </li>
          <li>
            <Link to="/#membership">Prețuri</Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/IMC" onClick={scrollToTop}>
              IMC
            </Link>
          </li>
          <li>
            <Link to="/Exercitii" onClick={scrollToTop}>
              Exercitii
            </Link>
          </li>
        </ul>
      </div>
      <h1 className="footer-h1">Iris Gym</h1>
      <div className="footer-line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="2"
          viewBox="0 0 1664 2"
          fill="none"
        >
          <path d="M0 1H1664" stroke="#C8C8C8" strokeWidth="0.3" />
        </svg>
      </div>
      <p className="footer-copyright">
        Copyright © Iris gym 2023 | This template was made by puribogdan
      </p>
      <div className="up-arrow-wrapper">
        <a href="#scrollToTop">
          <img
            src="../src/assets/uparrow.png"
            alt="up-arrow"
            className="footer-up-arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default footer;
