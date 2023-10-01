import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import clsx from 'clsx'

import { useResponsive } from '../../hooks/useResponsive'
import { CartDropdown } from '../cart-dropdown'

import { LogoLetter } from '../../assets/logos'

import { Grid, GnbNav, Sidebar, AuthControlButton } from '..'

import { StyledGnb } from './styles'
import { theme } from '../../styles'

export const Gnb = () => {
  const { isDesktop } = useResponsive()
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          setShow(!entry.isIntersecting)
        }, 10) // 100ms debouncing time
      },
      { threshold: 0.1 }
    )

    const directory = document.querySelector('.home-carousel')

    if (directory) {
      observer.observe(directory)
    }

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <StyledGnb
        className={clsx('gnb')}
        style={{
          backgroundColor: show ? `${theme.colors.white}` : 'transparent',
        }}
      >
        <Grid sm={4}>
          <div className="gnb-wrapper">
            <div className="gnb-left">
              {isDesktop ? <GnbNav /> : <Sidebar />}
            </div>

            <h1
              className="logo"
              style={{
                display: show ? 'flex' : 'none',
              }}
            >
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
