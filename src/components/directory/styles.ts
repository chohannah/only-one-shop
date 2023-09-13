import styled from 'styled-components'

import { UseResponsive } from '../../hooks/useResponsive'

import { flexbox } from '../../styles/utils'
import { textStyle } from '../../styles/utils'

export const StyledDirectory = styled.section<UseResponsive>`
  padding: 48px 0;
  background-color: ${({ theme }) => theme.colors.warmGray[200]};

  ${({ isTablet }) => isTablet && `padding: 112px 0;`}
  ${({ isDesktop }) => isDesktop && `padding: 112px 0;`};
`

export const StyledDirectoryTitle = styled.h2<UseResponsive>`
  ${flexbox()};
  flex-grow: 1;
  padding: 0 38px;
  margin-bottom: 48px;

  span {
    ${textStyle('base')};
    font-weight: 500;
    text-align: center;
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `padding: 16px 38px; 
    margin-bottom: 96px; 

    span {
        font-size: ${theme.fontSizes.md}`}

  ${({ isDesktop, theme }) =>
    isDesktop &&
    `padding: 16px 38px; 
    margin-bottom: 96px; 

    span {
        font-size: ${theme.fontSizes.lg}`}
`
