import styled from 'styled-components'
import {
  columnFlexbox,
  flexbox,
  lineClamp,
  textStyle,
} from '../../styles/utils'
import { UseResponsive } from '../../hooks/useResponsive'

export const StyledFeaturedMagazine = styled.section<UseResponsive>`
  padding: 24px 0;
  width: 100%;

  ${({ isTablet }) => isTablet && `padding: 48px 0;`}
`

export const StyledFeaturedMagazineCardImage = styled.div`
  ${flexbox()};
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledFeaturedMagazineTextGroup = styled.div<UseResponsive>`
  ${columnFlexbox('center', 'start')};
  padding: 40px 32px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.warmGray[200]};

  button {
    ${textStyle('xxsWide')};
  }

  ${({ isTablet, theme }) =>
    isTablet && `button {font-size: ${theme.fontSizes.baseWide}};`}
`

export const StyledFeaturedMagazineCategory = styled.h4<UseResponsive>`
  ${textStyle('xxsWide')};
  margin-bottom: 16px;
  font-weight: 400;

  ${({ isTablet, theme }) =>
    isTablet && `margin-bottom: 24px; font-size: ${theme.fontSizes.base};`}
  ${({ isDesktop, theme }) =>
    isDesktop && `margin-bottom: 24px; font-size: ${theme.fontSizes.base};`}
`
export const StyledFeaturedMagazineTitle = styled.h1<UseResponsive>`
  margin-bottom: 16px;
  span {
    ${textStyle('md')};
    font-weight: 500;
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `margin-bottom: 24px; span {font-size: ${theme.fontSizes.lg}; }`}
  ${({ isDesktop, theme }) =>
    isDesktop &&
    `margin-bottom: 24px; span {font-size: ${theme.fontSizes.lg}; }`}
`
export const StyledFeaturedMagazineDesc = styled.p<UseResponsive>`
  ${textStyle('xxsWide')};
  ${lineClamp(2)};
  margin-bottom: 16px;

  ${({ isTablet, theme }) =>
    isTablet &&
    `margin-bottom: 48px; font-size: ${theme.fontSizes.base}; -webkit-line-clamp: 3;`}
  ${({ isDesktop, theme }) =>
    isDesktop &&
    `margin-bottom: 48px; font-size: ${theme.fontSizes.base}; -webkit-line-clamp: 3;`}
`
