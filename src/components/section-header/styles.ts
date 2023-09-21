import styled from 'styled-components'

import { flexbox, textStyle, media } from '../../styles/utils'

export const StyledSectionHeader = styled.header`
  ${flexbox('between', 'center')};
  margin-bottom: 32px;
  width: 100%;

  button {
    ${textStyle('xxsWide')};
    width: auto;
  }

  ${media.greaterThan('tablet')`margin-bottom: 48px; button {font-size: ${({
    theme,
  }) => theme.fontSizes.baseWide}};`}
`

export const StyledSectionTitle = styled.h2`
  ${textStyle('md')};
  font-weight: 500;

  ${media.greaterThan('tablet')`font-size: ${({ theme }) =>
    theme.fontSizes.lg};`}
`
