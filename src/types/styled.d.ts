import 'styled-components'

declare module 'styled-components' {
  export type TypographyScales =
    | 'xxs'
    | 'xxsWide'
    | 'xs'
    | 'base'
    | 'baseWide'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

  export interface DefaultTheme {
    breakpoints: {
      tablet: string
      desktop: string
    }

    fontFamily: {
      main: string
    }

    fontSizes: {
      xxs: string
      xxsWide: string
      xs: string
      base: string
      baseWide: string
      sm: string
      md: string
      lg: string
      xl: string
    }

    lineHeights: {
      xxs: number
      xxsWide: number
      xs: number
      base: number
      baseWide: number
      sm: number
      md: number
      lg: number
      xl: number
    }

    letterSpacings: {
      xxs: string
      xxsWide: string
      xs: string
      base: string
      baseWide: string
      sm: string
      md: string
      lg: string
      xl: string
    }

    colors: {
      bodyText: string
      productText: string
      white: string
      black: string
      red: string
      coolGray: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        900: string
      }
      warmGray: {
        100: string
        200: string
        300: string
        400: string
      }
    }

    levels: {
      gnb: number
      menuToggle: number
      sidebarModal: number
    }

    gutter: string
  }
}
