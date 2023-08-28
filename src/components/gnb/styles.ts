import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  positionCenter,
  textStyle,
} from '../../styles/utils'

export const GNB_HEIGHT = `45px`
export const GNB_MARGIN_BOTTOM = `24px`

// Gnb
export const StyledGnb = styled.header`
  position: sticky;
  top: 0;
  margin-bottom: ${GNB_MARGIN_BOTTOM};
  width: 100%;
  height: ${GNB_HEIGHT};
  z-index: ${({ theme }) => theme.levels.gnb};
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
    width: 24px;
    height: 24px;
    overflow: hidden;
    object-fit: cover;
  }

  .signout-text-sm,
  .login-text-sm {
    ${textStyle('md')};
    margin-left: 8px;
    font-weight: 500;
    text-align: left;
  }

  .signout-text-lg,
  .login-text-lg {
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

// GnbSidebar
interface StyledGnbSidebarDetailsProps {
  isOpen: boolean
}

export const StyledGnbSidebar = styled.aside`
  position: relative;
  z-index: ${({ theme }) => theme.levels.sidebarModal};
`

export const StyledGnbSidebarIconButton = styled.button`
  ${flexbox()}
  position: relative;
  padding: 2px;
  width: 24px;
  height: 24px;
  z-index: ${({ theme }) => theme.levels.sidebarMenuToggle};

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 1.5px;
    background-color: black;
    transition: all 200ms ease-in-out;
  }

  &::before {
    top: 5px;
  }

  &::after {
    top: 17px;
  }

  .menu-icon {
    position: absolute;
    top: 11px;
    width: 18px;
    height: 1.5px;
    background-color: black;
    transition: all 200ms ease-in-out;
  }

  &.sidebar-active {
    &::before,
    &::after {
      transitoin: all 200ms ease-in-out;
    }

    &::before {
      top: 12px;
      transform: rotate(45deg);
    }

    &::after {
      top: 12px;
      transform: rotate(-45deg);
    }

    .menu-icon {
      display: none;
      transition: all 200ms ease-in-out;
    }
  }
`

export const StyledGnbSidebarDetails = styled.aside<StyledGnbSidebarDetailsProps>`
  position: fixed;
  left: 0;
  padding-top: calc(${GNB_HEIGHT} + ${GNB_MARGIN_BOTTOM});
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.levels.sidebarModal};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100vh)'};
  transition: all 200ms cubic-bezier(0.19, 1, 0.22, 1);

  .main-nav,
  .sub-nav,
  .circle-logo {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition-property: 'opacity';
    transition-duration: ${({ isOpen }) => (isOpen ? '250ms' : '25ms')};
    /* transition-timing-function: 'cubic-bezier(0.19, 1, 0.22, 1)'; */
    transition-timing-function: ${({ isOpen }) =>
      isOpen ? 'ease-in' : 'ease-out'};
  }

  .main-nav {
    transition-delay: ${({ isOpen }) => (isOpen ? '200ms' : '0')};
  }

  .sub-nav {
    transition-delay: ${({ isOpen }) => (isOpen ? '320ms' : '0')};
  }

  .circle-logo {
    transition-delay: ${({ isOpen }) => (isOpen ? '600ms' : '0')};
  }
`

export const StyledMainNav = styled.nav``

export const StyledMainNavList = styled.ul`
  margin-bottom: 48px;
`

export const StyledMainNavListItem = styled.li`
  ${flexbox('start', 'center')};
  ${textStyle('md')};
  margin-bottom: 16px;
  padding: 4px;
  font-weight: 500;
  text-align: left;

  //auth-control-button
  .login,
  .signout {
    margin-left: -7px;
  }
`

export const StyledSubNav = styled.div`
  margin-bottom: 24px;
`

export const StyledSubNavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
`

export const StyledSubNavListItem = styled.li`
  ${flexbox('start', 'center')}
`

export const StyledSubNavSocialIconGroup = styled.div`
  ${flexbox('space', 'center')};
  position: relative;
  margin-left: -6px;
  height: 30px;
`

export const StyledSidebarLogo = styled.div`
  ${flexbox()};
  position: absolute;
  right: -32px;
  bottom: 20%;
  width: 120px;
  height: 120px;
  z-index: 10;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
