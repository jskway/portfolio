import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    color: #222;
    font-family: 'HelveticaNeue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    font-size: 62.5%;
    line-height: 1.4;

  h1,
  h2,
  h3,
  h4 {
    color: #222;
  }

  h2 {
    font-size: 2.4rem;
  }

  section, 
  p {
    color: #696969;
    font-size: 1.6rem;
    line-height: 1.6;

    a {
      color: #222;
      text-decoration: none;
    }
  }
`

export default GlobalStyle
