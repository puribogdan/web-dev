import React from 'react';
import './HeaderOther.css';
import Navbar from '../Navbar/Navbar';

const HeaderOther = ({ pageTitle, headerUrl }) => {
  return (
    <header>
      <div className="header-other-wrapper">
        <img src={headerUrl} alt="girl-gym" />
        <h1 className="header-other-h1">{pageTitle}</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default HeaderOther;
