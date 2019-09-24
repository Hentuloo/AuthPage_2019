import styled, { css, keyframes } from 'styled-components';

const load = keyframes`
  from {
  transform: translate(-150px, -50%) rotate(30deg);
  }
  to {
   transform: translate(650px, -50%) rotate(30deg);
  }
`;

const Button = styled.button`
  position: relative;
  margin: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.blue[0]};
  color: white;
  font-size: 16px;
  cursor: pointer;
  overflow: hidden;

  box-shadow: ${({ theme }) => `${theme.blue[0]} ${theme.boxShadow}`};
  :disabled {
    opacity: 0.4;
  }

  :hover {
    background: ${({ theme, red }) =>
      red ? theme.red[1] : theme.blue[1]};
  }
  &::after,
  &::before {
    display: none;
    content: '';
    position: absolute;
    width: 50px;
    height: 300px;
    background-color: ${({ theme }) => theme.gray[3]};
    left: 0%;
    top: 0%;
    transform: translate(-150px, -50%) rotate(30deg);
  }

  ${({ theme, red }) =>
    red &&
    css`
      background-color: ${() => theme.red[0]};
      box-shadow: ${() => `${theme.red[0]} ${theme.boxShadow}`};
    `}
  ${({ loadAnimation }) =>
    loadAnimation &&
    css`
      &::after {
        display: block;
        animation: ${load} 1.1s 0.4s linear infinite alternate;
      }
      &::before {
        display: block;
        animation: ${load} 1.6s 0.2s linear infinite alternate-reverse;
      }
    `}
`;

export default Button;
