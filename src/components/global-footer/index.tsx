import { Link, NavLink } from 'react-router-dom'

import { navMap } from '../nav-map'
import { useResponsive } from '../../hooks/useResponsive'

import { LogoCircle } from '../../assets/logos'
import {
  SocialInstagram,
  SocialPinterest,
  SocialTwitter,
} from '../../assets/icons'

import {
  StyledGlobalFooter,
  StyledGlobalFooterIconButton,
  StyledGlobalFooterLeft,
  StyledGlobalFooterLogo,
  StyledGlobalFooterRight,
  StyledGlobalFooterSocialIconGroup,
  StyledGlobalFooterSubMenuList,
  StyledGlobalFooterSubMenuListItem,
  StyledGlobalFooterSubMenuText,
  StyledGlobalFooterWrapper,
} from './styles'
import { Grid } from '../grid'

export function GlobalFooter() {
  const { isDesktop } = useResponsive()

  const subMenuList = Object.keys(navMap.subMenuName)

  return (
    <StyledGlobalFooter>
      <Grid sm={4}>
        <StyledGlobalFooterWrapper>
          <StyledGlobalFooterLeft>
            <StyledGlobalFooterLogo>
              <LogoCircle />
            </StyledGlobalFooterLogo>

            {isDesktop && (
              <StyledGlobalFooterSubMenuList>
                {subMenuList.map((subMenuItem) => (
                  <StyledGlobalFooterSubMenuListItem key={subMenuItem}>
                    <NavLink to={`/${subMenuItem}`}>
                      {navMap.subMenuName[subMenuItem]}
                    </NavLink>
                  </StyledGlobalFooterSubMenuListItem>
                ))}
              </StyledGlobalFooterSubMenuList>
            )}
          </StyledGlobalFooterLeft>

          <StyledGlobalFooterRight>
            <StyledGlobalFooterSocialIconGroup>
              <StyledGlobalFooterIconButton as={Link} to="/">
                <SocialInstagram />
              </StyledGlobalFooterIconButton>

              <StyledGlobalFooterIconButton as={Link} to="/">
                <SocialPinterest />
              </StyledGlobalFooterIconButton>

              <StyledGlobalFooterIconButton as={Link} to="/">
                <SocialTwitter />
              </StyledGlobalFooterIconButton>
            </StyledGlobalFooterSocialIconGroup>

            <StyledGlobalFooterSubMenuText>
              Honouring masters, <br /> Collecting design icons.
            </StyledGlobalFooterSubMenuText>
          </StyledGlobalFooterRight>
        </StyledGlobalFooterWrapper>
      </Grid>
    </StyledGlobalFooter>
  )
}
