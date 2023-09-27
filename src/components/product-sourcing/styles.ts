import styled from 'styled-components'

import { flexbox, textStyle, media, columnFlexbox } from '../../styles/utils'
import { defaultEasing } from '../../styles/utils/animations'

export const StyledSourcing = styled.section`
  margin: 24px 4px;

  ${media.greaterThan('tablet')`margin: 48px 0;`}
`

export const StyledSourcingWrapper = styled.div`
  ${columnFlexbox('start', 'between')};
  padding: 16px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.warmGray[400]};

  ${media.greaterThan('tablet')`padding: 24px;`}
  ${media.greaterThan(
    'desktop'
  )`flex-direction: row; justify-content: space-between; align-items: center; padding: 48px;`}
`

export const StyledSourcingLeft = styled.div`
  ${flexbox('between', 'center')};
  margin-bottom: 24px;

  ${media.greaterThan('tablet')`justify-content: flex-start;`}
`

export const StyledSourcingImage = styled.div`
  ${flexbox()};
  width: 128px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.greaterThan('tablet')`width: 232px; margin-right: 24px;`}
  ${media.greaterThan('desktop')`width: 280px; margin-right: 56px;`}
`

export const StyledSourcingBraunLogo = styled.div`
  width: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledSourcingRight = styled.div`
  ${media.greaterThan('desktop')`width: 270px;`}
`

export const StyledSourcingTitle = styled.h1`
  span {
    ${textStyle('md')};
    margin-bottom: 48px;
    font-weight: 500;
  }

  ${media.greaterThan('tablet')`span {margin-bottom: 24px;}`}
`

export const StyledSourcingButton = styled.div`
  ${flexbox('start', 'center')};

  a {
    ${textStyle('xxs')};
    margin-right: 8px;
  }

  svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    transition: transform 200ms ${defaultEasing};
  }

  &:hover {
    svg {
      transform: translateX(8px);
    }
  }

  ${media.greaterThan('tablet')`a {
    font-size: 17px;
  }`}
`
