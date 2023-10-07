import styled from 'styled-components'
import { GNB_HEIGHT } from '../../components/gnb/styles'
import { columnFlexbox, flexbox, textStyle, media } from '../../styles/utils'
import { DEFAULT_CONTAINER_GUTTER } from '../../components/grid/styles'

export const StyledShipping = styled.main`
  ${columnFlexbox()};
  position: relative;
  margin-top: ${GNB_HEIGHT};

  ${media.greaterThan('tablet')`
  flex-direction: row;
  align-items: flex-start;
  `}
`

export const StyledShippingTextGroup = styled.div`
  padding: 24px calc(${DEFAULT_CONTAINER_GUTTER}* 4) 108px
    calc(${DEFAULT_CONTAINER_GUTTER}* 4);
  width: 100%;
  background-color: ${({ theme }) => theme.colors.coolGray[100]};

  ${media.greaterThan('tablet')`width: 128vw; 
    padding-left: calc(${DEFAULT_CONTAINER_GUTTER}* 12); padding-bottom: 132px;`}
  ${media.greaterThan(
    'desktop'
  )`padding: 48px calc(${DEFAULT_CONTAINER_GUTTER} * 8) 156px calc(${DEFAULT_CONTAINER_GUTTER} * 8);`}
`

export const StyledShippingTitle = styled.h2`
  ${textStyle('md')};
  margin: 48px 0 16px;
  font-weight: 500;
`

export const StyledShippingSubtitle = styled.h3`
  ${textStyle('sm')};
  margin-bottom: 16px;
  font-weight: 500;
`

export const StyledShippingText = styled.p`
  ${textStyle('base')}
  margin-bottom: 24px;

  &.first-paragraph {
    margin: 24px 0 48px;
  }
`

export const StyledShippingTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    border-bottom: 2px solid ${({ theme }) => theme.colors.coolGray[400]};

    tr {
      th {
        ${textStyle('xs')};
        font-weight: 600;
        padding: 12px;

        &:first-child {
          width: 60%;
          text-align: left;
        }

        &:nth-child(2) {
          width: 108px;
          text-align: center;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.coolGray[400]};

      td {
        ${textStyle('xs')};
        padding: 12px;

        &:nth-child(2) {
          text-align: center;
        }

        &:last-child {
          text-align: right;
        }
      }
    }
  }
`

export const StyledShippingImage = styled.div`
  ${flexbox()};
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('tablet')`position: sticky; top: ${GNB_HEIGHT};`}
`
