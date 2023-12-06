import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-btn__burger" />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="nav-big" id="scrollToTop">
        <Link to="/" className="logo">
          IRIS GYM
        </Link>

        <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        <nav className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-ul">
            <li>
              <Link to="/" className="nav-link-mobile" onClick={closeMenu}>
                Acasă
              </Link>
            </li>
            <li>
              <Link to="/#why-us" onClick={closeMenu}>
                Despre noi
              </Link>
            </li>
            <li>
              <Link to="/#membership" onClick={closeMenu}>
                Prețuri
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link-mobile"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            <li className="utile-mobile">
              Utile
              <div className="submenu-mobile">
                <ul className="submenu-mobile-ul">
                  <li>
                    <Link to="/IMC">IMC</Link>
                  </li>
                  <li>
                    <Link to="/Exercitii">Exercitii</Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <ul>
          <li>
            <Link to="/" className="nav-link">
              Acasă
            </Link>
          </li>
          <li>
            <Link to="/#why-us">Despre noi</Link>
          </li>
          <li>
            <Link to="/#membership">Prețuri</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>

          <li className="utile">
            Utile
            <div className="submenu">
              <ul>
                <li>
                  <Link to="/IMC">IMC</Link>
                </li>
                <li>
                  <Link to="/Exercitii">Exercitii</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
