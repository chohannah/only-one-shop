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

const letterSpacings = {
  base: "normal",
  sm: "1px",
};

const colors = {
  bodyText: "#212529",
  productText: "#303030",
  white: "#fff",
  black: "#000",
  red: "#DC4231",
  coolGray: {
    100: "#fafafa",
    200: "#efefef",
    300: "#e4e4e4",
    400: "#dadada",
    500: "#cfcfcf",
    600: "#8f8f8f",
    700: "#5a5a5a",
    800: "#454545",
    900: "#2c2c2c",
  },
  warmGray: {
    100: "#f7f7f7",
    200: "#fbfaf9",
    300: "#f2f0ec",
    400: "#eae6df",
  },
};

export const theme: DefaultTheme = {
  breakpoints,
  fontFamily,
  fontSizes,
  lineHeights,
  letterSpacings,
  colors,
};
