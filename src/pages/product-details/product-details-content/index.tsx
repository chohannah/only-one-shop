import { Link } from 'react-router-dom'

import {
  CategoryItem,
  CategoryItemSpecifcations,
} from '../../../store/categories/category.types'

import { Container, Row, Column } from '../../../components'

import {
  StyledProductDetailsContent,
  StyledProductDetailsContentDesc,
  StyledProductDetailsContentTablist,
} from './styles'

type ProductDetailsContentProps = {
  description?: CategoryItem['description'] | null
  specifications?: CategoryItemSpecifcations | null
}

export const ProductDetailsContent: React.FC<ProductDetailsContentProps> = ({
  description,
  specifications,
}) => {
  return (
    <StyledProductDetailsContent>
      <Container>
        <Row>
          <Column sm={4} md={7} lg={8}>
            <StyledProductDetailsContentDesc>
              <h3 className="desc-title">Description</h3>
              <p className="desc-content">{description}</p>
            </StyledProductDetailsContentDesc>
          </Column>

          <Column sm={4} md={5} lg={4}>
            <StyledProductDetailsContentTablist>
              <ul className="tablist">
                <li className="tablist-item">Specification</li>
                <li className="tablist-item">
                  <Link to="/shipping">Shipping & Payment</Link>
                </li>
              </ul>

              <dl className="tablist-item-content">
                <div className="dimensions">
                  <dt>Dimensions:</dt>
                  <dd>{specifications?.dimensions}</dd>
                </div>

                <div className="weight">
                  <dt>Weight:</dt>
                  <dd>{specifications?.weight}</dd>
                </div>

                <div className="item-number">
                  <dt>Item No:</dt>
                  <dd>{specifications?.number}</dd>
                </div>
              </dl>
            </StyledProductDetailsContentTablist>
          </Column>
        </Row>
      </Container>
    </StyledProductDetailsContent>
  )
}
