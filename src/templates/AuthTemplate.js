import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.main`
  position: absolute;
  width: 90vw;
  max-width: 700px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;

const AuthTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

AuthTemplate.propTypes = {
  children: PropType.element,
};
AuthTemplate.defaultProps = {
  children: null,
};

export default AuthTemplate;
