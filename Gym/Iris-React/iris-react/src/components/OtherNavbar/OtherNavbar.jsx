import React from 'react';
import { Link } from 'react-router-dom';
import './OtherNavbar.css';

const OtherNavbar = () => {
  return (
    <nav>
      <a href="#" className="logo-link" id="scrollToTop">
        <img src="/assets/logo.png" alt="logo" className="logo" />
      </a>
      <ul>
        <li>
          <Link to="/">Acasă</Link>
        </li>
        <li>
          <a href="#">Despre noi</a>
        </li>
        <li>
          <a href="#">Prețuri</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Utile</a>
        </li>
      </ul>
    </nav>
  );
};

export default OtherNavbar;
