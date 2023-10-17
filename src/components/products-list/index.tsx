import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCategoriesStart } from '../../store/categories/category.action'

import { useResponsive } from '../../hooks'

import { Container, Row, Column } from '../grid'

import { SectionHeader, ShortCategoriesPreview } from '..'

import { StyledProductsList } from './styles'
import clsx from 'clsx'

export const ProductsList = () => {
  const dispatch = useDispatch()
  const { isMobile } = useResponsive()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])

  return (
    <StyledProductsList className={clsx('products-list')}>
      <Container>
        <Row>
          <Column sm={4}>
            <SectionHeader
              title={isMobile ? 'Latest' : 'Latest products'}
              to="products"
            />
          </Column>

          <ShortCategoriesPreview />
        </Row>
      </Container>
    </StyledProductsList>
  )
}
