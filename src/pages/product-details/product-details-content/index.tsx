import {
  CategoryItem,
  CategoryItemSpecifcations,
} from '../../../store/categories/category.types'

import { Container, Row, Column } from '../../../components'

type ProductDetailsContentProps = {
  description?: CategoryItem['description'] | null
  specifications?: CategoryItemSpecifcations | null
}

export const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  description,
  specifications,
}) => {
  return (
    <Container>
      <Row>
        <Column sm={4} md={7} lg={6}>
          <h3>Description</h3>
          <p>{description}</p>
        </Column>

        <Column sm={4} md={5} lg={6}>
          <dl>
            <div>
              <dt>Dimensions:</dt>
              <dd>{specifications?.dimensions}</dd>
            </div>
            <div>
              <dt>Weight:</dt>
              <dd>{specifications?.weight}</dd>
            </div>
            <div>
              <dt>Item No:</dt>
              <dd>{specifications?.number}</dd>
            </div>
          </dl>
        </Column>
      </Row>
    </Container>
  )
}
