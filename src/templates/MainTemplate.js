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

const MainTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainTemplate.propTypes = {
  children: PropType.element,
};
MainTemplate.defaultProps = {
  children: null,
};

export default MainTemplate;
