import styled from 'styled-components'

import { columnFlexbox, flexbox, textStyle, media } from '../../styles/utils'

import { GNB_HEIGHT } from '../../components/gnb/styles'

export const StyledNotFound = styled.section`
  ${columnFlexbox()};
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.coolGray[200]};

  a {
    width: 100%;
  }
`

export const StyledNotFoundImage = styled.div`
  ${flexbox()};
  margin-bottom: 24px;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledNotFoundTitle = styled.h1`
  ${flexbox()};

  span {
    ${textStyle('base')};
    margin-bottom: 24px;
    font-weight: 500;
    text-align: center;
  }

  ${media.greaterThan('tablet')`span { font-size: ${({ theme }) =>
    theme.fontSizes.md}};`}
`

export const StyledNotFoundLogo = styled.div`
  ${flexbox()};
  position: absolute;
  top: calc(${GNB_HEIGHT} + 12px);
  right: -52px;
  width: 135px;
  height: 135px;
  z-index: ${({ theme }) => theme.levels.logoCircle};

  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('tablet')`top: calc(${GNB_HEIGHT} + 80px); right: -15px;`}
`
