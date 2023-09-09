import styled from 'styled-components'

import { columnFlexbox, textStyle } from '../../styles/utils'

import { UseResponsive } from '../../hooks/useResponsive'

export const StyledCategoryCard = styled.article<UseResponsive>`
  ${columnFlexbox()};
  width: 100%;

  .category-card-button {
    ${textStyle('xxs')};
    font-weight: 400;
  }

  ${({ isTablet, theme }) =>
    isTablet &&
    `align-items: flex-start; .category-card-button{font-size: ${theme.fontSizes.base}};`}
  ${({ isDesktop, theme }) =>
    isDesktop &&
    `align-items: flex-start; .category-card-button{font-size: ${theme.fontSizes.base}};`}
`

export const StyledCategoryCardImageButton = styled.button<UseResponsive>`
  width: 100%;
  height: 64vw;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ isTablet }) => isTablet && `height: auto;`}
  ${({ isDesktop }) => isDesktop && `height: auto;`}
`
