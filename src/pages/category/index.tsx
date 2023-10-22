import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import {
  selectIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'

import { ProductCard } from '../../components'
import Spinner from '../../components/spinner/spinner.component'
// import { createLogger } from "redux-logger";

import { Container, Row, Column } from '../../components'

import { StyledCategory, StyledCategoryTitle } from './styles'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledCategory className={clsx('category')}>
          <Container>
            <Row>
              <Column sm={4}>
                <StyledCategoryTitle>
                  {category.toUpperCase()}
                </StyledCategoryTitle>
              </Column>
            </Row>
            <Row>
              {products &&
                products.map((product) => (
                  <Column sm={2} md={3}>
                    <ProductCard key={product.id} product={product} />
                  </Column>
                ))}
            </Row>
          </Container>
        </StyledCategory>
      )}
    </>
  )
}

export default Category
