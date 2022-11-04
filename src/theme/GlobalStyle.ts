
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => (props.theme.bg.main)};
    margin: 0;
  }
`

export default GlobalStyle;
