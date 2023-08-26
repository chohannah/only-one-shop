import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { navMap } from '../nav-map'

import {
  StyledGnbDrawerDetails,
  StyledMainNav,
  StyledMainNavList,
  StyledMainNavListItem,
} from './styles'

interface DrawerDetailsProps {
  isOpen: boolean
}

const DrawerDetails: React.FC<DrawerDetailsProps> = ({ isOpen }) => {
  const menuList = Object.keys(navMap.menuName)

  return (
    <StyledGnbDrawerDetails className={clsx('drawer-details')} isOpen={isOpen}>
      <StyledMainNav>
        <StyledMainNavList>
          {menuList.map((menuItem) => (
            <StyledMainNavListItem key={menuItem}>
              <NavLink to={`/${menuItem}`}>
                {Object.values(navMap.menuName[menuItem])}
              </NavLink>
            </StyledMainNavListItem>
          ))}
        </StyledMainNavList>
      </StyledMainNav>
    </StyledGnbDrawerDetails>
  )
}

export default DrawerDetails
