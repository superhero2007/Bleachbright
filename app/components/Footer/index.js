import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from 'images/logo.png';
import Fb from 'images/footer-fb.png';

import './style.scss';

const Footer = props => (
  <div className="footer">
    <div className="footer__content">
      <div className="footer__content-left">
        <Link to="/" className="footer__content-left-logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="footer__content-left-copyright">
          Copyright © 2013 BleachBright Australia - 1300 253 224
        </div>
      </div>
      <div className="footer__content-menu">
        <div className="footer__content-menu__content">
          <Link
            to="/"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/' && 'active'}`}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/products' && 'active'}`}
          >
            PRODUCTS
          </Link>
          <Link
            to="/where-to-buy"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/where-to-buy' && 'active'}`}
          >
            WHERE TO BUY
          </Link>
          <Link
            to="/distributors"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/distributors' && 'active'}`}
          >
            Distributors
          </Link>
          <Link
            to="/salons"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/salons' && 'active'}`}
          >
            Salons/Spas
          </Link>
          <Link
            to="/about-us"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/about-us' && 'active'}`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className={`footer__content-menu__content-item ${props.location
              .pathname === '/contact' && 'active'}`}
          >
            CONTACT
          </Link>
          <Link
            to="http://www.facebook.com/bleachbrightaus"
            className="footer__content-menu__content-item facebook"
          >
            <img src={Fb} alt="Facebook Link" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
