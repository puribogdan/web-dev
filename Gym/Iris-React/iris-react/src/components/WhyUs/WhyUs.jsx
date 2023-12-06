import React from 'react';
import './WhyUs.css';

const Why_us = () => {
  return (
    <div className="why-us-wrapper" id="why-us">
      <h1 className="h1">De ce să ne alegi pe noi?</h1>
      <p className="p">"Vino pentru antrenament, rămâi pentru rezultate."</p>
      <div className="icons-wrapper">
        <div className="why-us-icon-wrapper">
          <img
            src="../src/assets/treadmill.png"
            alt=""
            className="why-us-icon"
          />
          <p className="text-icon">Echipament modern</p>
        </div>
        <div className="why-us-icon-wrapper">
          <img src="../src/assets/food.png" alt="" className="why-us-icon" />
          <p className="text-icon">Plan nutrițional</p>
        </div>
        <div className="why-us-icon-wrapper">
          <img src="../src/assets/coach.png" alt="" className="why-us-icon" />
          <p className="text-icon">Antrenor personal</p>
        </div>
        <div className="why-us-icon-wrapper">
          <img src="../src/assets/box.png" alt="" className="why-us-icon" />
          <p className="text-icon">Zonă de box</p>
        </div>
      </div>
    </div>
  );
};

export default Why_us;
