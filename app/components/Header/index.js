import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from 'images/logo.png';
import Address from 'images/address.png';

import './style.scss';

const Header = props => (
  <div className="header">
    <div className="header__content">
      <Link to="/" className="header__content-logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="header__content-menu">
        <img src={Address} alt="Address" />
        <div className="header__content-menu__content">
          <Link
            to="/"
            className={`header__content-menu__content-item ${props.location
              .pathname === '/' && 'active'}`}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className={`header__content-menu__content-item ${props.location
              .pathname === '/products' && 'active'}`}
          >
            PRODUCTS
          </Link>
          <Link
            to="/where-to-buy"
            className={`header__content-menu__content-item ${props.location
              .pathname === '/where-to-buy' && 'active'}`}
          >
            WHERE TO BUY
          </Link>
          <Link
            to="/about-us"
            className={`header__content-menu__content-item ${props.location
              .pathname === '/about-us' && 'active'}`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className={`header__content-menu__content-item ${props.location
              .pathname === '/contact' && 'active'}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
