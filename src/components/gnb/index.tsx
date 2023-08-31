import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import clsx from 'clsx'

import { useResponsive } from '../../hooks/useResponsive'
import GnbCartDropdown from '../cart-dropdown'

import { LogoLetter } from '../../assets/logos'

import { Grid } from '..'
import { GnbNav } from '..'
import { Sidebar } from '..'
import { AuthControlButton } from '..'

import { StyledGnb } from './styles'

export const Gnb = () => {
  const { isDesktop } = useResponsive()

  return (
    <Fragment>
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

              <GnbCartDropdown />
            </div>
          </div>
        </Grid>
      </StyledGnb>

      <Outlet />
    </Fragment>
  )
}
