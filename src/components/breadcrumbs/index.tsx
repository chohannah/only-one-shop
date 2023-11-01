import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import { CategoryItem } from '../../store/categories/category.types'

import { Container, Row, Column } from '../grid'

import { StyledBreadcrumbs } from './styles'

type BreadcrumbsProps = {
  menu: string
  category?: string
  name?: CategoryItem['name']
  separator: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  menu,
  category,
  name,
  separator,
}) => {
  const location = useLocation()

  const segments: { label: string; path: string }[] = []

  if (menu) {
    segments.push({
      label: menu.charAt(0).toUpperCase() + menu.slice(1),
      path: `/${menu}`,
    })
  }

  if (category) {
    segments.push({
      label: category,
      path: `/${menu}/${category.toLowerCase()}`,
    })
  }

  if (name) {
    segments.push({ label: name, path: '' })
  }

  return (
    <StyledBreadcrumbs className={clsx('breadcrumbs')}>
      <Container>
        <Row>
          <Column sm={4}>
            {segments.map((segment, index) => {
              const path =
                index === segments.length - 1 ? location.pathname : segment.path

              return (
                <span key={segment.path} className="label">
                  {/* set separator since second label */}
                  {index > 0 && separator}

                  {index === segments.length - 1 ? (
                    <span className="label-last">{segment.label}</span>
                  ) : (
                    <Link to={path} className="label-link">
                      {segment.label}
                    </Link>
                  )}
                </span>
              )
            })}
          </Column>
        </Row>
      </Container>
    </StyledBreadcrumbs>
  )
}
