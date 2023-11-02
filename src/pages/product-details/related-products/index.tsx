import { useSelector } from 'react-redux'
import clsx from 'clsx'

import { selectCategories } from '../../../store/categories/category.selector'
import { CategoryItem } from '../../../store/categories/category.types'

import { Container, Row, Column, CategoryPreview } from '../../../components'

import { StyledRelatedProducts, StyledRelatedProductsTitle } from './styles'

type RelatedProductsProps = {
  currentProduct: CategoryItem
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProduct,
}) => {
  const categories = useSelector(selectCategories)
  const relatedCategory = categories.find((category) =>
    category.items.some((item) => item.id === currentProduct.id)
  )

  const relatedProducts = relatedCategory
    ? relatedCategory.items.filter((item) => item.id !== currentProduct.id)
    : []

  const randomRelatedProducts = relatedProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 4)

  return (
    <StyledRelatedProducts className={clsx('related-products')}>
      <Container>
        <Row>
          <Column sm={4}>
            <StyledRelatedProductsTitle>
              Related Products
            </StyledRelatedProductsTitle>
          </Column>
        </Row>

        <Row>
          {randomRelatedProducts.map((product) => (
            <CategoryPreview
              key={product.id}
              title={product.name}
              products={[product]}
            />
          ))}
        </Row>
      </Container>
    </StyledRelatedProducts>
  )
}
