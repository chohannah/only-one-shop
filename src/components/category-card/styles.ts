import styled from 'styled-components'

import { columnFlexbox, textStyle, media } from '../../styles/utils'

export const StyledCategoryCard = styled.article`
  ${columnFlexbox()};
  width: 100%;

  .category-card-button {
    ${textStyle('xxs')};
    font-weight: 400;
  }

  ${media.greaterThan(
    'tablet'
  )`align-items: flex-start;.category-card-button{font-size: ${({ theme }) =>
    theme.fontSizes.base};`}
`

export const StyledCategoryCardImageButton = styled.button`
  margin-bottom: 24px;
  width: 100%;
  height: 64vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('tablet')`height: auto;`}
`
