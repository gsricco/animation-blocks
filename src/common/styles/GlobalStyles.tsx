import {createGlobalStyle} from "styled-components";
// @ts-ignore
import InterRegular from '../styles/assets/fonts/inter/Inter-Regular.ttf';
// @ts-ignore
import InterBold from '../styles/assets/fonts/inter/Inter-Bold.ttf';

export const GlobalStyles = createGlobalStyle
  `
      *,
      *::before,
      *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          src: local('Inter'), url(${InterRegular}) format('ttf');
      }

      @font-face {
          font-family: 'Inter Bold';
          font-style: normal;
          font-weight: 900;
          src: local('Inter Bold'), url(${InterBold}) format('ttf');
      }


      body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Inter', 'Inter Bold',
          sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }

      code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', 'Inter','Inter Bold',
          monospace;
      }

  `