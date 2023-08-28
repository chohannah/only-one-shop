import { useEffect, useState } from 'react'
import { theme } from '../styles'
import { stripPx } from '../styles/utils'

interface UseResponsive {
  breakpoint: string
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

function getResponsive() {
  const { innerWidth } = window

  let breakpoint = 'M'
  let isMobile = true
  let isTablet = false
  let isDesktop = false

  if (innerWidth > stripPx(theme.breakpoints.tablet)) {
    breakpoint = 'T'
    isMobile = false
    isTablet = true
  }

  if (innerWidth > stripPx(theme.breakpoints.desktop)) {
    breakpoint = 'D'
    isTablet = false
    isDesktop = true
  }

  return { breakpoint, isMobile, isTablet, isDesktop }
}

export const useResponsive = (): UseResponsive => {
  const [responsive, setResponsive] = useState(getResponsive())

  const updateResponsive = () => {
    setResponsive(getResponsive())
  }

  useEffect(() => {
    window.addEventListener('resize', updateResponsive)
    return () => window.addEventListener('resize', updateResponsive)
  }, [])

  return { ...responsive }
}
