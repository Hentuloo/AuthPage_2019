import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Descritpion = styled.span`
  position: absolute;
  width: 100%;
  left: 5%;
  bottom: 0%;
  font-weight: ${({ theme }) => theme.font.light};
  font-size: ${({ theme }) => theme.font.xs};
  text-align: left;
  color: ${({ theme }) => theme.red[1]};
`;
const Field = styled.input`
  background: ${({ theme }) => theme.blue[0]};
  padding: 12px 10px 12px 25px;
  color: ${({ theme }) => theme.white};
  border-radius: 30px;
  border: none;
  box-shadow:  ${({ theme }) => `${theme.black} ${theme.boxShadow}`};
  font-size:${({ theme }) => theme.font.s}
  &::placeholder {
    color: ${({ theme }) => theme.gray[2]};
  }

  ${({ theme, red }) =>
    red &&
    css`
      background-color: ${() => theme.red[0]};
    `}
`;
const Wrapper = styled.div`
  position: relative;
  padding-bottom: 25px;
`;
const Input = ({ className, message, ...rest }) => {
  return (
    <Wrapper className={className}>
      <Field {...rest} />
      {message && <Descritpion>{message}</Descritpion>}
    </Wrapper>
  );
};

Input.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};
Input.defaultProps = {
  message: '',
  className: '',
};

export default Input;
