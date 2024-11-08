import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    font-family: "HakgyoansimNadeuriTTF-B";
  }
`;

export default GlobalStyle;
