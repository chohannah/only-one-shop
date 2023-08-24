import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  positionCenter,
  textStyle,
} from '../../styles/utils'

export const GNB_HEIGHT = `45px`

export const StyledGnb = styled.header`
  width: 100%;
  height: ${GNB_HEIGHT};
  background-color: ${({ theme }) => theme.colors.white};

  .gnb-wrapper {
    ${flexbox('between')};
    position: relative;
    width: 100%;
    height: ${GNB_HEIGHT};

    .gnb-right {
      ${flexbox()}
    }
  }

  .logo {
    ${positionCenter()}

    a {
      display: block;
    }

    svg {
      display: block;
      width: auto;
      height: 18px;
    }
  }
`

export const StyledGnbIconButton = styled.button`
  ${flexbox()}
  padding: 4px;

  svg {
    ${flexbox()}
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    overflow: hidden;
    object-fit: cover;
  }

  span {
    ${textStyle('xxs')};
    font-weight: 400;
    margin-left: 4px;
  }
`

export const StyledGnbNav = styled.nav`
  ${inlineFlexbox('start', 'center')}
`

export const StyledGnbNavMenuList = styled.ul`
  ${inlineFlexbox('start', 'center')}
`

export const StyledGnbNavMenuListItem = styled.li`
  li:first-child {
    margin-right: 24px;
  }

  a {
    ${textStyle('xxs')}
    padding: 4px;
    font-weight: 400;
  }
`
