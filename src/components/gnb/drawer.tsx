import React, { useState } from 'react'

import { StyledGnbDrawerIconButton } from './styles'
import DrawerDetails from './drawer-details'
import clsx from 'clsx'

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <StyledGnbDrawerIconButton
        className={`drawer-icon-button ${clsx(
          isDrawerOpen ? 'drawer-active' : null
        )}`}
        type="button"
        aria-label="open menu button"
        onClick={toggleDrawer}
      >
        <span className="menu-icon" />
      </StyledGnbDrawerIconButton>

      <DrawerDetails isOpen={isDrawerOpen} />
    </>
  )
}

export default Drawer
