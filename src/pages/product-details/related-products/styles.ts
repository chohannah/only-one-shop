import styled from 'styled-components'
import { textStyle, media } from '../../../styles/utils'

export const StyledRelatedProducts = styled.section`
  margin-bottom: 24px;

  ${media.greaterThan('tablet')`margin-bottom: 48px;`}
`

export const StyledRelatedProductsTitle = styled.h3`
  ${textStyle('md')};
  padding: 24px 0 32px;
  font-weight: 500;

  ${media.greaterThan('tablet')`
  padding: 48px 0 64px;`}
`
