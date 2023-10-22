import styled from 'styled-components'

import { flexbox, media, textStyle } from '../../styles/utils'

export const StyledCategory = styled.section`
  padding: 48px 0;

  ${media.greaterThan('tablet')`padding: 64px 0;`}
`

export const StyledCategoryHeader = styled.div`
  ${flexbox('between', 'center')};
  margin-bottom: 32px;
  width: 100%;

  .category-header-button {
    ${textStyle('xxsWide')};
    width: auto;
  }

  ${media.greaterThan(
    'tablet'
  )`margin-bottom: 48px; .category-header-button {font-size: ${({ theme }) =>
    theme.fontSizes.baseWide}};}`}
`

export const StyledCategoryTitle = styled.h3`
  ${textStyle('md')};
  font-weight: 500;

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.lg};`}
`
