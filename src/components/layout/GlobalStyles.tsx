import { createGlobalStyle } from 'styled-components';
import { handleFlex } from '../styles/utils/helpers';

export default createGlobalStyle`
  *::before,
  *::after
  ,* {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      font-size: ${(props) => props.theme.appSize};
      font-family: 'Montserrat', sans-serif;
    }

    body {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      padding: 0;
      margin: 0;
      line-height: 2;
    }

    ul{
      list-style:none;
    }

    a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.size.a};
    }
    h1{
      font-size: ${(props) => props.theme.size.h1};
    }
    h2{
      font-size: ${(props) => props.theme.size.h2};
    }
    h3{
      font-size: ${(props) => props.theme.size.h3};
    }
    p{
      font-size: ${(props) => props.theme.size.p};
    }

`;
