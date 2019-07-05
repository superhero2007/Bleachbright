import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 2rem;
  background: rgba(235, 239, 253);
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Wrapper>
    <div>Header</div>
  </Wrapper>
);

export default Header;
