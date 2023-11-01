import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import {
  selectIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'

import { Button, ProductCard, ProductsHeader } from '../../components'
import Spinner from '../../components/spinner/spinner.component'
// import { createLogger } from "redux-logger";

import { Container, Row, Column } from '../../components'

import {
  StyledCategory,
  StyledCategoryHeader,
  StyledCategoryTitle,
} from './styles'
import { ArrowLongRight } from '../../assets/icons'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const location = useLocation()
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  const isCategoryPage = location.pathname.startsWith('/products/')

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledCategory className={clsx('category')}>
          <ProductsHeader />

          <Container>
            {!isCategoryPage && (
              <Row>
                <Column sm={4}>
                  <StyledCategoryHeader>
                    <StyledCategoryTitle>
                      {category.toUpperCase()}
                    </StyledCategoryTitle>

                    <Button
                      className="category-header-button"
                      variant="icon"
                      to="/products"
                    >
                      Back to list
                      <ArrowLongRight />
                    </Button>
                  </StyledCategoryHeader>
                </Column>
              </Row>
            )}
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
