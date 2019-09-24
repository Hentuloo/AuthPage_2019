import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Gayathri&display=swap');
*,*::after,*::before{
  box-sizing:border-box;
}
  html{
    font-size:62.5%;
  }
  body {
   font-size:1.6rem;
  font-family: 'Gayathri', sans-serif;
   font-weight:700;
   background-color: white;
   margin:0px;
  letter-spacing: 1px;
  overflow-x:hidden;
  background: rgb(255,0,0);
  background: ${({ theme }) => theme.gradient};
  width:100%;
  min-height:100vh;
  }
@media (min-width: 768px) {
    html {
   font-size:80.5%;
  }
  }
 .focus-only {
   color:white;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap; /* 1 */
}
.focus-only:active,
.focus-only:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
  white-space: inherit;
}
  
`;

export default GlobalStyle;
