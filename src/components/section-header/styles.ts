import styled from 'styled-components'
import { UseResponsive } from '../../hooks/useResponsive'

import { flexbox } from '../../styles/utils'
import { textStyle } from '../../styles/utils'

export const StyledSectionHeader = styled.header<UseResponsive>`
  ${flexbox('between', 'center')};
  margin-bottom: 32px;
  width: 100%;

  button {
    ${textStyle('xxsWide')};
    width: auto;
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `margin-bottom: 48px; button {font-size: ${theme.fontSizes.baseWide}};`}
  ${({ isDesktop, theme }) =>
    isDesktop &&
    `margin-bottom: 48px; button {font-size: ${theme.fontSizes.baseWide}};`}
`

export const StyledSectionTitle = styled.h2<UseResponsive>`
  ${textStyle('md')};
  font-weight: 500;

  ${({ isTablet, theme }) => isTablet && `font-size: ${theme.fontSizes.lg};`}
  ${({ isDesktop, theme }) => isDesktop && `font-size: ${theme.fontSizes.lg};`}
`
