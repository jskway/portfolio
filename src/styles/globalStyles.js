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
    font-size: 62.5%;
    line-height: 1.4;
`

export default GlobalStyle
