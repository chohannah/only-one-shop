import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { NavMap, navMap } from '../nav-map'
import { Button } from '../button'

import {
  StyledGnbNavDropdown,
  StyledGnbNavDropdownNav,
  StyledGnbNavDropdownNavList,
  StyledGnbNavDropdownNavListItem,
  StyledGnbNavDropdownLinkCard,
  StyledGnbNavDropdownLinkCardGroup,
  StyledGnbNavDropdownNavThumbnail,
  StyledGnbNavDropdownLinkCardImage,
} from './styles'

interface NavDropdownProps {
  menuItem: keyof NavMap['navMenu']
  isActive: boolean
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  menuItem,
  isActive,
}) => {
  const [isItemHovered, setIsItemHovered] = useState<string | null>(null)

  const dropdownMenuList = Object.values(navMap.navMenu[menuItem])
  const productsSideMenuList = Object.keys(navMap.navMenu.sideProducts)
  const magazineSideMenuList = Object.keys(navMap.navMenu.sideMagazine)

  const handleMouseEnter = (item: string) => {
    setIsItemHovered(item)
  }

  return (
    <StyledGnbNavDropdown className={clsx('gnb-nav-dropdown')}>
      <StyledGnbNavDropdownNav>
        <StyledGnbNavDropdownNavList className={clsx('dropdown-list')}>
          <StyledGnbNavDropdownNavListItem
            onMouseEnter={() => handleMouseEnter('all')}
          >
            <NavLink to={`${menuItem}`}>All</NavLink>
          </StyledGnbNavDropdownNavListItem>

          {dropdownMenuList.map((item) => (
            <StyledGnbNavDropdownNavListItem
              key={item}
              onMouseEnter={() => handleMouseEnter(item)}
            >
              <NavLink to={`${menuItem}/${item.toLowerCase()}`}>{item}</NavLink>
            </StyledGnbNavDropdownNavListItem>
          ))}
        </StyledGnbNavDropdownNavList>

        <StyledGnbNavDropdownNavThumbnail
          className={clsx('dropdown-thumbnail')}
        >
          <img
            src={`${
              isItemHovered
                ? `${
                    process.env.PUBLIC_URL
                  }/images/nav-dropdown/${menuItem}-${isItemHovered.toLowerCase()}.jpg`
                : `${process.env.PUBLIC_URL}/images/nav-dropdown/${menuItem}-all.jpg`
            }`}
            alt={`thumbnail of ${isItemHovered?.toLowerCase() || 'all'}`}
          />
        </StyledGnbNavDropdownNavThumbnail>
      </StyledGnbNavDropdownNav>

      <StyledGnbNavDropdownLinkCardGroup
        className={clsx('dropdown-card-group')}
      >
        {menuItem === 'products' &&
          productsSideMenuList?.map((menu) => (
            <StyledGnbNavDropdownLinkCard key={menu}>
              <StyledGnbNavDropdownLinkCardImage
                as={Link}
                to={`collections/${menu}`}
                type="button"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/nav-dropdown/${menuItem}-${menu}.jpg`}
                  alt=""
                />
              </StyledGnbNavDropdownLinkCardImage>

              <Button to={`${menuItem}/${menu}`} variant="underlined">
                {navMap.navMenu.sideProducts[menu]}
              </Button>
            </StyledGnbNavDropdownLinkCard>
          ))}
        {menuItem === 'magazine' &&
          magazineSideMenuList?.map((menu) => (
            <StyledGnbNavDropdownLinkCard key={menu}>
              <StyledGnbNavDropdownLinkCardImage
                as={Link}
                to={`${menuItem}/${menu}`}
                type="button"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/nav-dropdown/${menuItem}-${menu}.jpg`}
                  alt=""
                />
              </StyledGnbNavDropdownLinkCardImage>

              <Button
                to={`${menuItem}/${menu}`}
                type="button"
                variant="underlined"
              >
                {navMap.navMenu.sideMagazine[menu]}
              </Button>
            </StyledGnbNavDropdownLinkCard>
          ))}
      </StyledGnbNavDropdownLinkCardGroup>
    </StyledGnbNavDropdown>
  )
}
