import { createGlobalStyle } from "styled-components";

import { fontFamily, fontSize, fontWeight, lineHeight } from "./variables";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#react-root {
  height: 100%;
}
a {
  color: ${theme.theme};
}
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${theme.fg1};
  font-size: ${fontSize.m}px;
  font-family: ${fontFamily.sansSerif};
  font-feature-settings: 'palt';
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.body};
  background-color: ${theme.bg1};
  overflow-y: scroll;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-size: ${fontSize.m}px;
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: ${fontWeight.bold};
}

::selection {
  color: #ffffff;
  background-color: ${theme.theme};
}

::-webkit-scrollbar {
  width: 18px;
  height: 18px;
}
::-webkit-scrollbar-track {
  background-color: ${theme.bg1};
}
::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: ${theme.bg3};
  border-radius: 9px;
}
/* react-medium-image-zoom */
[data-rmiz-wrap='visible'],
[data-rmiz-wrap='hidden'] {
  position: relative;
  display: inline-flex;
  align-items: flex-start;
}
[data-rmiz-wrap='hidden'] {
  visibility: hidden;
}
[data-rmiz-overlay] {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition-property: background-color;
}
[data-rmiz-btn-open],
[data-rmiz-btn-close] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* reset styles */
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  font: inherit;
  color: inherit;
  background: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
[data-rmiz-btn-open] {
  cursor: zoom-in;
}
[data-rmiz-btn-close] {
  cursor: zoom-out;
}
[data-rmiz-modal-content] {
  position: absolute;
  transition-property: transform;
  transform-origin: center center;
}
`;