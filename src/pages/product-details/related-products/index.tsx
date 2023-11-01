import { useSelector } from 'react-redux'

import { CategoryItem } from '../../../store/categories/category.types'
import { selectCategories } from '../../../store/categories/category.selector'

import { Container, Row, Column } from '../../../components'

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
    <div>
      <Container>
        <Row>
          <Column sm={4}>
            <h3>Related Products</h3>
          </Column>
        </Row>

        <Row>
          {randomRelatedProducts.map((product) => (
            <Column sm={2} md={3} lg={3} key={product.id}>
              {product.name}
              <img src={product.images?.thumbnail} alt="" />
            </Column>
          ))}
        </Row>
      </Container>
    </div>
  )
}
