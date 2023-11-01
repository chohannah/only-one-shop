import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { CategoryItem } from '../../../store/categories/category.types'

import { Container, Row, Column, Button } from '../../../components'

import {
  StyledProductDetailsHeader,
  StyledProductDetailsHeaderInfo,
  StyledProductDetailsHeaderImage,
  StyledProductDetailsHeaderTitle,
  StyledProductDetailsHeaderCategory,
  StyledProductDetailsHeaderTablist,
} from './styles'

type ProductDetailsHeaderProps = {
  category?: string
  product: CategoryItem
  handleAddToCart: () => void
}

export const ProductDetailsHeader: React.FC<ProductDetailsHeaderProps> = ({
  category,
  product,
  handleAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>('tab-1')

  const toggleTab = (tabId: string) => {
    if (activeTab === tabId) {
      setActiveTab(null)
    } else {
      setActiveTab(tabId)
    }
  }

  const isTabActive = (tabId: string) => activeTab === tabId

  const { name, images, price, description, specifications } = product || {}

  return (
    <StyledProductDetailsHeader>
      <Container>
        <Row>
          <Column sm={4} md={7} lg={8}>
            <StyledProductDetailsHeaderImage>
              <img src={images?.main} alt="" />
            </StyledProductDetailsHeaderImage>
          </Column>

          <Column sm={4} md={5} lg={4}>
            <StyledProductDetailsHeaderInfo>
              <StyledProductDetailsHeaderTitle>
                {name}
              </StyledProductDetailsHeaderTitle>

              <Link to={`/products/${category ? category?.toLowerCase() : ''}`}>
                <StyledProductDetailsHeaderCategory>
                  {category}
                </StyledProductDetailsHeaderCategory>
              </Link>

              <p>Price: €{price}</p>

              <Button
                className="product-card-add-button"
                variant="filled"
                size={54}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>

              <Link className="header-desc" to="#detaild-description">
                {description ? description.toString() : ''}
              </Link>

              <StyledProductDetailsHeaderTablist className="header-tablist">
                <ul className="tablist" role="tablist">
                  <li className="tablist-item" role="tab">
                    <Link
                      to="#tab-1"
                      role="presentation"
                      tabIndex={isTabActive('tab-1') ? 0 : -1}
                      onClick={() => toggleTab('tab-1')}
                      className={clsx({ active: isTabActive('tab-1') })}
                    >
                      Specification
                    </Link>
                  </li>

                  <li className="tablist-item" role="tab">
                    <Link
                      to="#tab-2"
                      role="presentation"
                      tabIndex={isTabActive('tab-2') ? 0 : -1}
                      onClick={() => toggleTab('tab-2')}
                      className={clsx({ active: isTabActive('tab-2') })}
                    >
                      Shipping & Payment
                    </Link>
                  </li>
                </ul>

                <dl
                  id="tab-1"
                  role="tabpanel"
                  className={clsx('tablist-item-content', {
                    hidden: !isTabActive('tab-1'),
                  })}
                >
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

                <p
                  id="tab-2"
                  role="tabpanel"
                  className={clsx('tablist-item-content', {
                    hidden: !isTabActive('tab-2'),
                  })}
                >
                  Shipping cost is based on size, weight and destination. Just
                  add the product to the cart. The shipping price appears in the
                  checkout. Read more about Shipping & Payment
                  <Link to="/shipping">here</Link>
                </p>
              </StyledProductDetailsHeaderTablist>
            </StyledProductDetailsHeaderInfo>
          </Column>
        </Row>
      </Container>
    </StyledProductDetailsHeader>
  )
}
