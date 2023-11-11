import styled from 'styled-components'

import { defaultEasing } from '../../styles/utils/animations'
import { truncate } from '../../styles/utils'

import {
  columnFlexbox,
  flexbox,
  inlineFlexbox,
  positionCenter,
  textStyle,
} from '../../styles/utils'

export const GNB_HEIGHT = `45px`
export const GNB_MARGIN_BOTTOM = `24px`

// Gnb
export const StyledGnb = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${GNB_HEIGHT};
  z-index: ${({ theme }) => theme.levels.gnb};
  transition: background-color 250ms ${defaultEasing};
  background-color: ${({ theme }) => theme.colors.white};

  .gnb-wrapper {
    ${flexbox('between')};
    position: relative;
    width: 100%;
    height: ${GNB_HEIGHT};

    .gnb-right {
      ${flexbox()};
      position: relative;
    }
  }

  .logo {
    ${positionCenter()};
    ${flexbox()};
    transition: display 560ms ${defaultEasing};

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
  ${flexbox()};
  padding: 4px;

  // SignOutIcon & LogInIcon
  svg {
    ${flexbox()};
    flex-grow: 0;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    overflow: hidden;
    object-fit: cover;
    color: ${({ theme }) => theme.colors.coolGray[800]};
  }

  .signout-text-sm,
  .login-text-sm {
    ${textStyle('md')};
    margin-left: 8px;
    font-weight: 500;
    text-align: left;
    color: ${({ theme }) => theme.colors.coolGray[700]};
  }

  .signout-text-lg,
  .login-text-lg {
    ${textStyle('xxs')};
    margin-left: 4px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.coolGray[800]};
  }
`
// GnbNav
export const StyledGnbNav = styled.nav`
  ${inlineFlexbox('start', 'center')};
`

export const StyledGnbNavMenuList = styled.ul`
  ${inlineFlexbox('start', 'center')};
`

export const StyledGnbNavMenuListItem = styled.li<{ isActive: boolean }>`
  .item-button {
    ${textStyle('xxs')};
    position: relative;
    padding: 4px;
    z-index: ${({ theme }) => theme.levels.sidebarMenuToggle};
    font-weight: 400;
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.black : theme.colors.coolGray[700]};

    &:first-child {
      margin-right: 24px;
    }
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
  top: 0;
  left: 0;
  padding-top: calc(${GNB_HEIGHT} + ${GNB_MARGIN_BOTTOM});
  width: 100%;
  height: 100vh;
  z-index: ${({ theme }) => theme.levels.sidebarModal};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-100vh)'};
  transition: all 200ms ${defaultEasing};

  .main-nav,
  .sub-nav,
  .circle-logo {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition-property: 'opacity';
    transition-duration: ${({ isOpen }) => (isOpen ? '250ms' : '25ms')};
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
  bottom: 8%;
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

// GnbNavDropdown

export const StyledGnbNavDropdown = styled.section`
  ${flexbox('start', 'start')};
  position: fixed;
  top: 0;
  left: 0;
  padding: calc(${GNB_HEIGHT} + 54px) 32px 54px;
  width: 100%;
  height: 475px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 2000ms ${defaultEasing};
`
export const StyledGnbNavDropdownNav = styled.nav`
  ${flexbox('start', 'start')};
`

export const StyledGnbNavDropdownNavList = styled.ul`
  ${columnFlexbox('start', 'start')};
  padding: 8px 16px;
  margin-right: 32px;
`

export const StyledGnbNavDropdownNavListItem = styled.li`
  color: ${({ theme }) => theme.colors.coolGray[900]};
  margin-bottom: 8px;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }

  a {
    ${textStyle('base')};
    font-weight: 400;

    &:first-child {
      margin-right: 0;
    }
  }
  }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledGnbNavDropdownNavThumbnail = styled.div`
  width: 24vw;
  margin-right: 32px;
  padding: 0 32px 0 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.coolGray[300]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledGnbNavDropdownLinkCardGroup = styled.section`
  ${flexbox()};
  gap: 16px;
`

export const StyledGnbNavDropdownLinkCard = styled.article`
  width: 24vw;
  overflow: hidden;

  // link button
  a:last-child {
    max-width: 100%;
    ${truncate()};
  }
`

export const StyledGnbNavDropdownLinkCardImage = styled.button`
  ${flexbox()};
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
