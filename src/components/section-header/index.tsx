import { ReactNode } from 'react'
import { navMap } from '../nav-map'

import { ArrowLongRight } from '../../assets/icons'

import { Column } from '../grid'
import { Button } from '../button'

import { StyledSectionHeader, StyledSectionTitle } from './styles'

export type SectionHeaderVariant = 'default' | 'tabs'

interface SectionHeaderProps {
  variant?: SectionHeaderVariant
  title: string
  children?: ReactNode
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  variant = 'default',
  title,
}) => {
  let pathname = window.location.pathname
  const tabList =
    pathname === '/' || '/products' || 'products/*'
      ? Object.values(navMap.navMenu.products)
      : Object.values(navMap.navMenu.magazine)

  return (
    <Column sm={4}>
      <StyledSectionHeader title={title}>
        <StyledSectionTitle>{title}</StyledSectionTitle>

        {variant === 'tabs' ? (
          <ul>
            {tabList.map((tab) => (
              <li key={tab}>
                <button>{tab}</button>
              </li>
            ))}
          </ul>
        ) : null}

        <Button variant="icon">
          See all
          <ArrowLongRight />
        </Button>
      </StyledSectionHeader>
    </Column>
  )
}
