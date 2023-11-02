import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { CategoryItem } from '../../../store/categories/category.types'
import { designersMap } from '../../designers/designers-map'
import { useResponsive } from '../../../hooks'

import { Container, Row, Column, Button } from '../../../components'

import {
  StyledProductDetailsHeader,
  StyledProductDetailsHeaderInfo,
  StyledProductDetailsHeaderImage,
  StyledProductDetailsHeaderTitle,
  StyledProductDetailsHeaderCategory,
  StyledProductDetailsHeaderTablist,
  StyledProductDetailsHeaderPrice,
  StyledProductDetailsHeaderDesigner,
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
  const { isMobile } = useResponsive()

  const { name, images, price, description, specifications, designer } =
    product || {}

  const toggleTab = (tabId: string) => {
    if (activeTab === tabId) {
      setActiveTab(null)
    } else {
      setActiveTab(tabId)
    }
  }

  const isTabActive = (tabId: string) => activeTab === tabId

  const formattedDesignerName = (designerName: string) => {
    const namesWithoutDash = designerName.split('-')
    const capicaliseFirstLetters = namesWithoutDash.map((nameWithoutDash) => {
      return nameWithoutDash.charAt(0).toUpperCase() + nameWithoutDash.slice(1)
    })

    return capicaliseFirstLetters.join(' ')
  }

  const handleScrollToDesc = () => {
    const description = document.querySelector('#description') as HTMLElement

    if (description) {
      window.scrollTo({
        top: description.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <StyledProductDetailsHeader className={clsx('product-details-header')}>
      <Container>
        <Row alignItems="center">
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

              <StyledProductDetailsHeaderPrice>
                € {price}
              </StyledProductDetailsHeaderPrice>

              {!isMobile ? (
                <Button
                  className="add-button"
                  variant="filled"
                  size={54}
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
              ) : null}

              <Link
                className="header-desc"
                to="#description"
                onClick={handleScrollToDesc}
              >
                {description ? description.toString() : ''}
              </Link>

              <StyledProductDetailsHeaderTablist>
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

                <p
                  id="tab-2"
                  role="tabpanel"
                  className={clsx('tablist-item-content', {
                    hidden: !isTabActive('tab-2'),
                  })}
                >
                  Shipping cost is based on size, weight and destination. Just
                  add the product to the cart. The shipping price appears in the
                  checkout. Read more about Shipping & Payment {/*  */}
                  <Link className="link-to-shipping" to="/shipping">
                    here
                  </Link>
                </p>
              </StyledProductDetailsHeaderTablist>

              <StyledProductDetailsHeaderDesigner>
                <h3 className="designer-title">Designed by:</h3>

                {designer?.map((name) => {
                  const designersListItem = designersMap.find(
                    (designerInfo) => designerInfo.path === name
                  )

                  return (
                    <Link
                      key={name}
                      className="designer-link"
                      to={`/designers/${designersListItem?.path}`}
                    >
                      <div className="designer-link-image">
                        <img
                          src={designersListItem?.imgUrl}
                          alt={`portrait of ${designersListItem?.designer}`}
                        />
                      </div>

                      <p className="designer-link-name">
                        {formattedDesignerName(name)}
                      </p>
                    </Link>
                  )
                })}
              </StyledProductDetailsHeaderDesigner>
            </StyledProductDetailsHeaderInfo>
          </Column>
        </Row>
      </Container>
    </StyledProductDetailsHeader>
  )
}
