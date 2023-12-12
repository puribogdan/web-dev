import React from 'react';
import './Info.css';

const info = () => {
  return (
    <div className="info-wrapper">
      <div className="info-icon" id="location">
        <img src="/assets/location.png" alt=""></img>
        <p className="info-p">Năsăud, str. Rahovei 9</p>
      </div>
      <div className="info-icon">
        <img src="/assets/phone.png" alt=""></img>
        <p className="info-p">074123456789</p>
      </div>
      <div className="info-icon">
        <img src="/assets/mail.png" alt=""></img>
        <p className="info-p">irisgym@gmail.com</p>
      </div>
      <div className="info-icon">
        <img src="/assets/instagram.png" alt=""></img>
        <p className="info-p">irisgymfitness</p>
      </div>
    </div>
  );
};

export default info;
