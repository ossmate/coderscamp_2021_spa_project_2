import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box; 
  }
  
  body {
    margin: 0;
    padding: 0; 
    font-size: 62.5%;
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;
