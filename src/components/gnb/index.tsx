import { Outlet, Link } from 'react-router-dom'
import clsx from 'clsx'

import { useResponsive } from '../../hooks/useResponsive'
import { CartDropdown } from '../cart-dropdown'

import { LogoLetter } from '../../assets/logos'

import { Grid, GnbNav, Sidebar, AuthControlButton } from '..'

import { StyledGnb } from './styles'


export const Gnb = () => {
  const { isDesktop } = useResponsive()

  return (
    <>
      <StyledGnb className={clsx('gnb')}>
        <Grid sm={4}>
          <div className="gnb-wrapper">
            <div className="gnb-left">
              {isDesktop ? <GnbNav /> : <Sidebar />}
            </div>

            <h1 className="logo">
              <Link to="/">
                <LogoLetter />
              </Link>
            </h1>

            <div className="gnb-right">
              {isDesktop ? <AuthControlButton /> : null}

              <CartDropdown />
            </div>
          </div>
        </Grid>
      </StyledGnb>

      <Outlet />
    </>
  )
}
