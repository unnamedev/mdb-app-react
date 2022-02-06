import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  ol,
  ul {
    list-style: none;
  }

  p {
    -webkit-hyphens: auto;
    -webkit-hyphenate-limit-before: 3;
    -webkit-hyphenate-limit-after: 3;
    -webkit-hyphenate-limit-chars: 6 3 3;
    -webkit-hyphenate-limit-lines: 2;
    -webkit-hyphenate-limit-last: always;
    -webkit-hyphenate-limit-zone: 8%;
    -moz-hyphens: auto;
    -moz-hyphenate-limit-chars: 6 3 3;
    -moz-hyphenate-limit-lines: 2;
    -moz-hyphenate-limit-last: always;
    -moz-hyphenate-limit-zone: 8%;
    -ms-hyphens: auto;
    -ms-hyphenate-limit-chars: 6 3 3;
    -ms-hyphenate-limit-lines: 2;
    -ms-hyphenate-limit-last: always;
    -ms-hyphenate-limit-zone: 8%;
    hyphens: auto;
    hyphenate-limit-chars: 6 3 3;
    hyphenate-limit-lines: 2;
    hyphenate-limit-last: always;
    hyphenate-limit-zone: 8%;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0;
  }

  textarea {
    white-space: revert;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html,
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  .visually-hidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  
  :root {
    --max-width: 1280px;
    --light-grey: #eee;
    --med-grey: #353535;
    --dark-grey: #1c1c1c;
    --font-xl: 2.5rem;
    --font-lg: 1.5rem;
    --font-md: 1.2rem;
    --font-sm: 1rem;
    --base-font-family: "Barlow", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
  }

  body {
    font-weight: 400;
    font-family: var(--base-font-family);
    font-size: var(--font-sm);
  }
  
  // Typography
  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
  }
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  p {
    font-size: var(--font-sm);
    color: #fff;
  }
`