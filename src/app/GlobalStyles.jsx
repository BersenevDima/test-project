import { createGlobalStyle } from 'styled-components';
import { Colors } from '@/shared';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.Black};
    color: ${Colors.White};
    font-family: 'Inter', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
