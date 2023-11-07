import styled from 'styled-components'

import { GNB_HEIGHT } from '../../components/gnb/styles'
import { columnFlexbox, textStyle, flexbox } from '../../styles/utils'
import { defaultEasing } from '../../styles/utils/animations'

export const StyledCart = styled.main`
  margin-top: ${GNB_HEIGHT};
  padding: 48px 0;
`

export const StyledCartHeader = styled.header`
  .link-to-products {
    ${textStyle('xxs')};
    margin-bottom: 24px;
  }
`
export const StyledCartHeaderTitle = styled.h2`
  ${textStyle('md')};
  margin-bottom: 8px;
  font-weight: 500;
`

export const StyledCartEmpty = styled.div`
  ${columnFlexbox()};
  width: 100%;
  height: 80vh;

  .link-to-products {
    width: 100%;
  }
`
export const StyledCartEmptyTitle = styled.h2`
  ${textStyle('md')};
  margin-bottom: 24px;
  font-weight: 500;
`

export const StyledCartContent = styled.section`
  padding: 24px 4px;
  width: 100%;
`

export const StyledCartFooter = styled.footer`
  ${columnFlexbox()};

  .link-to-payment {
    margin: 0 8px 16px;
    width: 100%;
  }
`

export const StyledCartFooterTotal = styled.div`
  ${flexbox('between', 'center')};
  padding: 24px 16px 0;
  width: 100%;
`
export const StyledCartFooterTotalTitle = styled.h5`
  ${textStyle('xs')};
  color: ${({ theme }) => theme.colors.coolGray[700]};
`
export const StyledCartFooterTotalPrice = styled.strong`
  ${textStyle('base')};
  font-weight: 600;
`

export const StyledCartFooterText = styled.p`
  ${textStyle('xxs')};
  padding: 48px 16px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.coolGray[700]};

  .link-to-shipping {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      opacity: 0.6;
      background-color: ${({ theme }) => theme.colors.coolGray[900]};
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.7s ${defaultEasing} 0.2s;
    }

    &:hover {
      &::after {
        transform: scaleX(0);
        transform-origin: right;
      }
    }
  }
`
