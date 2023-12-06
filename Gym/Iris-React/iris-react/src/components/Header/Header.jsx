import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export const Button = () => {
  return (
    <Link to="/#why-us">
      <button className="button">
        <div className="text-wrapper">Explorează</div>
        <img
          className="forge-icon"
          alt="Forge icon"
          src="../src/assets/forge-icon-1.png"
        />
      </button>
    </Link>
  );
};

const Header = () => {
  return (
    <header>
      <div className="hero-container">
        <img
          src="../src/assets/hero1.jpg"
          alt="girl-gym"
          className="hero-img"
        />
        <Navbar />

        <Button />
      </div>
    </header>
  );
};

export default Header;
