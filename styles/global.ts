import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* Begin: Add font family */
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Light.ttf');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Regular.ttf');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Medium.ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-SemiBold.ttf');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Quicksand';
    src: url('/fonts/Quicksand-Bold.ttf');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  /* End: Add font family */

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Quicksand, sans-serif;
    color: #455a64;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #839198;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #839198;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #839198;
  }

  .react-select__control {
    height: 42px;
    border-color: #eaeaea !important;
  }
`;
