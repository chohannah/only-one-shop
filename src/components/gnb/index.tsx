import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import clsx from 'clsx'

import { selectCurrentUser } from '../../store/user/user.selector'
import { signOutStart } from '../../store/user/user.action'

import { useResponsive } from '../../hooks/useResponsive'
import GnbCartDropdown from '../cart-dropdown'

import { MenuIcon, LogInIcon, SignOutIcon } from '../../assets/icons'
import { LogoLetter } from '../../assets/images'
import { StyledGnb, StyledGnbIconButton } from './styles'
import { Grid } from '..'
import { GnbNav } from './nav'

const Gnb = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()

  const signOutUser = () => dispatch(signOutStart())

  const { isMobile } = useResponsive()

  return (
    <Fragment>
      <StyledGnb className={clsx('gnb')}>
        <Grid sm={4}>
          <div className="gnb-wrapper">
            <div className="gnb-left">
              {isMobile ? (
                <StyledGnbIconButton
                  className="gnb-icon-button"
                  type="button"
                  aria-label="open menu button"
                >
                  <MenuIcon />
                </StyledGnbIconButton>
              ) : (
                <GnbNav />
              )}
            </div>

            <h1 className="logo">
              <Link to="/">
                <LogoLetter />
              </Link>
            </h1>

            <div className="gnb-right">
              {currentUser ? (
                <StyledGnbIconButton className="signout" onClick={signOutUser}>
                  <SignOutIcon />
                  {isMobile ? null : 'Sign Out'}
                </StyledGnbIconButton>
              ) : (
                <StyledGnbIconButton className="login" as={Link} to="/log-in">
                  <LogInIcon />
                  {isMobile ? null : 'Log In'}
                </StyledGnbIconButton>
              )}

              <GnbCartDropdown />
            </div>
          </div>
        </Grid>
      </StyledGnb>

      <Outlet />
    </Fragment>
  )
}

export default Gnb
