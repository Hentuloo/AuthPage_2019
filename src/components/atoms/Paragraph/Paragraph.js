import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.black}
    ${({ red, theme }) =>
      red &&
      css`
        padding: 15px 25px 10px 25px;
        background-color: ${theme.red[0]};
        color: ${theme.white};
        border-radius: 30px;
        box-shadow: ${() => `${theme.red[0]} ${theme.boxShadow}`};
      `};
  ${({ customfontsize, theme }) =>
    customfontsize &&
    css`
      font-size: ${() => theme.font[customfontsize]};
    `};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `};
`;

export default Paragraph;
