import styled from 'styled-components'

import { columnFlexbox, flexbox, textStyle, media } from '../../styles/utils'

export const StyledProductsHeader = styled.div`
  ${columnFlexbox('between', 'start')};
  position: relative;
  padding: 24px calc(${({ theme }) => theme.gutter} + 8px);
  background-color: ${({ theme }) => theme.colors.warmGray[100]};
`

export const StyledProductsHeaderCategory = styled.h3`
  a {
    ${textStyle('xxs')};
    margin: 0 8px 48px 0;
    font-weight: 300;
  }
`

export const StyledProductsHeaderTitle = styled.h1`
  ${textStyle('md')};
  margin: 48px 0 24px 0;
  width: 100%;
  font-weight: 500;
`

export const StyledProductsLogo = styled.div`
  ${flexbox()};
  position: absolute;
  top: 21px;
  right: -43px;
  width: 120px;
  height: 120px;
  z-index: 10;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('desktop')`
  top: 37px;
  right: 17px;`}
`
