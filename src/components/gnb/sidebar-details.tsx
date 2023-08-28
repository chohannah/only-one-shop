import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { navMap } from '../nav-map'

import { Grid } from '../grid'
import {
  SocialTwitter,
  SocialInstagram,
  SocialPinterest,
} from '../../assets/icons'
import { LogoCircle } from '../../assets/images'

import {
  StyledGnbIconButton,
  StyledGnbSidebarDetails,
  StyledMainNav,
  StyledMainNavList,
  StyledMainNavListItem,
  StyledSidebarLogo,
  StyledSubNav,
  StyledSubNavList,
  StyledSubNavListItem,
  StyledSubNavSocialIconGroup,
} from './styles'
import AuthControlButton from './auth-control-button'

interface SidebarDetailsProps {
  isOpen: boolean
}

const SidebarDetails: React.FC<SidebarDetailsProps> = ({ isOpen }) => {
  const mainMenuList = Object.keys(navMap.mainMenuName)
  const subMenuList = Object.keys(navMap.subMenuName)

  return (
    <StyledGnbSidebarDetails
      className={clsx('sidebar-details')}
      isOpen={isOpen}
    >
      <Grid sm={4}>
        <StyledMainNav className={clsx('main-nav')}>
          <StyledMainNavList>
            {mainMenuList.map((mainMenuItem) => (
              <StyledMainNavListItem key={mainMenuItem}>
                <NavLink to={`/${mainMenuItem}`}>
                  {Object.values(navMap.mainMenuName[mainMenuItem])}
                </NavLink>
              </StyledMainNavListItem>
            ))}

            <StyledMainNavListItem>
              <AuthControlButton />
            </StyledMainNavListItem>
          </StyledMainNavList>
        </StyledMainNav>

        <StyledSubNav className={clsx('sub-nav')}>
          <StyledSubNavList>
            {subMenuList.map((subMenuItem) => (
              <StyledSubNavListItem key={subMenuItem}>
                <NavLink to={`/${subMenuItem}`}>
                  {Object.values(navMap.subMenuName[subMenuItem])}
                </NavLink>
              </StyledSubNavListItem>
            ))}

            <StyledSubNavSocialIconGroup>
              <StyledGnbIconButton as={Link} to="/">
                <SocialTwitter />
              </StyledGnbIconButton>
              <StyledGnbIconButton as={Link} to="/">
                <SocialInstagram />
              </StyledGnbIconButton>
              <StyledGnbIconButton as={Link} to="/">
                <SocialPinterest />
              </StyledGnbIconButton>
            </StyledSubNavSocialIconGroup>
          </StyledSubNavList>
        </StyledSubNav>

        <StyledSidebarLogo className={clsx('circle-logo')}>
          <LogoCircle />
        </StyledSidebarLogo>
      </Grid>
    </StyledGnbSidebarDetails>
  )
}

export default SidebarDetails
