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
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './style.scss';

const Wrapper = styled.div`
  overflow: hidden;
`;

/* eslint-disable react/prefer-stateless-function */
class LandingPage extends React.PureComponent {
  render() {
    return (
      <Wrapper className="wrapper">
        <Header />
        <div>Wrapper</div>
        <Footer />
      </Wrapper>
    );
  }
}

export default LandingPage;
