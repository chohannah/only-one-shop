import styled from 'styled-components'

import { columnFlexbox, flexbox, textStyle, media } from '../../styles/utils'

const CARD_HEIGHT = '36vw'

export const StyledCollections = styled.section<{ pathname: string }>`
  ${columnFlexbox()};
  padding: 24px 0;
  width: 100%;

  background-color: ${({ theme, pathname }) =>
    pathname === '/' ? theme.colors.warmGray[300] : theme.colors.white};

  ${media.greaterThan('tablet')`padding: 48px 0;`}
`

export const StyledCollectionsHeader = styled.header`
  ${flexbox('between', 'center')};
  margin-bottom: 32px;
  width: 100%;

  button {
    ${textStyle('xxsWide')};
    width: auto;
  }

  ${media.greaterThan('tablet')`margin-bottom: 48px; button {font-size: ${({
    theme,
  }) => theme.fontSizes.baseWide};}`}
`

export const StyledCollectionsTitle = styled.h2`
  ${textStyle('md')};
  font-weight: 500;

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.lg};`}
`

export const StyledCollectionsLinkCard = styled.article`
  ${columnFlexbox('center', 'start')};
  margin-bottom: 32px;
  width: 100%;

  //Button
  a {
    ${textStyle('xxs')};
    font-weight: 400;
  }

  ${media.greaterThan('tablet')`a {font-size: ${({ theme }) =>
    theme.fontSizes.base};}`}
`

export const StyledCollectionsLinkCardImageButton = styled.button`
  margin-bottom: 8px;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('tablet')`margin-bttom: 16px; height: ${CARD_HEIGHT};`}
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
