import styled from 'styled-components'

import { media } from '../../styles/utils'

import type { ContainerProps } from './container'
import type { ColumnProps } from './column'
import type { RowProps } from './row'

export const DEFAULT_CONTAINER_GUTTER = `4px`
export const MAX_WIDTH_TABLET = '960px'
export const MAX_WIDTH_DESKTOP = '1152px'

export const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  padding: 0 ${DEFAULT_CONTAINER_GUTTER};
  margin: 0 auto;

  ${media.greaterThan('tablet')`
    max-width: ${MAX_WIDTH_TABLET};
    padding: 0 40px;
  `}

  ${media.greaterThan('desktop')`
    max-width: ${MAX_WIDTH_DESKTOP};
    padding: 0;
  `}
`

export const StyledColumn = styled.div<ColumnProps>`
  width: ${({ sm }) => `${(100 / 4) * sm}%`};
  padding: 0 ${({ theme }) => theme.gutter};

  ${({ md }) =>
    md &&
    media.greaterThan('tablet')`
    width: ${(100 / 12) * md}%;
  `}

  ${({ lg }) =>
    lg &&
    media.greaterThan('desktop')`
    width: ${(100 / 12) * lg}%;
  `}
`

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
`
