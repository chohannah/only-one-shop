import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { navMap } from '../nav-map'

import {
  StyledGnbSidebarDetails,
  StyledMainNav,
  StyledMainNavList,
  StyledMainNavListItem,
} from './styles'
import AuthControlButton from './auth-control-button'

interface SidebarDetailsProps {
  isOpen: boolean
}

const SidebarDetails: React.FC<SidebarDetailsProps> = ({ isOpen }) => {
  const menuList = Object.keys(navMap.menuName)

  return (
    <StyledGnbSidebarDetails
      className={clsx('sidebar-details')}
      isOpen={isOpen}
    >
      <StyledMainNav>
        <StyledMainNavList>
          {menuList.map((menuItem) => (
            <StyledMainNavListItem key={menuItem}>
              <NavLink to={`/${menuItem}`}>
                {Object.values(navMap.menuName[menuItem])}
              </NavLink>
            </StyledMainNavListItem>
          ))}

          <AuthControlButton />
        </StyledMainNavList>
      </StyledMainNav>
    </StyledGnbSidebarDetails>
  )
}

export default SidebarDetails
