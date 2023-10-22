import styled from 'styled-components'

import { media, textStyle } from '../../styles/utils'

export const StyledCategory = styled.section`
  padding: 48px 0;

  ${media.greaterThan('tablet')`padding: 64px 0;`}
`

export const StyledCategoryTitle = styled.h3`
  ${textStyle('md')};
  font-weight: 500;
  margin-bottom: 32px;

  ${media.greaterThan('tablet')`margin-bottom: 48px;font-size: ${({ theme }) =>
    theme.fontSizes.lg};`}
`
