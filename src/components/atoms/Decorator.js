import React from 'react';
import styled from 'styled-components';

const WhiteBackground = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

const Decorator = story => (
  <WhiteBackground>{story()}</WhiteBackground>
);

export default Decorator;
