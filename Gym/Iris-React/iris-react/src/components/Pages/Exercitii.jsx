import React from 'react';

import HeaderOther from '../HeaderOther/HeaderOther';
import './Exercitii.css';
import Footer from '../Footer/Footer';

import { Routes, Route, Link } from 'react-router-dom';

const Exercitii = () => {
  return (
    <>
      <HeaderOther pageTitle="Exerciții" headerUrl="/assets/hero1.jpg" />
      <section className="exercitii-wrapper">
        <h1 className="h1">Categorii</h1>
        {/* <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div> */}
        <div className="categories-wrapper">
          <Link to="/Exercitii/back">
            <div className="category">
              <img src="/assets/backicon1.svg" alt=""></img>

              <h2>Back</h2>
            </div>
          </Link>
          <Link to="/Exercitii/cardio">
            <div className="category">
              <img src="/assets/cardioicon1.svg" alt=""></img>
              <h2>Cardio</h2>
            </div>
          </Link>
          <Link to="/Exercitii/chest">
            <div className="category">
              <img src="/assets/chesticon1.svg" alt=""></img>
              <h2>Chest</h2>
            </div>
          </Link>
          <Link to="/Exercitii/lower%20arms">
            <div className="category">
              <img src="/assets/armsicon1.svg" alt=""></img>
              <h2>Lower Arms</h2>
            </div>
          </Link>
          <Link to="/Exercitii/lower%20legs">
            <div className="category">
              <img src="/assets/legsicon1.svg" alt=""></img>
              <h2>Lower Legs</h2>
            </div>
          </Link>
          <Link to="/Exercitii/neck">
            <div className="category">
              <img src="/assets/neckicon1.svg" alt=""></img>
              <h2>Neck</h2>
            </div>
          </Link>
          <Link to="/Exercitii/shoulders">
            <div className="category">
              <img src="/assets/shouldersicon1.svg" alt=""></img>
              <h2>Shoulders</h2>
            </div>
          </Link>
          <Link to="/Exercitii/upper%20arms">
            <div className="category">
              <img src="/assets/armsicon1.svg" alt=""></img>
              <h2>Upper Arms</h2>
            </div>
          </Link>
          <Link to="/Exercitii/upper%20legs">
            <div className="category">
              <img src="/assets/legsicon1.svg" alt=""></img>
              <h2>Upper Legs</h2>
            </div>
          </Link>
          <Link to="/Exercitii/waist">
            <div className="category">
              <img src="/assets/absicon1.svg" alt=""></img>
              <h2>Abs</h2>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Exercitii;
