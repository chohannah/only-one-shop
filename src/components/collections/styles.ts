import styled from 'styled-components'

import { UseResponsive } from './../../hooks/useResponsive'

import { columnFlexbox, flexbox, textStyle } from '../../styles/utils'

interface StyledCollectionsProps extends UseResponsive {
  pathname: string
}

const CARD_HEIGHT = '36vw'

export const StyledCollections = styled.section<StyledCollectionsProps>`
  ${columnFlexbox()};
  padding: 24px 0;
  width: 100%;

  background-color: ${({ theme, pathname }) =>
    pathname === '/' ? theme.colors.warmGray[300] : theme.colors.white};

  ${({ isTablet }) => isTablet && `padding: 48px 0`};
  ${({ isDesktop }) => isDesktop && `padding: 48px 0`};
`

export const StyledCollectionsHeader = styled.header<UseResponsive>`
  ${flexbox('between', 'center')};
  margin-bottom: 32px;
  width: 100%;

  button {
    ${textStyle('xxsWide')};
    width: auto;
    font-weight: 400;
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `margin-bottom: 48px; button {font-size: ${theme.fontSizes.baseWide}};`}
  ${({ isDesktop, theme }) =>
    isDesktop &&
    `margin-bottom: 48px; button {font-size: ${theme.fontSizes.baseWide}};`}
`

export const StyledCollectionsTitle = styled.h2<UseResponsive>`
  ${textStyle('md')};
  font-weight: 500;

  ${({ isTablet, theme }) => isTablet && `font-size: ${theme.fontSizes.lg};`}
  ${({ isDesktop, theme }) => isDesktop && `font-size: ${theme.fontSizes.lg};`}
`

export const StyledCollectionsLinkCard = styled.article<UseResponsive>`
  ${columnFlexbox('center', 'start')};
  margin-bottom: 32px;
  width: 100%;

  //Button
  a {
    ${textStyle('xxs')};
    font-weight: 400;
  }

  ${({ isTablet, theme }) =>
    isTablet && `a {font-size: ${theme.fontSizes.base};}`}
  ${({ isDesktop, theme }) =>
    isDesktop && `a {font-size: ${theme.fontSizes.base};}`}
`

export const StyledCollectionsLinkCardImageButton = styled.button<UseResponsive>`
  margin-bottom: 8px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isTablet }) =>
    isTablet && `margin-bottom: 16px; height: ${CARD_HEIGHT};`}
  ${({ isDesktop }) =>
    isDesktop && `margin-bottom: 16px; height: ${CARD_HEIGHT};`}
`

export const StyledCollectionsQuoteCard = styled.article`
  ${columnFlexbox('between', 'center')};
  margin-bottom: 16px;
  padding: 24px 0;
  width: 100%;
  height: ${CARD_HEIGHT};
  background-color: ${({ theme }) => theme.colors.white};

  //LogoLetter
  svg {
    width: 100%;
  }

  // Button
  a {
    ${textStyle('base')};
    width: fit-content;
    font-weight: 400;
  }
`

export const StyledCollectionsQuoteCardTitle = styled.h3`
  margin-bottom: 8px;

  span {
    ${textStyle('md')};
    font-weight: 500;
    text-align: center;
  }
`
