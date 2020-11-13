import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: 'HelveticaNeue', -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    font-size: 18px;
    line-height: 1.4;

    @media (min-width: calc(550px + 10vw)) {
      font-size: 18px;
    }
`
export default GlobalStyle
