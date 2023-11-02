import { useSelector } from 'react-redux'
import clsx from 'clsx'

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/category.selector'

import { CategoryPreview, ProductsHeader, SectionHeader } from '..'
import Spinner from '../../components/spinner/spinner.component'

import { Container, Row, Column } from '..'

import { StyledCategoriesPreview } from './styles'

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledCategoriesPreview className={clsx('categories-preview')}>
          <ProductsHeader />

          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title]

            return (
              <Container>
                <Row>
                  <Column sm={4}>
                    <SectionHeader title={title.toUpperCase()} to={title} />
                  </Column>
                </Row>

                <Row>
                  <CategoryPreview
                    key={title}
                    title={title}
                    products={products}
                  />
                </Row>
              </Container>
            )
          })}
        </StyledCategoriesPreview>
      )}
    </>
  )
}
