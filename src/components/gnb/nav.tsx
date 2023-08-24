import { NavLink } from 'react-router-dom'
import { navMap } from '../nav-map'
import {
  StyledGnbNav,
  StyledGnbNavMenuList,
  StyledGnbNavMenuListItem,
} from './styles'
import clsx from 'clsx'

export const GnbNav = () => {
  const menuList = Object.keys(navMap.menuName)

  return (
    <StyledGnbNav className={clsx('gnb-nav')}>
      <h2 className="visually-hidden">menu</h2>

      <StyledGnbNavMenuList>
        {menuList.map((menuItem) => (
          <StyledGnbNavMenuListItem key={menuItem}>
            <NavLink to={`/${menuItem}`}>{menuItem.toUpperCase()}</NavLink>
          </StyledGnbNavMenuListItem>
        ))}
      </StyledGnbNavMenuList>
    </StyledGnbNav>
  )
}
