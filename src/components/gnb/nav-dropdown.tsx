import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { NavMap, navMap } from '../nav-map'
import {
  StyledGnbNavDropdown,
  StyledGnbNavDropdownNavList,
  StyledGnbNavDropdownNavListItem,
  StyledGnbnavDropdownNavThumbnail,
} from './styles'

interface NavDropdownProps {
  menuType: keyof NavMap['navMenu']
}

const NavDropdown: React.FC<NavDropdownProps> = ({ menuType }) => {
  const dropdownMenuList = Object.values(navMap.navMenu[menuType])
  const [isItemHovered, setIsItemHovered] = useState<string | null>(null)

  const handleMouseEnter = (item: string) => {
    setIsItemHovered(item)
  }

  return (
    <StyledGnbNavDropdown>
      {dropdownMenuList.map((item) => (
        <StyledGnbNavDropdownNavList>
          <StyledGnbNavDropdownNavListItem
            key={item}
            onMouseEnter={() => handleMouseEnter(item)}
          >
            <NavLink to={`${menuType}/${item.toLowerCase()}`}>{item}</NavLink>
          </StyledGnbNavDropdownNavListItem>
        </StyledGnbNavDropdownNavList>
      ))}

      <StyledGnbnavDropdownNavThumbnail>
        <img
          src={`${
            isItemHovered
              ? `${
                  process.env.PUBLIC_URL
                }/images/nav-dropdown/${menuType}-${isItemHovered.toLowerCase()}.jpg`
              : `${process.env.PUBLIC_URL}/images/nav-dropdown/${menuType}-all.jpg`
          }`}
          alt={`thumbnail of ${isItemHovered?.toLowerCase() || 'all'}`}
        ></img>
      </StyledGnbnavDropdownNavThumbnail>
    </StyledGnbNavDropdown>
  )
}

export default NavDropdown
