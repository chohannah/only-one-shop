import { useState } from 'react'
import clsx from 'clsx'

import { navMap } from '../nav-map'
import { useResponsive } from '../../hooks/useResponsive'

import {
  StyledGnbNav,
  StyledGnbNavMenuList,
  StyledGnbNavMenuListItem,
} from './styles'

import { NavDropdown } from './nav-dropdown'

export const GnbNav = () => {
  const menuList = Object.keys(navMap.mainMenuName)
  const [openDropdownFor, setOpenDropdownFor] = useState<string | null>(null)
  const { isDesktop } = useResponsive()

  const handleMouseEnter = (menuItem: string) => {
    setOpenDropdownFor(menuItem)
  }

  const handleMouseLeave = () => {
    setOpenDropdownFor(null)
  }

  return (
    <StyledGnbNav className={clsx('gnb-nav')}>
      <h2 className="visually-hidden">menu</h2>

      <StyledGnbNavMenuList>
        {menuList.map((menuItem) => {
          const isActive = openDropdownFor === menuItem

          return (
            <StyledGnbNavMenuListItem
              key={menuItem}
              onMouseEnter={() => handleMouseEnter(menuItem)}
              onMouseLeave={handleMouseLeave}
              isActive={isActive}
            >
              {isDesktop ? (
                <button className="item-button">
                  {menuItem.toUpperCase()}
                </button>
              ) : null}

              {isActive && (
                <NavDropdown
                  menuItem={menuItem as keyof typeof navMap.navMenu}
                  isActive={isActive}
                />
              )}
            </StyledGnbNavMenuListItem>
          )
        })}
      </StyledGnbNavMenuList>
    </StyledGnbNav>
  )
}
