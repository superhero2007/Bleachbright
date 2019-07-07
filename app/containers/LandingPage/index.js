/*
 * LandingPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import CoupleSmile from 'images/couple-smile.jpg';
import BlogBackground from 'images/blog-background.png';
import FeaturedBackground from 'images/featured-background.jpg';

import ProductRange from 'images/product-range.jpg';
import ProductRangeHover from 'images/product-range__hover.jpg';
import NearestStockist from 'images/nearest-stockist.jpg';
import NearestStockistHover from 'images/nearest-stockist__hover.jpg';
import Distributor from 'images/distributor.jpg';
import DistributorHover from 'images/distributor__hover.jpg';

import Product from 'images/product.png';
import RightArrow from 'images/right-arrow.png';

import './style.scss';

const Wrapper = styled.div`
  overflow: hidden;
`;

/* eslint-disable react/prefer-stateless-function */
class LandingPage extends React.PureComponent {
  render() {
    return (
      <Wrapper className="home">
        <Header location={this.props.location} />
        <section
          className="home-section1"
          style={{ backgroundImage: `url(${CoupleSmile})` }}
        >
          <div className="home-section1__content">
            <div>Teeth whitening at the speed of light</div>
          </div>
        </section>
        <section
          className="home-section2"
          style={{ backgroundImage: `url(${BlogBackground})` }}
        >
          <div className="home-section2__content">
            <Link className="home-section2__content-item" to="/products">
              <img src={ProductRange} alt="Product" className="origin" />
              <img src={ProductRangeHover} alt="Product" className="hover" />
            </Link>
            <Link className="home-section2__content-item" to="/where-to-buy">
              <img src={NearestStockist} alt="Nearest" className="origin" />
              <img src={NearestStockistHover} alt="Nearest" className="hover" />
            </Link>
            <Link className="home-section2__content-item" to="/distributor">
              <img src={Distributor} alt="Distributor" className="origin" />
              <img src={DistributorHover} alt="Distributor" className="hover" />
            </Link>
          </div>
        </section>
        <section
          className="home-section3"
          style={{ backgroundImage: `url(${FeaturedBackground})` }}
        >
          <div className="home-section3__content">
            <div className="home-section3__content-left">
              <div className="home-section3__content-left__title title">
                Featured Product
              </div>
              <div className="home-section3__content-left__content">
                <img src={Product} alt="Product" />
                <div className="home-section3__content-left__content-description">
                  <div className="home-section3__content-left__content-description__title1">
                    BleachBright
                  </div>
                  <div className="home-section3__content-left__content-description__title2">
                    KeepBright Whitening Pen
                  </div>
                  <div className="home-section3__content-left__content-description__title3">
                    RRP $49.99
                  </div>
                  <ul className="home-section3__content-left__content-description__content">
                    <li
                      className="home-section3__content-left__content-description__content-item"
                      style={{ listStyle: `url(${RightArrow})` }}
                    >
                      Quick, convenient and affordable
                    </li>
                    <li
                      className="home-section3__content-left__content-description__content-item"
                      style={{ listStyle: `url(${RightArrow})` }}
                    >
                      Contains 18% Carbarmide Peroxide
                    </li>
                    <li
                      className="home-section3__content-left__content-description__content-item"
                      style={{ listStyle: `url(${RightArrow})` }}
                    >
                      Amazing results and fresh minty taste
                    </li>
                    <li
                      className="home-section3__content-left__content-description__content-item"
                      style={{ listStyle: `url(${RightArrow})` }}
                    >
                      30 plus applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="home-section3__content-right">
              <div className="home-section3__content-right__title title">
                Salons and spas
              </div>
              <div className="home-section3__content-right__description">
                Whether you currently own one of these businesses or want to
                start your own BleachBright teeth whitening business, we have
                premium products and remarkable technology that will make your
                customers extremely happy and want to come back!
              </div>
              <Link
                to="/salons"
                className="home-section3__content-right__button"
              >
                Find out more
              </Link>
              <div className="home-section3__content-right__title title">
                Find us on Facebook
              </div>
            </div>
          </div>
        </section>
        <Footer location={this.props.location} />
      </Wrapper>
    );
  }
}

LandingPage.propTypes = {
  location: PropTypes.object,
};

export default LandingPage;
