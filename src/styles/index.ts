import { DefaultTheme } from "styled-components";

const breakpoints = {
  tablet: "768px",
  desktop: "1200px",
};

const fontFamily = {
  main: "Poppins, sans-serif",
};

const fontSizes = {
  xxs: "13px",
  xs: "14px",
  base: "17px",
  sm: "20px",
  md: "25px",
  lg: "31px",
  xlg: "43px",
};

const lineHeights = {
  base: 1.2,
  sm: 1.5,
};

export const theme: DefaultTheme = {
  breakpoints,
  fontFamily,
  fontSizes,
  lineHeights,
};
