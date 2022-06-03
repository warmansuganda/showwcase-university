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

  .react-select__option, .react-select__menu-notice, .react-select__placeholder, .react-select__single-value {
    font-size: 0.875rem/* 14px */ !important;
    line-height: 1.25rem/* 20px */ !important;
  }

  .react-select__menu-portal {
    z-index: 20 !important;
  }

  /* Size */
  .react-select--xs .react-select__control {
    height: 32px;
  }

  .react-select--xs .react-select__value-container {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .react-select--sm .react-select__control {
    height: 36px;
  }

  .react-select--sm .react-select__value-container {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .react-select--md .react-select__control {
    height: 40px;
  }

  .react-select--md .react-select__value-container {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .react-select--lg .react-select__control {
    height: 44px;
  }

  .react-select--lg .react-select__value-container {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .react-select--xl .react-select__control {
    height: 52px;
  }

  .react-select--xl .react-select__value-container {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  /* Status */
  .react-select--primary .react-select__control {
    border-color: #007bff !important;
  }

  .react-select--secondary .react-select__control {
    border-color: #6c757d !important;
  }

  .react-select--success .react-select__control {
    border-color: #28a745 !important;
  }

  .react-select--danger .react-select__control {
    border-color: #dc3545 !important;
  }

  .react-select--warning .react-select__control {
    border-color: #ffc107 !important;
  }

  .react-select--info .react-select__control {
    border-color: #17a2b8 !important;
  }

  .react-select--light .react-select__control {
    border-color: #eaeaea !important;
  }

  .react-select--dark .react-select__control {
    border-color: #007bff !important;
  }

  .react-select--neutral .react-select__control {
    border-color: #839198 !important;
  }

`;
