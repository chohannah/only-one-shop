import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  positionCenter,
  textStyle,
} from '../../styles/utils'

export const GNB_HEIGHT = `45px`

// gnb
export const StyledGnb = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.levels.gnb};
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
  padding: 2px;

  svg {
    ${flexbox()}
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    overflow: hidden;
    object-fit: cover;
  }

  .signout-text,
  .login-text {
    ${textStyle('xxs')};
    font-weight: 400;
    margin-left: 4px;
  }
`
// GnbNav
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
