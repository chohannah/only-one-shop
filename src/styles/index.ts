import { DefaultTheme } from 'styled-components'

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
}

const fontFamily = {
  main: 'Poppins, sans-serif',
}

const fontSizes = {
  xxs: '13px',
  xxsWide: '13px',
  xs: '14px',
  base: '17px',
  baseWide: '17px',
  sm: '20px',
  md: '25px',
  lg: '31px',
  xl: '43px',
}

const lineHeights = {
  xxs: 1.5,
  xxsWide: 1.5,
  xs: 1.5,
  base: 1.5,
  baseWide: 1.5,
  sm: 1.5,
  md: 1.5,
  lg: 1.2,
  xl: 1.2,
  xxl: 1.2,
}

const letterSpacings = {
  xxs: 'normal',
  xxsWide: '1px',
  xs: 'normal',
  base: 'normal',
  baseWide: '1px',
  sm: 'normal',
  md: 'normal',
  lg: 'normal',
  xl: 'normal',
  xxl: 'normal',
}

const colors = {
  bodyText: '#212529',
  productText: '#303030',
  white: '#fff',
  black: '#000',
  red: '#DC4231',
  coolGray: {
    100: '#fafafa',
    200: '#efefef',
    300: '#e4e4e4',
    400: '#dadada',
    500: '#cfcfcf',
    600: '#8f8f8f',
    700: '#5a5a5a',
    800: '#454545',
    900: '#2c2c2c',
  },
  warmGray: {
    100: '#f7f7f7',
    200: '#fbfaf9',
    300: '#f2f0ec',
    400: '#eae6df',
  },
}

const levels = {
  gnb: 10,
  menuToggle: 50,
  sidebarModal: 50,
}

const gutter = '8px'

export const theme: DefaultTheme = {
  breakpoints,
  fontFamily,
  fontSizes,
  lineHeights,
  letterSpacings,
  colors,
  levels,
  gutter,
}
