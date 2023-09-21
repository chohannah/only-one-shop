import styled from 'styled-components'

import { flexbox, textStyle, media } from '../../styles/utils'

export const StyledDirectory = styled.section`
  padding: 48px 0;
  background-color: ${({ theme }) => theme.colors.warmGray[200]};

  ${media.greaterThan('tablet')`padding: 112px 0;`}
`

export const StyledDirectoryTitle = styled.h2`
  ${flexbox()};
  flex-grow: 1;
  padding: 0 38px;
  margin-bottom: 48px;

  span {
    ${textStyle('base')};
    font-weight: 500;
    text-align: center;
  }

  ${media.greaterThan('tablet')`padding: 16px 38px; 
    margin-bottom: 96px; 

    span {
        font-size: ${({ theme }) => theme.fontSizes.md};`}

  ${media.greaterThan('desktop')`span {font-size: ${({ theme }) =>
    theme.fontSizes.lg}};`}
`
