/* eslint-disable no-return-assign */
/*
 * WhereToBuy
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
import Header from 'components/Header';
import Footer from 'components/Footer';

import CoupleSmile from 'images/couple-smile.jpg';
import FeaturedBackground from 'images/featured-background.jpg';

import './style.scss';

const { jQuery } = window;

/* eslint-disable react/prefer-stateless-function */
class WhereToBuy extends React.PureComponent {
  componentDidMount() {
    jQuery('#map').mapit({
      xmlConfig: 'https://mlb-daemon.s3.amazonaws.com/mapit/BleachBright.xml',
    });
  }

  render() {
    return (
      <div className="where-to-buy">
        <Header location={this.props.location} />
        <section
          className="where-to-buy-section1"
          style={{ backgroundImage: `url(${CoupleSmile})` }}
        >
          <div className="where-to-buy-section1__content">
            <div>Teeth whitening at the speed of light</div>
          </div>
        </section>
        <section
          className="where-to-buy-section2"
          style={{ backgroundImage: `url(${FeaturedBackground})` }}
        >
          <div className="where-to-buy-section2__content">
            <div className="where-to-buy-section2__content__title title">
              Locate your nearest stockist
            </div>
            <div className="where-to-buy-section2__content__description">
              BleachBright is available in all States, please use the
              application below to find out where!
            </div>
            <div id="map" ref={map => (this.map = map)} />
          </div>
        </section>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

WhereToBuy.propTypes = {
  location: PropTypes.object,
};

export default WhereToBuy;
