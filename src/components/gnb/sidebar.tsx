import React, { useState } from 'react'

import { StyledGnbSidebarIconButton } from './styles'
import { SidebarDetails } from './sidebar-details'
import clsx from 'clsx'

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <StyledGnbSidebarIconButton
        className={`sidebar-icon-button ${clsx(
          isSidebarOpen ? 'sidebar-active' : null
        )}`}
        type="button"
        aria-label="open menu button"
        onClick={toggleSidebar}
      >
        <span className="menu-icon" />
      </StyledGnbSidebarIconButton>

      <SidebarDetails isOpen={isSidebarOpen} />
    </>
  )
}
