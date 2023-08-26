import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import clsx from 'clsx'

import { useResponsive } from '../../hooks/useResponsive'
import GnbCartDropdown from '../cart-dropdown'

import { LogoLetter } from '../../assets/images'
import { StyledGnb } from './styles'
import { Grid } from '..'
import { GnbNav } from './nav'
import Drawer from './drawer'
import AuthControlButton from './auth-control-button'

const Gnb = () => {
  const { isDesktop } = useResponsive()

  return (
    <Fragment>
      <StyledGnb className={clsx('gnb')}>
        <Grid sm={4}>
          <div className="gnb-wrapper">
            <div className="gnb-left">
              {isDesktop ? <GnbNav /> : <Drawer />}
            </div>

            <h1 className="logo">
              <Link to="/">
                <LogoLetter />
              </Link>
            </h1>

            <div className="gnb-right">
              <AuthControlButton />

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
